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
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <Leaf className="h-8 w-8 text-primary-600" />
        <span className="text-xl font-semibold text-gray-900">E-Revive</span>
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
                  'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                  'transition-colors duration-150 ease-in-out',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <div className="space-y-2">
          <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <User className="mr-3 h-5 w-5" />
            Account
          </button>
          <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </button>
          <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}