import { Metadata } from 'next';
import { Users, Target, Award, Globe, Coffee, Heart, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'About CoffeeHub Pro - Our Story & Mission | Premium Coffee Station Business',
  description: 'Learn about CoffeeHub Pro - the Austrian startup revolutionizing coffee business across Europe. Meet our team and discover our mission to make premium coffee accessible everywhere.',
  keywords: 'about coffeehub pro, coffee startup austria, coffee business story, european coffee expansion, automated coffee stations',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            OUR <span className="text-orange-400">STORY</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            CoffeeHub Pro - A startup from Austria revolutionizing the coffee business across Europe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Globe className="h-5 w-5" />
              <span>European Expansion</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Coffee className="h-5 w-5" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Heart className="h-5 w-5" />
              <span>Made with Passion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves access to premium coffee, regardless of location. 
                Our mission is to democratize the coffee business by making it accessible, profitable, 
                and sustainable for entrepreneurs across Europe.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through innovative technology and proven business models, we're creating opportunities 
                for people to build successful coffee businesses with minimal investment and maximum support.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Happy Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15</div>
                  <p className="text-gray-600">Countries</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coffee business meeting"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <Coffee className="h-8 w-8 mb-2" />
                <p className="font-bold">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: Target, 
                title: "Excellence", 
                desc: "We strive for perfection in every cup and every business partnership",
                color: "text-blue-600"
              },
              { 
                icon: Handshake, 
                title: "Partnership", 
                desc: "Your success is our success. We grow together as a community",
                color: "text-green-600"
              },
              { 
                icon: Lightbulb, 
                title: "Innovation", 
                desc: "Constantly improving our technology and business models",
                color: "text-orange-500"
              },
              { 
                icon: Heart, 
                title: "Passion", 
                desc: "Coffee is not just business for us - it's our passion and lifestyle",
                color: "text-red-500"
              }
            ].map((value, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300">
                <CardContent className="pt-8">
                  <value.icon className={`h-16 w-16 mx-auto mb-4 ${value.color}`} />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexander Schmidt",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Passionate entrepreneur with 15+ years in the coffee industry"
              },
              {
                name: "Maria Kowalski",
                role: "Head of Operations",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Expert in business development and franchise operations across Europe"
              },
              {
                name: "Thomas Weber",
                role: "Technical Director",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
                description: "Leading our technology innovation and coffee machine development"
              }
            ].map((member, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  { year: "2019", title: "The Beginning", desc: "Started with a simple idea: make premium coffee accessible everywhere" },
                  { year: "2020", title: "First Station", desc: "Launched our first automated coffee station in Vienna" },
                  { year: "2021", title: "Rapid Growth", desc: "Expanded to 50+ locations across Austria and Germany" },
                  { year: "2022", title: "European Expansion", desc: "Entered Czech Republic, Slovakia, and Poland" },
                  { year: "2023", title: "Technology Innovation", desc: "Launched advanced payment systems and loyalty programs" },
                  { year: "2024", title: "500+ Partners", desc: "Reached 500+ successful business partners across 15 countries" }
                ].map((milestone, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coffee station in action"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <Award className="h-8 w-8 text-orange-500 mb-2" />
                <p className="font-bold text-gray-800">Award Winning</p>
                <p className="text-sm text-gray-600">Innovation in Coffee Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose CoffeeHub Pro?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            We're not just another coffee company. We're your partners in building a successful, 
            sustainable coffee business that makes a difference in your community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Users className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Proven Success</h3>
              <p className="text-gray-600">500+ successful partners across Europe trust our business model</p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Globe className="h-16 w-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">European Leader</h3>
              <p className="text-gray-600">Leading automated coffee station provider in 15 European countries</p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Coffee className="h-16 w-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">Italian machines, specialty beans, and uncompromising quality standards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of the CoffeeHub Pro family and start building your coffee business today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
              Start Your Business
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}