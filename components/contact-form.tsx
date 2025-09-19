"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    quantity: "",
    timeline: "",
    funding: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Start Your Coffee Business Journey
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="quantity" className="text-gray-700">
            How many stations are you interested in?
          </Label>
          <Select onValueChange={(value) => handleChange("quantity", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 station</SelectItem>
              <SelectItem value="2-3">2-3 stations</SelectItem>
              <SelectItem value="4-5">4-5 stations</SelectItem>
              <SelectItem value="6+">6+ stations</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="timeline" className="text-gray-700">
            When do you plan to launch?
          </Label>
          <Select onValueChange={(value) => handleChange("timeline", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="1-3months">1-3 months</SelectItem>
              <SelectItem value="3-6months">3-6 months</SelectItem>
              <SelectItem value="6+months">6+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="funding" className="text-gray-700">
          How will you finance this investment?
        </Label>
        <Select onValueChange={(value) => handleChange("funding", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select funding source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal-savings">Personal savings</SelectItem>
            <SelectItem value="business-loan">Business loan</SelectItem>
            <SelectItem value="investor">Investor/Partner</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-gray-700">
            Full Name *
          </Label>
          <Input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email Address *
          </Label>
          <Input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-gray-700">
            WhatsApp Number *
          </Label>
          <Input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="city" className="text-gray-700">
            City *
          </Label>
          <Input
            type="text"
            id="city"
            required
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="country" className="text-gray-700">
          Country *
        </Label>
        <Input
          type="text"
          id="country"
          required
          value={formData.country}
          onChange={(e) => handleChange("country", e.target.value)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-700">
          Additional Information
        </Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your business goals, preferred locations, or any questions you have..."
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        Get My Business Plan & Financial Model
      </Button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to be contacted about Clix Coffee Pro
        business opportunities. We respect your privacy and will never share
        your information.
      </p>
    </form>
  );
}
