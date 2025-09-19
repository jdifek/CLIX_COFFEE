import { Metadata } from 'next';
import { Phone, CheckCircle, MapPin, Users, TrendingUp, Wrench, Shield, Clock, ArrowRight, Star, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/contact-form';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'CoffeeHub Pro - Smart Coffee Station Business Opportunity | Start Earning 1200€/Month',
  description: 'Launch your automated coffee business with CoffeeHub Pro stations. Low investment, high returns. Premium Italian coffee, cashless payments, full support. Start from €12,900.',
  keywords: 'coffee business, franchise opportunity, automated coffee machine, coffee station, passive income, Italian coffee, business investment',
  openGraph: {
    title: 'CoffeeHub Pro - Smart Coffee Station Business',
    description: 'Start earning with automated premium coffee stations. Full business package from €12,900.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            LAUNCH YOUR PREMIUM<br />
            <span className="text-orange-400">COFFEE STATION BUSINESS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Generate consistent income with automated coffee stations. Earn up to 1,200€ monthly with just 4 hours of management per week
          </p>
          <div className="mb-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Business Plan & ROI Calculator
            </Button>
          </div>
          <p className="text-lg">
            <span className="font-bold text-orange-400">Starting from €12,900</span> <span className="text-sm opacity-80">*VAT excluded</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Premium Coffee Technology</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: CheckCircle, title: "Loyalty System", desc: "Built-in rewards" },
              { icon: Star, title: "Italian Machines", desc: "Professional quality" },
              { icon: Shield, title: "Premium Beans", desc: "Specialty grade only" },
              { icon: TrendingUp, title: "30+ Beverages", desc: "Diverse menu options" },
              { icon: Clock, title: "Fresh Milk", desc: "Oat & dairy options" },
              { icon: Wrench, title: "Sugar-Free", desc: "Health-conscious choices" }
            ].map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                <span className="text-blue-600">FROM 10 MONTHS</span><br />
                Return on investment
              </h2>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5"></div>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Break Even on every 2nd cup per day</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">16% - food cost</span>
                  <div className="w-16 h-2 bg-orange-200 rounded-full">
                    <div className="w-3 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">4% - cashless payment solution</span>
                  <div className="w-16 h-2 bg-blue-200 rounded-full">
                    <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700">2% - vandalism</span>
                  <div className="w-16 h-2 bg-red-200 rounded-full">
                    <div className="w-0.5 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-300">
                  <span className="text-gray-700 font-bold">53.3% - operating profit margin before tax</span>
                  <div className="w-16 h-2 bg-green-200 rounded-full">
                    <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">1500 € operating profit per month</div>
                <p className="text-gray-600">(before tax. Excl. vat)</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((cup) => (
                      <div key={cup} className="w-8 h-10 bg-orange-500 rounded-b-full"></div>
                    ))}
                  </div>
                  <span className="ml-4 text-2xl font-bold text-gray-800">30</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">cups per day average</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Person using coffee station"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg transform rotate-12">
                <div className="text-2xl font-bold">DREAMERS</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Proven Profitable Business Model</h2>
            <p className="text-xl text-gray-600">Transparent returns and clear investment metrics</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">ROI Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-800 mb-2">8-12</div>
                <p className="text-gray-600">months to break even</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Monthly Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-800 mb-2">€1,200</div>
                <p className="text-gray-600">average per station</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Break Even</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-800 mb-2">3-4</div>
                <p className="text-gray-600">cups sold per day</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Complete Business Package</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-700">CoffeeHub Pro Station Includes:</h3>
              <ul className="space-y-4">
                {[
                  "Professional Italian espresso machine",
                  "Contactless payment system (NAYAX)",
                  "Automated cup dispenser & storage",
                  "Commercial-grade refrigeration unit",
                  "Digital display screen & menu system",
                  "Supply management table & accessories",
                  "Waste management solution",
                  "Professional installation & setup"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="p-8 bg-white border-2 border-orange-200">
              <div className="text-center">
                <Badge className="mb-4 bg-orange-500 text-white">Limited Launch Offer</Badge>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">€12,900</span>
                  <span className="text-2xl text-gray-400 line-through ml-3">€14,500</span>
                </div>
                <p className="text-green-600 font-semibold mb-6">+ Free starter pack worth €750</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  Reserve Your Station
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Your Journey to Success</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "Personal consultation to understand your goals and location preferences" },
              { step: "02", title: "Business Setup", desc: "Company registration support and contract finalization with payment" },
              { step: "03", title: "Team Onboarding", desc: "Meet your support team and receive comprehensive training materials" },
              { step: "04", title: "Launch & Earn", desc: "Professional installation, location guarantee, and ongoing profit support" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Smart Investment Choice</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="p-4 text-left">Investment Factor</th>
                  <th className="p-4 text-center">CoffeeHub Pro Station</th>
                  <th className="p-4 text-center">Traditional Coffee Shop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: "Initial Investment", station: "€12,900 - €15,400", shop: "€180,000+" },
                  { factor: "Monthly Rent", station: "€75", shop: "€3,200" },
                  { factor: "Staff Required", station: "0", shop: "2-3 employees" },
                  { factor: "Monthly Salary Costs", station: "€0", shop: "€4,500+" },
                  { factor: "Time to Launch", station: "2-3 weeks", shop: "3-4 months" },
                  { factor: "ROI Period", station: "10 months", shop: "36 months" },
                  { factor: "Location Flexibility", station: "Yes", shop: "No" },
                  { factor: "Weekly Management", station: "4 hours", shop: "50+ hours" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium text-gray-800">{row.factor}</td>
                    <td className="p-4 text-center text-green-600 font-semibold">{row.station}</td>
                    <td className="p-4 text-center text-red-600">{row.shop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Partner Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Marcus Weber", 
                city: "Vienna", 
                cups: "45", 
                stations: "3", 
                income: "€3,200",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              { 
                name: "Elena Rossi", 
                city: "Milan", 
                cups: "38", 
                stations: "2", 
                income: "€2,400",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              { 
                name: "Jan Novák", 
                city: "Prague", 
                cups: "52", 
                stations: "4", 
                income: "€4,100",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((partner, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 group">
                <div className="relative">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                    <p className="text-gray-600">{partner.city}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Sales:</span>
                      <span className="font-semibold">{partner.cups} cups</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stations:</span>
                      <span className="font-semibold">{partner.stations} locations</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-gray-600">Monthly Income:</span>
                      <span className="font-bold text-green-600 text-lg">{partner.income}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    <span className="flex items-center justify-center">
                      Watch Success Story
                      <div className="ml-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                      </div>
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Take the First Step to Financial Freedom</h2>
            <p className="text-xl opacity-90">Complete the form below to receive your personalized business plan and financial projections</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-400">What You'll Receive:</h3>
              <ul className="space-y-4">
                {[
                  "Detailed ROI calculations for your market",
                  "Step-by-step launch timeline",
                  "Complete cost breakdown & financing options",
                  "Professional business presentation",
                  "Location analysis and recommendations"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}