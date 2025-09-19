import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  ArrowLeft,
  HelpCircle,
  Shield,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Zap
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Getting Started",
    icon: <Zap className="w-5 h-5" />,
    questions: [
      {
        q: "What is NRM On Paper?",
        a: "NRM On Paper is a forex paper trading platform that allows you to practice trading with virtual money using real market data. It's designed to help you learn forex trading without any financial risk."
      },
      {
        q: "How do I get started?",
        a: "Simply sign up for a free account and you'll instantly receive $100,000 in virtual trading balance. You can start practicing immediately with live market data and professional trading tools."
      },
      {
        q: "Do I need any prior trading experience?",
        a: "No prior experience is required! Our platform is designed for both beginners and experienced traders. We provide educational resources and a user-friendly interface to help you learn."
      },
      {
        q: "Is the platform really free?",
        a: "Yes! Our free plan includes up to 50 trades per day, access to major currency pairs, and full dashboard functionality. You can upgrade to our Elite plan for unlimited trading and additional features."
      }
    ]
  },
  {
    category: "Trading Features",
    icon: <BarChart3 className="w-5 h-5" />,
    questions: [
      {
        q: "Are the forex prices real?",
        a: "Yes! We use live market data from professional forex data providers. The prices you see are real-time and reflect actual market conditions, giving you authentic trading experience."
      },
      {
        q: "Which currency pairs can I trade?",
        a: "Free users have access to 3-5 major currency pairs including EUR/USD, GBP/USD, and USD/JPY. Elite users get access to all major, minor, and exotic currency pairs."
      },
      {
        q: "How does the trading execution work?",
        a: "Our platform simulates real trading conditions with realistic spreads and execution speeds. When you place a trade, it's executed at current market prices with typical forex market conditions."
      },
      {
        q: "Can I set stop losses and take profits?",
        a: "Yes! You can set stop losses, take profits, and other order types just like in real forex trading. This helps you practice proper risk management techniques."
      }
    ]
  },
  {
    category: "Account & Billing",
    icon: <DollarSign className="w-5 h-5" />,
    questions: [
      {
        q: "What's included in the Elite plan?",
        a: "The Elite plan ($29/month) includes unlimited trades, access to all currency pairs, advanced analytics, Discord community access, early feature access, and priority support."
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Yes, you can cancel your Elite subscription at any time. You'll continue to have access until the end of your billing period, then automatically revert to the free plan."
      },
      {
        q: "Do you offer refunds?",
        a: "We offer a 30-day money-back guarantee for new Elite subscribers. If you're not satisfied within the first 30 days, contact our support team for a full refund."
      },
      {
        q: "How do I upgrade to Elite?",
        a: "You can upgrade from your dashboard or the pricing page. Payment is processed securely, and your Elite features are activated immediately."
      }
    ]
  },
  {
    category: "Technical Support",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        q: "What if I encounter technical issues?",
        a: "Our support team is available to help! Elite users get priority support, while free users can reach out through our contact form. We typically respond within 24 hours."
      },
      {
        q: "Is my data secure?",
        a: "Absolutely! We use industry-standard encryption and security measures to protect your data. Since no real money is involved, your financial information is never at risk."
      },
      {
        q: "Can I access the platform on mobile?",
        a: "Yes! Our platform is fully responsive and works great on mobile devices. We're also developing dedicated mobile apps for an even better experience."
      },
      {
        q: "What browsers are supported?",
        a: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser."
      }
    ]
  },
  {
    category: "Learning & Community",
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        q: "Do you provide educational resources?",
        a: "Yes! We offer trading guides, tutorials, and best practices to help you improve your forex trading skills. Elite users get access to exclusive educational content."
      },
      {
        q: "What's the Discord Elite community?",
        a: "Our Discord community is exclusive to Elite subscribers. It's a place to discuss trading strategies, share insights, get tips from experienced traders, and connect with fellow learners."
      },
      {
        q: "Can I export my trading data?",
        a: "Yes! You can export your complete trading history, performance analytics, and reports. This is great for tracking your progress and analyzing your trading patterns."
      },
      {
        q: "How can I improve my trading skills?",
        a: "Start by practicing regularly, analyzing your trades, and learning from both wins and losses. Use our analytics tools to identify patterns and areas for improvement."
      }
    ]
  },
  {
    category: "Advanced Features",
    icon: <Clock className="w-5 h-5" />,
    questions: [
      {
        q: "Can I practice different trading strategies?",
        a: "Absolutely! Our platform supports various trading styles including scalping, day trading, swing trading, and position trading. You can test different strategies risk-free."
      },
      {
        q: "Do you have API access?",
        a: "We're currently developing API access for advanced users who want to automate their paper trading or integrate with other tools. This will be available to Elite subscribers first."
      },
      {
        q: "Can I compete with other traders?",
        a: "We're working on leaderboards and trading competitions where you can compete with other users. Elite members will get early access to these competitive features."
      },
      {
        q: "Will you add more features?",
        a: "Yes! We're constantly improving the platform based on user feedback. Elite subscribers get early access to new features and can influence our development roadmap."
      }
    ]
  }
];

export default function FAQ() {
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
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button size="sm">Start Trading</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Everything you need to know about NRM On Paper, forex paper trading, and our platform features.
          </p>
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
            <Shield className="w-4 h-4 mr-1" />
            100% Risk-Free Learning
          </Badge>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.questions.map((faq, index) => (
                    <Card key={index} className="group hover:scale-105 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{faq.q}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zinc-300 leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/5 to-purple-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Can't find the answer you're looking for? Our support team is here to help you get started with forex paper trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Join Discord Community
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Paper Trading?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Get started with $100,000 virtual balance and begin mastering forex trading today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl">
              Start Trading Free
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="xl">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NRM On Paper</span>
              </div>
              <p className="text-zinc-400 mb-4">
                The most advanced forex paper trading platform for serious traders.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Trading Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800/50 mt-12 pt-8 text-center text-zinc-400">
            <p>&copy; 2024 NRM On Paper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
