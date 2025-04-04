import React from 'react';
import { MapPin, Phone, Recycle } from 'lucide-react';
import HelpDesk from '../components/HelpDesk';

export default function TrashTracking() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">Trash Tracking</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              <Recycle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />
              <h2 className="text-lg sm:text-xl font-semibold">Device in Trash</h2>
            </div>

            <div className="bg-green-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 md:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="bg-gray-200 p-2 sm:p-3 rounded-lg">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Old Samsung Galaxy</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Recycled: 2 weeks ago</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  In Recycling
                </span>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-primary-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Recycling Center</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">EcoTech Recycling Facility</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-primary-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">123 Green Street, Eco City, EC 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-primary-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                  <Recycle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Recycling Status</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Components being separated for recycling</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 sm:mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Recycling Center
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Map of Nearby Stores</h2>
            <div className="aspect-video bg-gray-100 rounded-lg mb-3 sm:mb-4 md:mb-6">
              <div className="h-full flex items-center justify-center text-gray-500 text-sm sm:text-base">
                Interactive Map Coming Soon
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm sm:text-base">EcoTech Recycling</h3>
                  <p className="text-xs sm:text-sm text-gray-600">0.5 miles away</p>
                </div>
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Green Electronics</h3>
                  <p className="text-xs sm:text-sm text-gray-600">1.2 miles away</p>
                </div>
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm sm:text-base">Sustainable Tech</h3>
                  <p className="text-xs sm:text-sm text-gray-600">2.3 miles away</p>
                </div>
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8">
        <HelpDesk />
      </div>
    </div>
  );
}