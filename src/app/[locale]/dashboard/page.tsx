"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import TradingViewWidget from "@/components/TradingViewWidget";
import { authService, User, TradingAccount } from "@/lib/auth";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  DollarSign,
  Activity,
  Clock,
  Target,
  Users,
  Settings,
  LogOut,
  RefreshCw,
  PlusCircle,
  MinusCircle,
  AlertCircle,
  Shield,
  TrendingUpIcon,
  StopCircle
} from "lucide-react";

interface Trade {
  id: string;
  pair: string;
  type: "BUY" | "SELL";
  lotSize: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
  timestamp: Date;
  status: "OPEN" | "CLOSED";
  stopLoss?: number;
  takeProfit?: number;
  closeReason?: "MANUAL" | "STOP_LOSS" | "TAKE_PROFIT";
}

// Using TradingAccount from auth service

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [tradingData, setTradingData] = useState<TradingAccount>({
    balance: 100000,
    equity: 100000, // Start with balance = equity
    floatingPnL: 0, // Start with no floating P&L
    margin: 0, // Start with no margin used
    freeMargin: 100000, // Start with full balance as free margin
    marginLevel: 0, // No margin level initially
    tradesCount: 0,
    dailyTradesUsed: 0,
    lastTradeReset: new Date()
  });
  const [tradeError, setTradeError] = useState("");

  const [selectedPair, setSelectedPair] = useState("EUR/USD");
  const [lotSize, setLotSize] = useState(0.1);
  const [currentPrice, setCurrentPrice] = useState(1.0854);
  const [chartPrice, setChartPrice] = useState(1.0854);

  // Real forex market data state
  const [marketData, setMarketData] = useState<Record<string, {price: number, change: number, changePercent: number}>>({
    "EUR/USD": { price: 1.0854, change: 0.0012, changePercent: 0.11 },
    "GBP/USD": { price: 1.2734, change: -0.0023, changePercent: -0.18 },
    "USD/JPY": { price: 149.85, change: 0.45, changePercent: 0.30 },
    "USD/CHF": { price: 0.8891, change: 0.0015, changePercent: 0.17 },
    "AUD/USD": { price: 0.6623, change: -0.0008, changePercent: -0.12 },
    "USD/CAD": { price: 1.3567, change: 0.0034, changePercent: 0.25 },
    "NZD/USD": { price: 0.6089, change: -0.0015, changePercent: -0.25 },
    "GBP/JPY": { price: 190.82, change: 0.67, changePercent: 0.35 }
  });

  // Advanced trading parameters
  const [stopLoss, setStopLoss] = useState<number | undefined>();
  const [takeProfit, setTakeProfit] = useState<number | undefined>();
  const [useRiskManagement, setUseRiskManagement] = useState(false);

  const [trades, setTrades] = useState<Trade[]>([]);

  const currencyPairs = [
    "EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "USD/CAD", "NZD/USD", "GBP/JPY"
  ];

  useEffect(() => {
    // Check authentication
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);

    // Load user's trading account
    const account = authService.getTradingAccount();
    if (account) {
      setTradingData(account);
    }

    // Price monitoring for stop loss/take profit
    const checkStopLossAndTakeProfit = () => {
      setTrades(prevTrades => {
        let totalFloatingPnL = 0;

        const updatedTrades = prevTrades.map(trade => {
          if (trade.status === "CLOSED") return trade;

          const shouldClose = checkIfTradeShoulClose(trade, currentPrice);
          if (shouldClose) {
            // Close the trade and add P&L to balance
            setTradingData(prev => ({
              ...prev,
              balance: prev.balance + calculatePnL(trade, currentPrice),
              margin: prev.margin - (trade.lotSize * 1000),
              freeMargin: prev.freeMargin + (trade.lotSize * 1000)
            }));

            return {
              ...trade,
              status: "CLOSED" as const,
              currentPrice: currentPrice,
              pnl: calculatePnL(trade, currentPrice),
              closeReason: shouldClose.reason
            };
          }

          const updatedTrade = {
            ...trade,
            currentPrice: currentPrice,
            pnl: calculatePnL(trade, currentPrice)
          };

          // Add to floating P&L for open trades
          totalFloatingPnL += updatedTrade.pnl;

          return updatedTrade;
        });

        // Update equity calculation
        setTradingData(prev => ({
          ...prev,
          floatingPnL: totalFloatingPnL,
          equity: prev.balance + totalFloatingPnL,
          marginLevel: prev.margin > 0 ? ((prev.balance + totalFloatingPnL) / prev.margin) * 100 : 0
        }));

        return updatedTrades;
      });
    };

    // Update market data with realistic price movements
    const updateMarketData = () => {
      setMarketData(prev => {
        const updated = { ...prev };

        Object.keys(updated).forEach(pair => {
          const data = updated[pair];
          // Small realistic price movements
          const movement = (Math.random() - 0.5) * 0.0002; // Very small movements
          const newPrice = data.price + movement;
          const newChange = newPrice - data.price;
          const newChangePercent = (newChange / data.price) * 100;

          updated[pair] = {
            price: parseFloat(newPrice.toFixed(pair.includes('JPY') ? 2 : 4)),
            change: parseFloat(newChange.toFixed(pair.includes('JPY') ? 2 : 4)),
            changePercent: parseFloat(newChangePercent.toFixed(2))
          };

          // Update current price if this is the selected pair
          if (pair === selectedPair) {
            setCurrentPrice(updated[pair].price);
          }
        });

        return updated;
      });
    };

    const priceMonitor = setInterval(() => {
      checkStopLossAndTakeProfit();
      updateMarketData();
    }, 3000); // Update every 3 seconds

    return () => {
      clearInterval(priceMonitor);
    };
  }, [router, currentPrice, selectedPair]);

  const checkIfTradeShoulClose = (trade: Trade, price: number) => {
    if (!trade.stopLoss && !trade.takeProfit) return null;

    if (trade.type === "BUY") {
      if (trade.stopLoss && price <= trade.stopLoss) {
        return { reason: "STOP_LOSS" as const };
      }
      if (trade.takeProfit && price >= trade.takeProfit) {
        return { reason: "TAKE_PROFIT" as const };
      }
    } else { // SELL
      if (trade.stopLoss && price >= trade.stopLoss) {
        return { reason: "STOP_LOSS" as const };
      }
      if (trade.takeProfit && price <= trade.takeProfit) {
        return { reason: "TAKE_PROFIT" as const };
      }
    }

    return null;
  };

  const calculatePnL = (trade: Trade, price: number) => {
    const pips = trade.type === "BUY"
      ? (price - trade.entryPrice) * 10000
      : (trade.entryPrice - price) * 10000;

    // Simplified P&L calculation: $10 per pip for standard lot
    return pips * trade.lotSize * 10;
  };

  const executeTrade = (type: "BUY" | "SELL") => {
    setTradeError("");

    // Check if user can make trade
    const tradeCheck = authService.canMakeTrade();
    if (!tradeCheck.allowed) {
      setTradeError(tradeCheck.message || "Cannot execute trade");
      return;
    }

    // Check margin requirements
    const marginRequired = lotSize * 1000;
    if (marginRequired > tradingData.freeMargin) {
      setTradeError(`Insufficient margin. Required: $${marginRequired.toLocaleString()}, Available: $${tradingData.freeMargin.toLocaleString()}`);
      return;
    }

    // Validate stop loss and take profit
    if (useRiskManagement) {
      const validation = validateRiskManagement(type, currentPrice, stopLoss, takeProfit);
      if (!validation.valid) {
        setTradeError(validation.message || "Invalid risk management parameters");
        return;
      }
    }

    const newTrade: Trade = {
      id: Date.now().toString(),
      pair: selectedPair,
      type,
      lotSize,
      entryPrice: currentPrice,
      currentPrice,
      pnl: 0,
      timestamp: new Date(),
      status: "OPEN",
      stopLoss: useRiskManagement ? stopLoss : undefined,
      takeProfit: useRiskManagement ? takeProfit : undefined
    };

    setTrades(prev => [newTrade, ...prev]);

    // Update trading data
    const newTradingData = {
      ...tradingData,
      margin: tradingData.margin + marginRequired,
      freeMargin: tradingData.freeMargin - marginRequired,
      tradesCount: (tradingData.tradesCount || 0) + 1,
      dailyTradesUsed: (tradingData.dailyTradesUsed || 0) + 1,
      lastTradeReset: tradingData.lastTradeReset || new Date(),
      marginLevel: tradingData.margin + marginRequired > 0 ?
        (tradingData.equity / (tradingData.margin + marginRequired)) * 100 : 0
    };

    setTradingData(newTradingData);

    // Record trade in auth service
    authService.recordTrade();
    authService.saveTradingAccount(newTradingData);

    // Reset risk management fields
    if (useRiskManagement) {
      setStopLoss(undefined);
      setTakeProfit(undefined);
    }
  };

  const validateRiskManagement = (type: "BUY" | "SELL", price: number, sl?: number, tp?: number) => {
    if (type === "BUY") {
      if (sl && sl >= price) {
        return { valid: false, message: "Stop Loss must be below current price for BUY orders" };
      }
      if (tp && tp <= price) {
        return { valid: false, message: "Take Profit must be above current price for BUY orders" };
      }
    } else {
      if (sl && sl <= price) {
        return { valid: false, message: "Stop Loss must be above current price for SELL orders" };
      }
      if (tp && tp >= price) {
        return { valid: false, message: "Take Profit must be below current price for SELL orders" };
      }
    }
    return { valid: true, message: "" };
  };

  const closeTrade = (tradeId: string) => {
    const trade = trades.find(t => t.id === tradeId);
    if (!trade) return;

    // Close the trade and update balance
    setTrades(prev => prev.map(t =>
      t.id === tradeId
        ? { ...t, status: "CLOSED" as const, closeReason: "MANUAL" as const }
        : t
    ));

    // Update trading data - add P&L to balance and free up margin
    setTradingData(prev => ({
      ...prev,
      balance: prev.balance + trade.pnl,
      margin: prev.margin - (trade.lotSize * 1000),
      freeMargin: prev.freeMargin + (trade.lotSize * 1000),
      floatingPnL: prev.floatingPnL - trade.pnl,
      equity: prev.balance + trade.pnl + (prev.floatingPnL - trade.pnl)
    }));
  };

  const modifyTrade = (tradeId: string, newStopLoss?: number, newTakeProfit?: number) => {
    setTrades(prev => prev.map(trade =>
      trade.id === tradeId
        ? { ...trade, stopLoss: newStopLoss, takeProfit: newTakeProfit }
        : trade
    ));
  };

  const openTrades = trades.filter(trade => trade.status === "OPEN");
  const closedTrades = trades.filter(trade => trade.status === "CLOSED");

  const getCloseReasonBadge = (reason?: string) => {
    switch (reason) {
      case "STOP_LOSS":
        return <Badge className="bg-red-500/20 text-red-400 text-xs">SL Hit</Badge>;
      case "TAKE_PROFIT":
        return <Badge className="bg-green-500/20 text-green-400 text-xs">TP Hit</Badge>;
      case "MANUAL":
        return <Badge className="bg-blue-500/20 text-blue-400 text-xs">Manual</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800/50 bg-zinc-900/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NRM On Paper</span>
              </Link>

              <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                <Activity className="w-4 h-4 mr-1" />
                Live Trading
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-zinc-400">
                  {user?.firstName} {user?.lastName} ({user?.plan === 'elite' ? 'Elite' : 'Free'})
                </div>
                <div className="text-lg font-bold text-white">${tradingData.balance.toLocaleString()}</div>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => authService.logout()}
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Account Summary Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Equity</p>
                    <p className="text-2xl font-bold text-white">${tradingData.equity.toLocaleString()}</p>
                  </div>
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Floating P&L</p>
                    <p className={`text-2xl font-bold ${tradingData.floatingPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {tradingData.floatingPnL >= 0 ? '+' : ''}${tradingData.floatingPnL.toLocaleString()}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    tradingData.floatingPnL >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {tradingData.floatingPnL >= 0 ? (
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Margin Level</p>
                    <p className="text-2xl font-bold text-white">{tradingData.marginLevel.toFixed(2)}%</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Open Positions</p>
                    <p className="text-2xl font-bold text-white">{openTrades.length}</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Chart */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>{selectedPair} Chart</span>
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                    Live Data
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-[500px]">
                <div className="w-full h-full bg-zinc-900/50 rounded-lg overflow-hidden">
                  <TradingViewWidget
                    symbol={`FX:${selectedPair.replace('/', '')}`}
                    height="500"
                    theme="dark"
                    onPriceUpdate={setCurrentPrice}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Trading Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Trade */}
            <Card>
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Advanced Trading
                </CardTitle>
                <CardDescription>Execute trades with risk management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-zinc-300">Currency Pair</Label>
                  <select
                    value={selectedPair}
                    onChange={(e) => {
                      const newPair = e.target.value;
                      setSelectedPair(newPair);
                      // Update current price to match the selected pair's market data
                      const pairData = marketData[newPair];
                      if (pairData) {
                        setCurrentPrice(pairData.price);
                      }
                    }}
                    className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
                  >
                    {currencyPairs.map(pair => (
                      <option key={pair} value={pair}>{pair}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-zinc-300">Lot Size</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={lotSize}
                    onChange={(e) => setLotSize(parseFloat(e.target.value))}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-400">Current Price</span>
                    <span className="text-white font-mono">
                      {currentPrice.toFixed(selectedPair.includes('JPY') ? 2 : 4)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Spread</span>
                    <span className="text-zinc-400">
                      {selectedPair.includes('JPY') ? '0.8' : '0.0008'} pips
                    </span>
                  </div>
                </div>

                {/* Risk Management Section */}
                <div className="border-t border-zinc-700 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-zinc-300 flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Risk Management
                    </Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setUseRiskManagement(!useRiskManagement)}
                      className={useRiskManagement ? "text-green-400" : "text-zinc-400"}
                    >
                      {useRiskManagement ? "ON" : "OFF"}
                    </Button>
                  </div>

                  {useRiskManagement && (
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-zinc-300 text-sm">Stop Loss</Label>
                        <Input
                          type="number"
                          step="0.0001"
                          placeholder="Optional"
                          value={stopLoss || ""}
                          onChange={(e) => setStopLoss(e.target.value ? parseFloat(e.target.value) : undefined)}
                          className="bg-zinc-800 border-zinc-700 text-white text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-zinc-300 text-sm">Take Profit</Label>
                        <Input
                          type="number"
                          step="0.0001"
                          placeholder="Optional"
                          value={takeProfit || ""}
                          onChange={(e) => setTakeProfit(e.target.value ? parseFloat(e.target.value) : undefined)}
                          className="bg-zinc-800 border-zinc-700 text-white text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {tradeError && (
                  <Alert className="border-red-500/50 bg-red-500/10">
                    <AlertCircle className="h-4 w-4 text-red-400" />
                    <AlertDescription className="text-red-300 text-sm">
                      {tradeError}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="trading"
                    onClick={() => executeTrade("BUY")}
                    className="w-full"
                  >
                    <PlusCircle className="w-4 h-4 mr-1" />
                    BUY
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => executeTrade("SELL")}
                    className="w-full"
                  >
                    <MinusCircle className="w-4 h-4 mr-1" />
                    SELL
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Market Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-white">Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currencyPairs.slice(0, 4).map((pair) => {
                    const data = marketData[pair];
                    if (!data) return null;

                    return (
                      <div key={pair} className="flex items-center justify-between">
                        <span className="text-zinc-300 text-sm">{pair}</span>
                        <div className="text-right">
                          <div className="text-white text-sm font-mono">
                            {data.price.toFixed(pair.includes('JPY') ? 2 : 4)}
                          </div>
                          <div className={`text-xs ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {data.change >= 0 ? '+' : ''}{data.change.toFixed(pair.includes('JPY') ? 2 : 4)} ({data.changePercent >= 0 ? '+' : ''}{data.changePercent.toFixed(2)}%)
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Positions and History */}
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-white">Trading Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="positions" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                    <TabsTrigger value="positions" className="data-[state=active]:bg-blue-600">
                      Open Positions ({openTrades.length})
                    </TabsTrigger>
                    <TabsTrigger value="history" className="data-[state=active]:bg-blue-600">
                      Trade History
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="positions" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-zinc-800">
                          <TableHead className="text-zinc-400">Pair</TableHead>
                          <TableHead className="text-zinc-400">Type</TableHead>
                          <TableHead className="text-zinc-400">Size</TableHead>
                          <TableHead className="text-zinc-400">Entry</TableHead>
                          <TableHead className="text-zinc-400">Current</TableHead>
                          <TableHead className="text-zinc-400">SL</TableHead>
                          <TableHead className="text-zinc-400">TP</TableHead>
                          <TableHead className="text-zinc-400">P&L</TableHead>
                          <TableHead className="text-zinc-400">Time</TableHead>
                          <TableHead className="text-zinc-400">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {openTrades.map((trade) => (
                          <TableRow key={trade.id} className="border-zinc-800">
                            <TableCell className="text-white">{trade.pair}</TableCell>
                            <TableCell>
                              <Badge className={trade.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
                                {trade.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-white">{trade.lotSize}</TableCell>
                            <TableCell className="text-white font-mono">{trade.entryPrice}</TableCell>
                            <TableCell className="text-white font-mono">{currentPrice}</TableCell>
                            <TableCell className="text-zinc-400 font-mono text-sm">
                              {trade.stopLoss ? trade.stopLoss.toFixed(4) : "-"}
                            </TableCell>
                            <TableCell className="text-zinc-400 font-mono text-sm">
                              {trade.takeProfit ? trade.takeProfit.toFixed(4) : "-"}
                            </TableCell>
                            <TableCell className={`font-bold ${trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-zinc-400">
                              {trade.timestamp.toLocaleTimeString()}
                            </TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => closeTrade(trade.id)}
                              >
                                Close
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {openTrades.length === 0 && (
                      <div className="text-center py-8 text-zinc-400">
                        No open positions. Start trading to see your positions here.
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="history" className="mt-4">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-zinc-800">
                          <TableHead className="text-zinc-400">Pair</TableHead>
                          <TableHead className="text-zinc-400">Type</TableHead>
                          <TableHead className="text-zinc-400">Size</TableHead>
                          <TableHead className="text-zinc-400">Entry</TableHead>
                          <TableHead className="text-zinc-400">Exit</TableHead>
                          <TableHead className="text-zinc-400">P&L</TableHead>
                          <TableHead className="text-zinc-400">Close Reason</TableHead>
                          <TableHead className="text-zinc-400">Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {closedTrades.map((trade) => (
                          <TableRow key={trade.id} className="border-zinc-800">
                            <TableCell className="text-white">{trade.pair}</TableCell>
                            <TableCell>
                              <Badge className={trade.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
                                {trade.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-white">{trade.lotSize}</TableCell>
                            <TableCell className="text-white font-mono">{trade.entryPrice}</TableCell>
                            <TableCell className="text-white font-mono">{trade.currentPrice}</TableCell>
                            <TableCell className={`font-bold ${trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                            </TableCell>
                            <TableCell>{getCloseReasonBadge(trade.closeReason)}</TableCell>
                            <TableCell className="text-zinc-400">
                              {trade.timestamp.toLocaleTimeString()}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {closedTrades.length === 0 && (
                      <div className="text-center py-8 text-zinc-400">
                        No trade history yet. Your closed trades will appear here.
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
