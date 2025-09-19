/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import {
  MapPin,
  Euro,
  Users,
  Building,
  GraduationCap,
  Plane,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationForm from "@/components/location-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Clix Coffee Pro Locations - Earn Money Finding Perfect Coffee Station Spots",
  description:
    "Partner with Clix Coffee Pro to find ideal coffee station locations. Earn up to €1,200 for each successful location. Help us expand across Europe.",
  keywords:
    "coffee location finder, location scout, coffee station placement, earn money locations, coffee business partnership",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            EARN MONEY BY FINDING
            <br />
            <span className="text-yellow-400">PREMIUM COFFEE LOCATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our location scouts network and earn substantial rewards for
            helping us secure the best coffee station spots across Europe
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Euro className="h-5 w-5" />
              <span>Up to €1,200 per location</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <MapPin className="h-5 w-5" />
              <span>Work from anywhere</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Users className="h-5 w-5" />
              <span>Flexible collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick & Easy Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Quick & Easy Opportunities
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Multiple ways to earn money helping Clix Coffee Pro grow
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Help Us Grow",
                desc: "Join our expansion mission across Europe",
              },
              {
                icon: MapPin,
                title: "Recommend Spots",
                desc: "Share great locations you discover",
              },
              {
                icon: Euro,
                title: "Earn Rewards",
                desc: "Get paid for successful placements",
              },
              {
                icon: Building,
                title: "Build Network",
                desc: "Create lasting business relationships",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300"
              >
                <CardContent className="pt-8">
                  <item.icon className="h-16 w-16 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We're Expanding */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            We're Expanding Everywhere
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Geography doesn't limit us - we want to establish Clix Coffee Pro
            stations in every corner of Europe. Whether you're in a major city
            or a growing town, we're interested in your local knowledge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600">Western Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Germany, France, Netherlands, Belgium, Switzerland, Estonia
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">Central Europe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Czech Republic, Slovakia, Poland, Hungary, Slovenia
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-purple-600">
                  Southern Europe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Italy, Spain, Portugal, Greece, Croatia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-100 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Multiple Ways to Earn
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-700">
                  One-Time Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Scout high-traffic venues</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Connect with landlords</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Get paid per successful location</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-blue-700">Property Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>Offer your own space</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>Generate monthly rental income</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span>Add value to your property</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-purple-700">Local Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <span>Know great spots in your city</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <span>Build ongoing partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <span>Join our growing team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reward Structure */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Generous Reward System
            </h2>
            <p className="text-xl text-gray-600">
              Get paid well for helping us secure prime locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-gradient-to-r from-green-500 to-teal-600 text-white">
                <div className="text-center">
                  <Euro className="h-16 w-16 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">Up to €1,200</div>
                  <p className="text-xl">per signed location</p>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Perfect Locations Include:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "Universities" },
                  { icon: Building, text: "Business Centers" },
                  { icon: Building, text: "Hospitals" },
                  { icon: Building, text: "Libraries" },
                  { icon: Plane, text: "Airports" },
                  { icon: Users, text: "Student Housing" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <item.icon className="h-8 w-8 text-green-600" />
                    <span className="font-medium text-gray-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Partner with Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-700">
                For Property Owners
              </h3>
              <ul className="space-y-4">
                {[
                  "Generate additional rental income with minimal effort",
                  "Enhance your property value with premium coffee service",
                  "We handle all setup, maintenance, and daily operations",
                  "Professional installation and ongoing support included",
                  "Flexible partnership terms that work for you",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-700">
                For Location Scouts
              </h3>
              <ul className="space-y-4">
                {[
                  "Work flexibly from anywhere in Europe",
                  "No upfront investment or ongoing commitments required",
                  "Build valuable business relationships in your area",
                  "Substantial rewards for successful location placements",
                  "Be part of an innovative, growing European business",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "Location Scout",
                    city: "Berlin",
                    earnings: "€4,800",
                    image:
                      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                  {
                    name: "Marco Bianchi",
                    role: "Property Owner",
                    city: "Rome",
                    earnings: "€2,400",
                    image:
                      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                  {
                    name: "Anna Kowalski",
                    role: "Local Expert",
                    city: "Warsaw",
                    earnings: "€3,600",
                    image:
                      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
                  },
                ].map((person, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-800">{person.name}</h4>
                      <p className="text-sm text-gray-600">
                        {person.role} • {person.city}
                      </p>
                      <p className="text-green-600 font-bold mt-2">
                        Earned: {person.earnings}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Start Earning Today
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Submit Information",
                desc: "Fill out our quick contact form with your details and location knowledge",
              },
              {
                step: "02",
                title: "Connect with Our Team",
                desc: "We'll reach out within 24 hours to discuss opportunities in your area",
              },
              {
                step: "03",
                title: "Share Location Details",
                desc: "Provide information about potential spots or property you own/manage",
              },
              {
                step: "04",
                title: "Get Rewarded",
                desc: "Receive generous compensation for each successful location placement",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start earning? Or simply call us directly:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="flex items-center space-x-2 text-lg">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="font-semibold">+43 664 657-23-60</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>locations@Clix Coffeepro.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Join Our Location Partner Network
            </h2>
            <p className="text-xl opacity-90">
              Share your local knowledge and start earning substantial rewards
              today
            </p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <LocationForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
