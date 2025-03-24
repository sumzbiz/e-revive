import React from 'react';
import { Award, ShoppingBag, CreditCard } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Eco-Friendly Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80',
    price: 899,
    discount: 15,
  },
  {
    id: 2,
    name: 'Recycled Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
    price: 499,
    discount: 10,
  },
];

export default function Return() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ReTurn Program</h1>
      
      <div className="grid gap-8">
        {/* ReTurn Score Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <Award className="h-12 w-12 text-primary-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">ReTurn Score: 850</h2>
              <p className="text-gray-600">Excellent recycling habits! Keep it up!</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 rounded-full h-4">
            <div className="bg-primary-500 h-full rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Certification ID */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-primary-500" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Certification ID</h2>
              <p className="text-2xl font-mono mt-2">ECO-2024-8675309</p>
            </div>
          </div>
        </div>

        {/* Product Options */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recycled Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-primary-600">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">${product.price}</span>
                  <span className="text-sm text-primary-600 font-semibold">
                    {product.discount}% off
                  </span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  <ShoppingBag className="h-4 w-4" />
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}