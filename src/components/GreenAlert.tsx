import { X } from 'lucide-react';
import { useState } from 'react';

type AlertType = 'success' | 'warning' | 'info';

interface GreenAlertProps {
  type: AlertType;
  title: string;
  message: string;
}

export default function GreenAlert({ type, title, message }: GreenAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-primary-50 border-primary-500 text-primary-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-500 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-500 text-blue-800';
      default:
        return 'bg-primary-50 border-primary-500 text-primary-800';
    }
  };
  
  return (
    <div className={`border-l-4 p-4 rounded-r-md mb-4 ${getStyles()}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm mt-1 opacity-80">{message}</p>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
} 