import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Leaf, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
      {/* Mobile sidebar overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-gray-800/70 z-20 transition-opacity duration-300 ease-in-out lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar - transforms for mobile, stays fixed for desktop */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col relative overflow-hidden w-full">
        {/* Fixed Header - responsive padding and flex direction */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-3 sm:p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="text-white mr-3 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-white font-semibold text-sm sm:text-base md:text-lg">E-Revive Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="bg-white/20 hover:bg-white/30 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm transition-colors">
                Notifications
              </button>
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
                UR
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrollable Main Content - responsive padding */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        
        {/* Fixed Footer - responsive spacing and flex direction */}
        <footer className="bg-primary-800 text-white py-3 px-4 sm:py-4 sm:px-8 sticky bottom-0 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary-300" />
              <span className="font-medium text-sm sm:text-base">E-Revive</span>
            </div>
            <div className="text-xs sm:text-sm text-primary-200 text-center md:text-right">
              &copy; {new Date().getFullYear()} E-Revive. Making the world greener one device at a time.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}