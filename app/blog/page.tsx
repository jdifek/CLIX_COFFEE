import { Metadata } from 'next';
import { CalendarDays, Clock, ArrowRight, TrendingUp, Coffee, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'CoffeeHub Pro Blog - Coffee Business Insights & Success Tips',
  description: 'Expert advice on coffee business management, market trends, and maximizing profits with automated coffee stations. Learn from industry professionals.',
  keywords: 'coffee business blog, coffee industry trends, automated coffee stations, business tips, coffee market insights',
};

const blogPosts = [
  {
    id: 1,
    title: "Maximizing Profits: The Science Behind Optimal Coffee Station Placement",
    excerpt: "Discover the key factors that determine coffee station profitability, from foot traffic analysis to demographic targeting.",
    category: "Business Strategy",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true
  },
  {
    id: 2,
    title: "2024 Coffee Market Trends: What Automated Station Owners Need to Know",
    excerpt: "Stay ahead of the curve with insights into consumer preferences, technology advances, and market opportunities in the coffee industry.",
    category: "Market Analysis",
    readTime: "6 min read",
    date: "2024-01-12",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "From Zero to Hero: How Sarah Built a €5,000 Monthly Income with Coffee Stations",
    excerpt: "Follow Sarah's journey from her first station to a network of 6 profitable locations across three cities.",
    category: "Success Story",
    readTime: "12 min read",
    date: "2024-01-10",
    image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "The Psychology of Coffee Pricing: Finding Your Sweet Spot",
    excerpt: "Learn how to price your coffee offerings to maximize both volume and profit margins using behavioral economics principles.",
    category: "Pricing Strategy",
    readTime: "7 min read",
    date: "2024-01-08",
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Maintenance Made Simple: Keeping Your Coffee Station Running Smoothly",
    excerpt: "Essential maintenance tips and schedules to ensure maximum uptime and customer satisfaction for your automated coffee business.",
    category: "Operations",
    readTime: "5 min read",
    date: "2024-01-05",
    image: "https://images.pexels.com/photos/4226125/pexels-photo-4226125.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    title: "Building Customer Loyalty in the Age of Contactless Coffee",
    excerpt: "Strategies for creating lasting customer relationships and increasing repeat purchases through digital engagement.",
    category: "Customer Experience",
    readTime: "9 min read",
    date: "2024-01-03",
    image: "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const categories = ["All", "Business Strategy", "Market Analysis", "Success Story", "Pricing Strategy", "Operations", "Customer Experience"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CoffeeHub Pro <span className="text-orange-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert guidance, market insights, and success stories to help you thrive in the automated coffee business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <TrendingUp className="h-5 w-5" />
              <span>Market Trends</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Users className="h-5 w-5" />
              <span>Success Stories</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Coffee className="h-5 w-5" />
              <span>Business Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Article</h2>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4 bg-orange-500">{blogPosts[0].category}</Badge>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{post.category}</Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl mb-8 opacity-90">Get weekly insights, market updates, and exclusive business tips delivered to your inbox</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime. Join 2,500+ coffee entrepreneurs.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}