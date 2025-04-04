import React from 'react';
import { Send } from 'lucide-react';
import HelpDesk from '../components/HelpDesk';

export default function Support() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="title-xl mb-4 sm:mb-6 md:mb-8 text-gray-900">Support</h1>
      
      <div className="card section">
        <form className="space-fluid">
          <div>
            <label htmlFor="name" className="block text-fluid-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-fluid-base"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-fluid-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-fluid-base"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-fluid-base font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-fluid-base"
            >
              <option>Device Issues</option>
              <option>Recycling Process</option>
              <option>Account Management</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-fluid-base font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-fluid-base"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary btn-md w-full flex items-center justify-center gap-2"
          >
            <span className="icon-sm"><Send /></span>
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-6 sm:mt-8 md:mt-10">
        <HelpDesk />
      </div>
    </div>
  );
}