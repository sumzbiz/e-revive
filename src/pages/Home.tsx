import React from 'react';
import { Search, Power, WrenchIcon, Trash2, ChevronDown, Leaf, LogOut, Settings, User } from 'lucide-react';

const actions = [
  {
    name: 'Find My Device',
    icon: Search,
    description: 'Locate and track your registered devices',
    color: 'bg-blue-500',
  },
  {
    name: 'In Rest',
    icon: Power,
    description: 'View devices currently not in use',
    color: 'bg-green-500',
  },
  {
    name: 'Need Service',
    icon: WrenchIcon,
    description: 'Request maintenance for your devices',
    color: 'bg-yellow-500',
  },
  {
    name: 'Push to Trash',
    icon: Trash2,
    description: 'Initiate the recycling process',
    color: 'bg-red-500',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="relative">
        <div className="flex items-center gap-2 text-3xl font-bold text-gray-900 mb-8">
          Quick Actions
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => (
            <button
              key={action.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`p-4 rounded-full ${action.color} bg-opacity-10 mb-4`}>
                <action.icon className={`h-6 w-6 ${action.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{action.name}</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="h-8 w-8 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">About E-Revive</h2>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-xl text-primary-600 font-medium mb-8">
            Empowering a Greener Future Through Responsible E-Waste Management
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                At E-Revive, we believe technology should never come at the cost of our planet. Our mission is to revolutionize e-waste management by bridging the gap between consumers, recyclers, and sustainable innovation. We empower individuals and businesses to recycle electronics responsibly while rewarding eco-conscious choices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Why We Exist</h3>
              <p className="text-gray-600 mb-4">
                Electronic waste is the fastest-growing waste stream globally, yet less than 20% is properly recycled. Discarded devices leak toxins into ecosystems and squander precious resources. E-Revive tackles this crisis head-on by:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <span>Simplifying Recycling: Track, trade, or recycle devices effortlessly.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  <span>Promoting Circularity: Turn old gadgets into new opportunities with recycled-material products.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <span>Rewarding Sustainability: Earn ReTurn Scores for discounts and exclusive perks.</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-2xl">♻️</span>
                    Planet-First Innovation
                  </p>
                  <p className="text-gray-600 ml-9">
                    We design tools like our Trash Tracking Map and Device Status Dashboard to make sustainability seamless and engaging.
                  </p>
                </div>
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    Community-Driven Impact
                  </p>
                  <p className="text-gray-600 ml-9">
                    From local recycling partnerships to global awareness campaigns, we collaborate to amplify our collective environmental footprint.
                  </p>
                </div>
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <span className="text-2xl">🔍</span>
                    Transparency & Trust
                  </p>
                  <p className="text-gray-600 ml-9">
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