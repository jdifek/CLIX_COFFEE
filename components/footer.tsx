import { Coffee, Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold mb-6"
            >
              <Coffee className="h-8 w-8 text-orange-500" />
              <span>
                Clix Coffee<span className="text-orange-500">Pro</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Leading provider of automated premium coffee solutions across
              Europe. Building profitable partnerships one station at a time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>franchise@Clix Coffeepro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+372 552 5855</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-orange-500" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold text-lg mb-6">Business</h3>
            <ul className="space-y-3">
              {/* <li><Link href="/#business-model" className="text-gray-300 hover:text-white transition-colors">Business Model</Link></li>
              <li><Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#franchise" className="text-gray-300 hover:text-white transition-colors">Franchise Pack</Link></li> */}
              <li>
                <Link
                  href="/locations"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Find Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              {/* <li><Link href="/#rewards" className="text-gray-300 hover:text-white transition-colors">Get Rewarded</Link></li> */}
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              {/* <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li> */}
              {/* <li><Link href="/#support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-info"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Legal Information
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Clix Coffee Pro. All rights reserved. A premium coffee
              solution company based in Estonia.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent Notice */}
      <div className="bg-slate-900 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400 text-center">
            This website uses cookies to enhance your browsing experience and
            provide personalized content. By continuing to use our site, you
            consent to our use of cookies.
            <Link
              href="/cookie-policy"
              className="text-orange-500 hover:text-orange-400 ml-1"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
