import React from 'react';
import { Eye } from 'lucide-react';
import HelpDesk from '../components/HelpDesk';

const devices = [
  {
    id: 1,
    name: 'Google Pixel 7 Pro',
    image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&w=300&q=80',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Pixel Tablet',
    image: 'https://lh3.googleusercontent.com/VRPfQml16IJp9tjEr70sOmNcu3eqtRe-LXoOxWJ32CNkOic-wf-TuY5TPIUZ2EO6cpHACrQZsryh_kzb9UD4RbeTchIGMTHwxA=rw-e365-w1200',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Pixel Buds Pro',
    image: 'https://lh3.googleusercontent.com/ETp-RgB9ceh3n4unf7XbAoa4j3PavTasBN40Vc44t_cV-NCYAH6VUpv-Su6xXhFX9pJRa0q8xIZHQk2lq-eLad7jRnSAPRo3Bg=s6000-w6000-e365-rw-v0-nu',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Google Nest Hub',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=300&q=80',
    status: 'In Service',
  },
  {
    id: 5,
    name: 'Pixel Watch',
    image: 'https://lh3.googleusercontent.com/4lLgypgc1i3PJR8slbV_H9AEuJaNsX54tzetQKJSIbRajET7wQoCMmkKN4N6n0JrakTnS2xsS0QcVu0bOVpxpsA5TF7818xtJ04=s6000-w6000-e365-rw-v0-nu',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Google Nest Thermostat',
    image: 'https://lh3.googleusercontent.com/2RGmLUEaeKjWEXGr7oSCzUbvYJmcy7_m7sVPAJByPJ4tvstGIN_-uKaFTBRFBY2HZLnTGBmXFU7Vb3GA7FGZWdvEPdCz-iqrgtQ=s6000-w6000-e365-rw-v0-nu',
    status: 'Active',
  },
];

export default function DeviceStatus() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Device Status</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <div key={device.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={device.image}
              alt={device.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Status: {device.status}</p>
              <button className="mt-4 flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <Eye className="h-4 w-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <HelpDesk />
    </div>
  );
}