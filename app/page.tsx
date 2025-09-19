/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  CheckCircle,
  MapPin,
  Users,
  TrendingUp,
  Wrench,
  Shield,
  Clock,
  ArrowRight,
  Star,
  Euro,
  Menu,
  X,
  Play,
  Coffee,
  Zap,
  Target,
  Award,
} from "lucide-react";

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-30";

  const variants = {
    default:
      "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl focus:ring-orange-300",
    outline:
      "border-2 border-current bg-transparent hover:bg-current hover:text-white",
    ghost: "hover:bg-gray-100",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`px-6 pt-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-bold ${className}`} {...props}>
    {children}
  </h3>
);

const Badge = ({ children, className = "", ...props }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${className}`}
    {...props}
  >
    {children}
  </span>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Clix Coffee <span className="text-orange-500">Pro</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#features"
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Features
            </a>
            <a
              href="#financial"
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Financial
            </a>
            <a
              href="#process"
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Process
            </a>
            <a
              href="#contact"
              className={`hover:text-orange-500 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Contact
            </a>
            <Button size="sm">Get Started</Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-gray-600 hover:text-orange-500"
              >
                Features
              </a>
              <a
                href="#financial"
                className="block text-gray-600 hover:text-orange-500"
              >
                Financial
              </a>
              <a
                href="#process"
                className="block text-gray-600 hover:text-orange-500"
              >
                Process
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-orange-500"
              >
                Contact
              </a>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          City
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Investment Budget
        </label>
        <select
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
          value={formData.investment}
          onChange={(e) =>
            setFormData({ ...formData, investment: e.target.value })
          }
        >
          <option value="">Select budget range</option>
          <option value="12-15k">€12,000 - €15,000</option>
          <option value="15-25k">€15,000 - €25,000</option>
          <option value="25k+">€25,000+</option>
        </select>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Get My Business Plan
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </form>
  );
};

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  </div>
);

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marcus Weber",
      city: "Vienna",
      cups: "45",
      stations: "3",
      income: "€3,200",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Clix Coffee Pro transformed my investment portfolio. The passive income is incredible!",
    },
    {
      name: "Elena Rossi",
      city: "Milan",
      cups: "38",
      stations: "2",
      income: "€2,400",
      image:
        "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "Best business decision I've made. The support team is amazing and the returns are consistent.",
    },
    {
      name: "Jan Novák",
      city: "Prague",
      cups: "52",
      stations: "4",
      income: "€4,100",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote:
        "From zero experience to profitable business owner in just 3 months. Highly recommended!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-20"></div>
        <FloatingElements />

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <div className="animate-in slide-in-from-bottom duration-1000">
            <Badge className="bg-orange-500/20 text-orange-300 border border-orange-400/30 mb-8 text-sm sm:text-base">
              🚀 Limited Time Launch Offer
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              LAUNCH YOUR PREMIUM
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                COFFEE EMPIRE
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Generate{" "}
              <span className="font-bold text-orange-400">€1,200+ monthly</span>{" "}
              with automated premium coffee stations. Just{" "}
              <span className="font-bold text-blue-400">4 hours/week</span>{" "}
              management required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="xl" className="min-w-fit">
                <Zap className="mr-2 w-6 h-6" />
                Get ROI Calculator
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>
                  Starting from{" "}
                  <span className="font-bold text-orange-400">€12,900</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>
                  ROI in{" "}
                  <span className="font-bold text-blue-400">8-12 months</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>
                  <span className="font-bold text-green-400">100+</span>{" "}
                  successful partners
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Premium Technology
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Next-Generation Coffee
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {" "}
                Stations
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge Italian technology meets smart business automation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-16">
            {[
              {
                icon: Star,
                title: "Italian Machines",
                desc: "Professional espresso quality",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Shield,
                title: "Premium Beans",
                desc: "Specialty grade only",
                color: "from-green-400 to-emerald-600",
              },
              {
                icon: CheckCircle,
                title: "Loyalty System",
                desc: "Built-in rewards program",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: TrendingUp,
                title: "30+ Beverages",
                desc: "Diverse menu options",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Clock,
                title: "Fresh Ingredients",
                desc: "Oat & dairy options",
                color: "from-teal-400 to-cyan-600",
              },
              {
                icon: Wrench,
                title: "Smart Analytics",
                desc: "Real-time monitoring",
                color: "from-red-500 to-pink-600",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="group hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="text-center p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Your Journey to
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From first contact to profitable business in just 4 simple steps
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "Personal consultation to understand your goals and location preferences",
                icon: Phone,
                color: "from-blue-500 to-indigo-600",
              },
              {
                step: "02",
                title: "Business Setup",
                desc: "Company registration support and contract finalization with payment",
                icon: Users,
                color: "from-green-500 to-emerald-600",
              },
              {
                step: "03",
                title: "Team Onboarding",
                desc: "Meet your support team and receive comprehensive training materials",
                icon: Award,
                color: "from-orange-500 to-red-600",
              },
              {
                step: "04",
                title: "Launch & Earn",
                desc: "Professional installation, location guarantee, and ongoing profit support",
                icon: TrendingUp,
                color: "from-purple-500 to-pink-600",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="text-center group hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                ></div>
                <CardContent className="pt-8 pb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.step}
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section
        id="financial"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Badge className="bg-green-100 text-green-800 mb-4">
                Proven ROI
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-blue-600">8-12 MONTHS</span>
                <br />
                Return on Investment
              </h2>

              <div className="mb-8">
                <div className="flex items-center mb-6 p-4 bg-orange-50 rounded-2xl border border-orange-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">
                    Break even with just 3-4 cups per day
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Food cost", percentage: 16, color: "orange" },
                  { label: "Payment processing", percentage: 4, color: "blue" },
                  {
                    label: "Insurance & maintenance",
                    percentage: 2,
                    color: "red",
                  },
                  {
                    label: "Operating profit margin",
                    percentage: 53.3,
                    color: "green",
                    highlighted: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      item.highlighted
                        ? "bg-green-50 border-2 border-green-300"
                        : `bg-${item.color}-50`
                    }`}
                  >
                    <span
                      className={`font-${
                        item.highlighted ? "bold" : "medium"
                      } text-gray-700`}
                    >
                      {item.percentage}% - {item.label}
                    </span>
                    <div className="w-20 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${item.color}-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  €1,200+
                </div>
                <p className="text-gray-600 mb-4">Monthly operating profit</p>
                <div className="flex justify-center items-center space-x-2">
                  {[1, 2, 3].map((cup) => (
                    <div
                      key={cup}
                      className="w-6 h-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-b-full"
                    ></div>
                  ))}
                  <span className="ml-4 text-2xl font-bold text-gray-800">
                    30
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  average cups per day
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Modern coffee station in use"
                  className="rounded-3xl shadow-2xl w-full h-96 sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <div className="text-xl font-bold">PREMIUM</div>
                  <div className="text-sm opacity-90">QUALITY</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
              Investment Comparison
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              See why smart investors choose Clix Coffee Pro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ROI Timeline",
                value: "8-12",
                unit: "months",
                color: "from-blue-500 to-indigo-600",
                icon: TrendingUp,
              },
              {
                title: "Monthly Profit",
                value: "€1,200+",
                unit: "per station",
                color: "from-green-500 to-emerald-600",
                icon: Euro,
              },
              {
                title: "Break Even Point",
                value: "30",
                unit: "cups/day",
                color: "from-orange-500 to-red-600",
                icon: Coffee,
              },
            ].map((metric, idx) => (
              <Card
                key={idx}
                className="text-center group hover:scale-105 transition-all duration-300 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${metric.color}`}></div>
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-gray-600">{metric.unit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              Complete Solution
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                {" "}
                Succeed
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-700">
                Clix Coffee Pro Station Package:
              </h3>
              <div className="space-y-4">
                {[
                  "Professional Italian espresso machine",
                  "Contactless payment system (NAYAX)",
                  "Automated cup dispenser & storage",
                  "Commercial-grade refrigeration unit",
                  "Digital display screen & menu system",
                  "Supply management table & accessories",
                  "Waste management solution",
                  "Professional installation & setup",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 sm:p-10 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 text-base py-2 px-4">
                  🔥 Limited Launch Offer
                </Badge>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">
                    €12,900
                  </span>
                  <span className="text-2xl text-gray-400 line-through ml-4">
                    €14,500
                  </span>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <Award className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-600 font-semibold">
                    + Free starter pack worth €750
                  </span>
                </div>
                <Button className="w-full mb-4" size="lg">
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Reserve Your Station Now
                </Button>
                <p className="text-sm text-gray-500">
                  🔒 Secure payment • 30-day money-back guarantee
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section
        id="process"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              From Application to
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Profit
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your complete journey to passive income in 4 streamlined steps
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "Week 1",
                  title: "Application & Planning",
                  desc: "Complete application, consultation call, and receive your personalized business plan with location analysis.",
                  icon: Target,
                  color: "from-blue-500 to-indigo-600",
                  details: [
                    "Free consultation call",
                    "Business plan creation",
                    "Location analysis",
                    "Contract signing",
                  ],
                },
                {
                  step: "Week 2-3",
                  title: "Setup & Installation",
                  desc: "Professional station installation, payment system setup, and comprehensive training on operations.",
                  icon: Wrench,
                  color: "from-orange-500 to-red-600",
                  details: [
                    "Equipment delivery",
                    "Professional installation",
                    "Payment system setup",
                    "Training session",
                  ],
                },
                {
                  step: "Week 4",
                  title: "Launch & Support",
                  desc: "Grand opening launch, marketing support, and 24/7 technical assistance to ensure smooth operations.",
                  icon: Award,
                  color: "from-purple-500 to-pink-600",
                  details: [
                    "Grand opening event",
                    "Marketing materials",
                    "Staff training",
                    "24/7 support activation",
                  ],
                },
                {
                  step: "Ongoing",
                  title: "Profit & Growth",
                  desc: "Monitor performance, collect profits, and expand with additional stations as your business grows.",
                  icon: TrendingUp,
                  color: "from-green-500 to-emerald-600",
                  details: [
                    "Monthly profit collection",
                    "Performance analytics",
                    "Expansion opportunities",
                    "Ongoing support",
                  ],
                },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="lg:hidden w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 mb-6"></div>

                  <Card className="text-center group-hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`}
                    ></div>
                    <CardContent className="p-8">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </div>

                      <Badge
                        className={`mb-4 bg-gradient-to-r ${step.color} text-white border-0`}
                      >
                        {step.step}
                      </Badge>

                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="space-y-2 text-left">
                        {step.details.map((detail, detailIdx) => (
                          <div
                            key={detailIdx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
              <Clock className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-green-800 font-semibold">
                Average time to profitability: 30-45 days
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              Smart Investment
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Clix Coffee Pro?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the clear advantages of our automated coffee stations
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                  <div className="font-bold text-lg">Investment Factor</div>
                  <div className="font-bold text-lg flex items-center justify-center space-x-2">
                    <Coffee className="w-6 h-6" />
                    <span>Clix Coffee Pro</span>
                  </div>
                  <div className="font-bold text-lg">
                    Traditional Coffee Shop
                  </div>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200">
                {[
                  {
                    factor: "Initial Investment",
                    station: "€12,900 - €15,400",
                    shop: "€180,000+",
                    advantage: "station",
                  },
                  {
                    factor: "Monthly Rent",
                    station: "€75",
                    shop: "€3,200",
                    advantage: "station",
                  },
                  {
                    factor: "Staff Required",
                    station: "0",
                    shop: "2-3 employees",
                    advantage: "station",
                  },
                  {
                    factor: "Monthly Salary Costs",
                    station: "€0",
                    shop: "€4,500+",
                    advantage: "station",
                  },
                  {
                    factor: "Time to Launch",
                    station: "2-3 weeks",
                    shop: "3-4 months",
                    advantage: "station",
                  },
                  {
                    factor: "ROI Period",
                    station: "8-12 months",
                    shop: "36+ months",
                    advantage: "station",
                  },
                  {
                    factor: "Location Flexibility",
                    station: "High",
                    shop: "Limited",
                    advantage: "station",
                  },
                  {
                    factor: "Weekly Management",
                    station: "4 hours",
                    shop: "50+ hours",
                    advantage: "station",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 transition-colors 
          ${idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"} 
          hover:bg-gray-50`}
                  >
                    {/* Factor */}
                    <div className="font-semibold text-gray-800 flex items-center justify-between sm:justify-start">
                      {row.factor}
                    </div>

                    {/* Clix Coffee Pro */}
                    <div className="text-center sm:text-left">
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-xl font-semibold ${
                          row.advantage === "station"
                            ? "bg-green-100 text-green-700 border-2 border-green-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {row.advantage === "station" && (
                          <CheckCircle className="w-4 h-4 mr-2" />
                        )}
                        {row.station}
                      </div>
                    </div>

                    {/* Traditional Coffee Shop */}
                    <div className="text-center sm:text-left">
                      <div className="inline-flex items-center px-4 py-2 rounded-xl font-semibold bg-red-100 text-red-700">
                        {row.shop}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Partners,
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Real Results
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful Clix Coffee Pro partners across Europe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((partner, idx) => (
              <Card
                key={idx}
                className={`overflow-hidden group hover:scale-105 transition-all duration-500 border-0 ${
                  currentTestimonial === idx
                    ? "ring-4 ring-orange-300 shadow-2xl"
                    : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white border-0">
                      Active Partner
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {partner.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{partner.city}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                      <span className="text-gray-600 font-medium">
                        Daily Sales:
                      </span>
                      <span className="font-bold text-blue-600">
                        {partner.cups} cups
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
                      <span className="text-gray-600 font-medium">
                        Stations:
                      </span>
                      <span className="font-bold text-orange-600">
                        {partner.stations} locations
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                      <span className="text-gray-700 font-medium">
                        Monthly Income:
                      </span>
                      <span className="font-bold text-green-600 text-xl">
                        {partner.income}
                      </span>
                    </div>
                  </div>

                  <blockquote className="italic text-gray-600 mb-6 text-center border-l-4 border-orange-300 pl-4">
                    "{partner.quote}"
                  </blockquote>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Watch Success Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === idx
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 mb-4">
              Common Questions
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Get answers to the most common questions about Clix Coffee Pro
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much can I realistically earn per month?",
                answer:
                  "Based on our partner data, stations typically generate €1,200-€3,500 monthly profit after all expenses. This depends on location foot traffic, with busy office buildings and transit areas performing best. Most partners break even within 8-12 months.",
              },
              {
                question: "What ongoing responsibilities do I have?",
                answer:
                  "Your main tasks include weekly restocking (2-3 hours), monthly cleaning (1 hour), and monitoring sales data. We provide detailed training and ongoing support. Many partners manage multiple stations with just 4-6 hours weekly commitment.",
              },
              {
                question: "How do you guarantee profitable locations?",
                answer:
                  "We conduct thorough foot traffic analysis, demographic studies, and competitor research before approving locations. We have partnerships with office buildings, universities, and transit authorities. If a location underperforms in the first 6 months, we help relocate at no cost.",
              },
              {
                question: "What happens if the machine breaks down?",
                answer:
                  "All stations include comprehensive warranty and 24/7 technical support. We maintain local technician networks for rapid response. Most issues are resolved within 4-6 hours. Lost revenue during warranty repairs is covered by our business protection plan.",
              },
              {
                question: "Can I start with one station and expand?",
                answer:
                  "Absolutely! Most successful partners start with 1-2 stations and expand based on performance. We offer priority access to new premium locations for existing partners. Our financing options make scaling easier as your business grows.",
              },
              {
                question:
                  "What makes Clix Coffee Pro different from competitors?",
                answer:
                  "We use premium Italian espresso machines, not instant coffee. Our comprehensive support includes location sourcing, installation, training, and ongoing business coaching. Plus, we offer genuine location guarantees and profit protection that others don't match.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button
              variant="outline"
              className="hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
            >
              <Phone className="mr-2 w-5 h-5" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="bg-orange-500/20 text-orange-300 border border-orange-400/30 mb-8 text-lg py-2 px-6">
            Limited Time Launch Offer
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Building Your
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Coffee Empire
            </span>
          </h2>

          <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed">
            Join 100+ successful partners generating passive income across
            Europe
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            {[
              {
                icon: Shield,
                label: "30-Day Guarantee",
                desc: "Risk-free investment",
              },
              { icon: Users, label: "Expert Support", desc: "24/7 assistance" },
              {
                icon: TrendingUp,
                label: "Proven ROI",
                desc: "8-12 month payback",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-orange-300" />
                </div>
                <div className="font-semibold text-sm">{benefit.label}</div>
                <div className="text-xs opacity-70">{benefit.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="xl"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transform hover:scale-105"
            >
              <Zap className="mr-2 w-6 h-6" />
              Claim Your Station Now
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="text-white border-white/50 hover:bg-white hover:text-gray-900"
            >
              <Phone className="mr-2 w-5 h-5" />
              Free Consultation Call
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Full training included</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Location guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      >
        <FloatingElements />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500/20 text-orange-300 border border-orange-400/30 mb-4">
              Ready to Start?
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Take the First Step to
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}
                Financial Freedom
              </span>
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
              Get your personalized business plan and start your journey to
              passive income today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-orange-400">
                What You'll Receive:
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: TrendingUp,
                    text: "Detailed ROI calculations for your market",
                  },
                  { icon: Clock, text: "Step-by-step launch timeline" },
                  {
                    icon: Euro,
                    text: "Complete cost breakdown & financing options",
                  },
                  { icon: Award, text: "Professional business presentation" },
                  {
                    icon: MapPin,
                    text: "Location analysis and recommendations",
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <span className="text-lg group-hover:text-orange-300 transition-colors">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl border border-blue-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="font-bold text-green-400">
                      30-Day Money-Back Guarantee
                    </div>
                    <div className="text-sm opacity-80">
                      Risk-free investment with full support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Get Started Today</h3>
                <p className="opacity-80">Free consultation & business plan</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Clix Coffee <span className="text-orange-500">Pro</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming the coffee industry with smart, automated solutions
                for passive income generation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Business</h4>
              <div className="space-y-2 text-gray-400">
                <div>Investment Plans</div>
                <div>Partner Program</div>
                <div>ROI Calculator</div>
                <div>Success Stories</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>Training Center</div>
                <div>24/7 Support</div>
                <div>Community Forum</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Tallinn, Estonia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Clix Coffee Pro. All rights reserved. | Privacy Policy
              | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
