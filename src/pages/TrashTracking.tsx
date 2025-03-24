import React from 'react';
import { MapPin, Phone, Recycle } from 'lucide-react';

export default function TrashTracking() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Trash Tracking</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Recycle className="h-6 w-6 text-primary-500" />
              <h2 className="text-xl font-semibold">Device in Trash</h2>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Old Samsung Galaxy</h3>
                  <p className="text-gray-600">Recycled: 2 weeks ago</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Recycling
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <Recycle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium">Recycling Center</h4>
                  <p className="text-gray-600">EcoTech Recycling Facility</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">123 Green Street, Eco City, EC 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <Recycle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium">Recycling Status</h4>
                  <p className="text-gray-600">Components being separated for recycling</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Phone className="h-5 w-5" />
              Contact Recycling Center
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Map of Nearby Stores</h2>
            <div className="aspect-video bg-gray-100 rounded-lg mb-6">
              <div className="h-full flex items-center justify-center text-gray-500">
                Interactive Map Coming Soon
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">EcoTech Recycling</h3>
                  <p className="text-sm text-gray-600">0.5 miles away</p>
                </div>
                <MapPin className="h-5 w-5 text-primary-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Green Electronics</h3>
                  <p className="text-sm text-gray-600">1.2 miles away</p>
                </div>
                <MapPin className="h-5 w-5 text-primary-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Sustainable Tech</h3>
                  <p className="text-sm text-gray-600">2.3 miles away</p>
                </div>
                <MapPin className="h-5 w-5 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}