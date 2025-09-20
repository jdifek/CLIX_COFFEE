"use client";

import { useState, useEffect } from "react";
import { Coffee, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/locations", label: "Find Locations" },
    { href: "/#contact", label: "Get Rewarded" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-orange-500 transition-colors ${
                  isScrolled ? "text-gray-600" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <div
                className={`hidden lg:flex items-center space-x-2 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+372 552 5855</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Book a Call
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+372 552 5855</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
