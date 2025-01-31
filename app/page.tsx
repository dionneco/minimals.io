'use client';

import React, { useState } from 'react';
import { Music, BarChart2, Wallet, FileMusic, Upload, Brain } from 'lucide-react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const Logo = () => (
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 border-2 border-black rounded-full" />
      <div 
        className="absolute w-1.5 h-1.5 bg-black rounded-full" 
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );

  const PricingTier = ({ title, price, description, features, highlighted = false }) => (
    <div className={`p-8 rounded-lg border ${highlighted ? 'border-black' : 'border-gray-200'}`}>
      <h3 className="font-mono text-xl mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-mono">${price}</span>
        <span className="text-gray-600 font-mono">/month</span>
      </div>
      <p className="text-gray-600 font-mono mb-6">{description}</p>
      <button 
        className={`w-full py-2 px-4 rounded-lg font-mono mb-6 ${
          highlighted ? 'bg-black text-white' : 'border border-black text-black'
        }`}
      >
        Start Distributing
      </button>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
            <span className="font-mono text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-black text-xl font-mono">minimals.io</span>
        </div>
        <div className="space-x-8">
          <button className="text-gray-600 hover:text-black font-mono">Features</button>
          <button className="text-gray-600 hover:text-black font-mono">Pricing</button>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 font-mono"
          >
            Login
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-mono mb-6 text-center">
          Music distribution, simplified.
        </h1>
        <p className="text-xl text-gray-600 mb-2 font-mono text-center max-w-2xl mx-auto">
          Everything you need, nothing you don't<span className="text-black">*</span>
        </p>
        <p className="text-xs text-gray-400 mb-12 font-mono text-center">
          * besides our beloved "Place to Think" — because every artist needs a space to breathe
        </p>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-100 p-2 rounded-lg">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded font-mono ${
                billingCycle === 'monthly' ? 'bg-white shadow' : ''
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded font-mono ${
                billingCycle === 'annual' ? 'bg-white shadow' : ''
              }`}
            >
              Annual (20% off)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier 
            title="Basic"
            price={billingCycle === 'monthly' ? '15' : '12'}
            description="Perfect for new artists"
            features={[
              'Unlimited music distribution',
              'All major platforms',
              'Basic Smart Link creation',
              'Simple Bio Link page',
              'Basic publishing registration',
              'Keep 85% of earnings',
              'Email support'
            ]}
          />
          <PricingTier 
            title="Pro"
            price={billingCycle === 'monthly' ? '25' : '20'}
            description="For growing artists"
            highlighted={true}
            features={[
              'Everything in Basic, plus:',
              'Advanced Smart Links & Analytics',
              'Customizable Bio Link page',
              'Unlimited Pre-save campaigns',
              'Full publishing administration',
              'Keep 90% of earnings',
              'Priority support'
            ]}
          />
          <PricingTier 
            title="Label"
            price={billingCycle === 'monthly' ? '50' : '40'}
            description="For serious artists & labels"
            features={[
              'Everything in Pro, plus:',
              'White-label Smart Links',
              'Multiple artist Bio Links',
              'Advanced Pre-save features',
              'Global publishing collection',
              'Keep 95% of earnings',
              'Dedicated account manager'
            ]}
          />
        </div>
      </div>
    </div>
  );
}
