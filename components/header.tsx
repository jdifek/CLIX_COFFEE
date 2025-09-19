import { Phone, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Coffee className="h-8 w-8" />
            <span>CoffeeHub<span className="text-orange-500">Pro</span></span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Find Locations
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Get Rewarded
            </Link>
          </nav>
          
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+43 664 123-45-67</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}