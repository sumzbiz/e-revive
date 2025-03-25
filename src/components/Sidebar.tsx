import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Trash2, Smartphone, Recycle, HeadphonesIcon, Leaf, User, Settings, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Alert', to: '/alert', icon: Bell },
  { name: 'Trash Tracking', to: '/trash-tracking', icon: Trash2 },
  { name: 'Device Status', to: '/device-status', icon: Smartphone },
  { name: 'ReTurn', to: '/return', icon: Recycle },
  { name: 'Support', to: '/support', icon: HeadphonesIcon },
];

export default function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-primary-100 shadow-sm">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-primary-100 bg-gradient-to-r from-primary-50 to-white">
        <Leaf className="h-8 w-8 text-primary-600" />
        <span className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">E-Revive</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-4 py-2.5 text-sm font-medium rounded-lg',
                  'transition-all duration-200 ease-in-out',
                  'hover:bg-primary-50 hover:text-primary-700',
                  isActive
                    ? 'bg-primary-100 text-primary-700 shadow-sm'
                    : 'text-gray-700'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <div className="border-t border-primary-100 p-4 bg-gradient-to-b from-white to-primary-50">
        <div className="mb-4 p-4 bg-primary-600 rounded-xl text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-medium">User Name</p>
              <p className="text-xs text-primary-100">Green Level: Pro</p>
            </div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-1.5 mb-1">
            <div className="bg-white h-1.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <div className="flex justify-between text-xs">
            <span>ReTurn Score</span>
            <span>70/100</span>
          </div>
        </div>
        <div className="space-y-2">
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200">
            <User className="mr-3 h-5 w-5" />
            Account
          </button>
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </button>
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-all duration-200">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}