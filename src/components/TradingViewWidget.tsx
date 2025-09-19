"use client";

import { useEffect, useRef, useState } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  theme?: 'light' | 'dark';
  onPriceUpdate?: (price: number) => void;
}

declare global {
  interface Window {
    TradingView: {
      widget: (config: Record<string, unknown>) => void;
    };
  }
}

export default function TradingViewWidget({
  symbol = "FX:EURUSD",
  width = "100%",
  height = "500",
  theme = "dark",
  onPriceUpdate
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPrice, setCurrentPrice] = useState(1.0854);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  // Check if forex market is open
  const checkMarketHours = () => {
    const now = new Date();
    const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
    const day = utc.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = utc.getHours();

    // Forex market is closed on weekends (Friday 22:00 UTC to Sunday 22:00 UTC)
    if (day === 6 || (day === 0 && hour < 22) || (day === 5 && hour >= 22)) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsMarketOpen(checkMarketHours());

    // Check market status every minute
    const marketCheckInterval = setInterval(() => {
      setIsMarketOpen(checkMarketHours());
    }, 60000);

    return () => clearInterval(marketCheckInterval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create the TradingView widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    widgetContainer.style.height = '100%';
    widgetContainer.style.width = '100%';

    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.height = 'calc(100% - 32px)';
    widgetDiv.style.width = '100%';

    const copyrightDiv = document.createElement('div');
    copyrightDiv.className = 'tradingview-widget-copyright';
    copyrightDiv.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a>';

    widgetContainer.appendChild(widgetDiv);
    widgetContainer.appendChild(copyrightDiv);

    // Create the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;

    const config = {
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "15",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: symbol,
      theme: theme,
      timezone: "Etc/UTC",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true
    };

    script.innerHTML = JSON.stringify(config);
    widgetContainer.appendChild(script);

    containerRef.current.appendChild(widgetContainer);
  }, [symbol, theme, isMarketOpen]);

  // Separate effect for price updates
  useEffect(() => {
    let priceInterval: NodeJS.Timeout;

    if (isMarketOpen) {
      priceInterval = setInterval(() => {
        setCurrentPrice(prev => {
          // More realistic price movement during market hours
          const change = (Math.random() - 0.5) * 0.0008;
          const newPrice = Math.max(1.05, Math.min(1.12, prev + change));
          onPriceUpdate?.(newPrice);
          return newPrice;
        });
      }, 3000);
    } else {
      // During market close, keep price static
      onPriceUpdate?.(currentPrice);
    }

    return () => {
      if (priceInterval) clearInterval(priceInterval);
    };
  }, [isMarketOpen, onPriceUpdate, currentPrice]);

  return (
    <div className="relative w-full h-full bg-zinc-900/50 rounded-lg overflow-hidden" style={{ height, width }}>
      {!isMarketOpen && (
        <div className="absolute top-4 right-4 z-10 bg-red-500/20 border border-red-500/50 rounded px-3 py-2">
          <div className="text-red-400 text-sm font-medium">Market Closed</div>
          <div className="text-red-300 text-xs">Forex trading resumes Sunday 22:00 UTC</div>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
