import React from 'react';
import { Search, Power, WrenchIcon, Trash2, ChevronDown, Leaf, LogOut, Settings, User, Recycle, Smartphone } from 'lucide-react';
import GreenAlert from '../components/GreenAlert';

const actions = [
  {
    name: 'Find My Device',
    icon: Search,
    description: 'Locate and track your registered devices',
    color: 'bg-primary-500',
    gradient: 'from-primary-400 to-primary-600',
  },
  {
    name: 'In Rest',
    icon: Power,
    description: 'View devices currently not in use',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-green-600',
  },
  {
    name: 'Need Service',
    icon: WrenchIcon,
    description: 'Request maintenance for your devices',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    name: 'Push to Trash',
    icon: Trash2,
    description: 'Initiate the recycling process',
    color: 'bg-red-500',
    gradient: 'from-red-400 to-red-600',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-primary-50 to-green-50 border border-primary-100 rounded-xl p-4 mb-8 flex items-center gap-4">
        <div className="p-3 bg-primary-100 rounded-full">
          <Leaf className="h-5 w-5 text-primary-700" />
        </div>
        <div>
          <h3 className="font-medium text-primary-800">Eco Tip of the Day</h3>
          <p className="text-sm text-gray-600">Recycling one laptop saves enough energy to power a lamp for 9 hours or a TV for 3 hours.</p>
        </div>
      </div>

      <GreenAlert 
        type="success" 
        title="Welcome back to E-Revive!" 
        message="You've contributed to recycling 3 devices this month. Keep up the good work!" 
      />

      <div className="relative">
        <div className="flex items-center gap-2 text-3xl font-bold text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Quick Actions
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => (
            <button
              key={action.name}
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-primary-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`p-4 rounded-full bg-gradient-to-br ${action.gradient} mb-4 z-10 shadow-md`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 z-10">{action.name}</h3>
              <p className="mt-2 text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300 z-10">{action.description}</p>
              <div className="mt-4 w-0 group-hover:w-1/2 h-0.5 bg-primary-500 transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-8">
        <div className="flex items-center gap-2 text-3xl font-bold text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Your Impact
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Devices Recycled</p>
                <h3 className="text-3xl font-bold text-primary-700 mt-1">128</h3>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <Recycle className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% of your yearly goal</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Carbon Saved</p>
                <h3 className="text-3xl font-bold text-primary-700 mt-1">482 <span className="text-sm font-medium">kg</span></h3>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Equivalent to planting 24 trees</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">ReTurn Points</p>
                <h3 className="text-3xl font-bold text-primary-700 mt-1">1,240</h3>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">260 points until next reward</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary-50">
            <Leaf className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">About E-Revive</h2>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-xl text-primary-600 font-medium mb-8">
            Empowering a Greener Future Through Responsible E-Waste Management
          </p>

          <div className="space-y-8">
            <section className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-white border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Our Mission</h3>
              <p className="text-gray-600">
                At E-Revive, we believe technology should never come at the cost of our planet. Our mission is to revolutionize e-waste management by bridging the gap between consumers, recyclers, and sustainable innovation. We empower individuals and businesses to recycle electronics responsibly while rewarding eco-conscious choices.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-white border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Why We Exist</h3>
              <p className="text-gray-600 mb-4">
                Electronic waste is the fastest-growing waste stream globally, yet less than 20% is properly recycled. Discarded devices leak toxins into ecosystems and squander precious resources. E-Revive tackles this crisis head-on by:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary-100">
                  <span className="text-2xl">🔄</span>
                  <span>Simplifying Recycling: Track, trade, or recycle devices effortlessly.</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary-100">
                  <span className="text-2xl">🌱</span>
                  <span>Promoting Circularity: Turn old gadgets into new opportunities with recycled-material products.</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-white border border-primary-100">
                  <span className="text-2xl">📈</span>
                  <span>Rewarding Sustainability: Earn ReTurn Scores for discounts and exclusive perks.</span>
                </li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-gradient-to-br from-primary-50 to-white border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Our Values</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white border border-primary-100">
                  <p className="font-medium flex items-center gap-2 text-primary-700">
                    <span className="text-2xl">♻️</span>
                    Planet-First Innovation
                  </p>
                  <p className="text-gray-600 ml-9 mt-2">
                    We design tools like our Trash Tracking Map and Device Status Dashboard to make sustainability seamless and engaging.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-primary-100">
                  <p className="font-medium flex items-center gap-2 text-primary-700">
                    <span className="text-2xl">🤝</span>
                    Community-Driven Impact
                  </p>
                  <p className="text-gray-600 ml-9 mt-2">
                    From local recycling partnerships to global awareness campaigns, we collaborate to amplify our collective environmental footprint.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-primary-100">
                  <p className="font-medium flex items-center gap-2 text-primary-700">
                    <span className="text-2xl">🔍</span>
                    Transparency & Trust
                  </p>
                  <p className="text-gray-600 ml-9 mt-2">
                    Every recycled device is tracked, certified, and validated. Your Certification ID ensures accountability at every step.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}