import React from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import HelpDesk from '../components/HelpDesk';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Battery Health Warning',
    message: 'Your laptop battery health is below 20%. Consider replacement.',
    time: '2 hours ago',
    icon: AlertTriangle,
    color: 'text-yellow-500',
  },
  {
    id: 2,
    type: 'success',
    title: 'Recycling Complete',
    message: 'Your old smartphone has been successfully recycled.',
    time: '1 day ago',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    id: 3,
    type: 'info',
    title: 'New Service Available',
    message: 'E-waste collection service now available in your area.',
    time: '2 days ago',
    icon: Info,
    color: 'text-blue-500',
  },
];

export default function Alert() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Recent Alerts</h1>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4"
          >
            <alert.icon className={`h-6 w-6 ${alert.color} flex-shrink-0 mt-1`} />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{alert.title}</h3>
              <p className="text-gray-600 mt-1">{alert.message}</p>
              <span className="text-sm text-gray-500 mt-2 block">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
      <HelpDesk />
    </div>
  );
}