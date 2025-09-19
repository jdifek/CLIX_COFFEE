'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LocationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    locationType: '',
    locationDetails: '',
    ownershipType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Location form submitted:', formData);
    alert('Thank you for your submission! Our location team will contact you within 24 hours.');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Join Our Location Partner Network</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
          <Input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
          <Input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
          <Input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="city" className="text-gray-700">City *</Label>
          <Input
            type="text"
            id="city"
            required
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="country" className="text-gray-700">Country *</Label>
        <Input
          type="text"
          id="country"
          required
          value={formData.country}
          onChange={(e) => handleChange('country', e.target.value)}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="ownershipType" className="text-gray-700">How can you help us? *</Label>
        <Select onValueChange={(value) => handleChange('ownershipType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your situation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="own-property">I own/manage property suitable for a coffee station</SelectItem>
            <SelectItem value="know-locations">I know great locations and can connect you with owners</SelectItem>
            <SelectItem value="local-expert">I'm a local expert who can help scout locations</SelectItem>
            <SelectItem value="other">Other (please specify in details)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="locationType" className="text-gray-700">What type of location(s) are you referring?</Label>
        <Select onValueChange={(value) => handleChange('locationType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select location type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="university">University/College</SelectItem>
            <SelectItem value="business-center">Business Center/Office Building</SelectItem>
            <SelectItem value="hospital">Hospital/Medical Center</SelectItem>
            <SelectItem value="library">Library/Public Building</SelectItem>
            <SelectItem value="airport">Airport/Transportation Hub</SelectItem>
            <SelectItem value="student-housing">Student Housing/Dormitory</SelectItem>
            <SelectItem value="shopping-center">Shopping Center/Mall</SelectItem>
            <SelectItem value="other">Other High-Traffic Location</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="locationDetails" className="text-gray-700">Location Details *</Label>
        <Textarea
          id="locationDetails"
          rows={5}
          required
          value={formData.locationDetails}
          onChange={(e) => handleChange('locationDetails', e.target.value)}
          placeholder="Please provide details about the location(s) you have in mind: address, foot traffic, target audience, available space, contact information for property owner/manager, etc."
          className="mt-1"
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
        Submit Location Information
      </Button>
      
      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to partner with CoffeeHub Pro on location development. 
        We will contact you within 24 hours to discuss potential rewards and next steps.
      </p>
    </form>
  );
}