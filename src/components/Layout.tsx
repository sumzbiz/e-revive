import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Leaf } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        {/* Fixed Header */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-600 p-4 shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white font-semibold">E-Revive Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition-colors">
                Notifications
              </button>
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                UR
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        
        {/* Fixed Footer */}
        <footer className="bg-primary-800 text-white py-4 px-8 sticky bottom-0 z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Leaf className="h-5 w-5 text-primary-300" />
              <span className="font-medium">E-Revive</span>
            </div>
            <div className="text-sm text-primary-200">
              &copy; {new Date().getFullYear()} E-Revive. Making the world greener one device at a time.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}