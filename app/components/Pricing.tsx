'use client'

import { Check, Star, Zap, Shield, Users, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    billing: 'Billed monthly',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 users',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    highlights: [
      { icon: Users, text: 'For 1-5 users' },
      { icon: Clock, text: 'Basic support' },
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    billing: 'Billed monthly',
    description: 'For growing businesses',
    features: [
      'Up to 50 users',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'White-labeling',
      'SLA 99.5%',
      'Advanced security',
    ],
    highlights: [
      { icon: Zap, text: 'Best value' },
      { icon: Users, text: 'For 6-50 users' },
      { icon: Shield, text: 'Advanced security' },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    billing: 'Contact for pricing',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Enterprise analytics',
      '24/7 phone support',
      'Custom development',
      'SLA 99.9%',
      'Dedicated account manager',
      'On-premise deployment',
    ],
    highlights: [
      { icon: Users, text: 'Unlimited users' },
      { icon: Shield, text: 'Enterprise security' },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  
  // Calculate annual prices with 20% discount
  const getAnnualPrice = (monthlyPrice: string) => {
    if (monthlyPrice === 'Custom') return 'Custom'
    const price = parseInt(monthlyPrice.replace('$', ''))
    const annualPrice = price * 12 * 0.8 // 20% discount
    return `$${annualPrice}`
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mb-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial • No credit card required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-200 p-8 relative transition-all duration-300 animate-slide-up ${
                plan.popular 
                  ? 'border-blue-500 shadow-xl md:scale-105 ring-2 ring-blue-500/20' 
                  : 'hover:shadow-lg hover:border-blue-300'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star size={12} className="fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {billingCycle === 'annual' && plan.price !== 'Custom' 
                      ? getAnnualPrice(plan.price)
                      : plan.price
                    }
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-2">{plan.billing}</p>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Plan Highlights */}
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2">
                  {plan.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      <highlight.icon className="h-3 w-3 mr-1" />
                      {highlight.text}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Link
                href={plan.name === 'Enterprise' ? '/contact' : '/dashboard'}
                className={`block text-center py-3 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Enterprise Security</p>
                <p className="text-sm text-gray-600">All plans include SOC2 compliance</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-600">Available on Professional & Enterprise</p>
              </div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">No Lock-in</p>
                <p className="text-sm text-gray-600">Cancel anytime, no hidden fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'Can I switch plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial on the Professional plan.',
              },
              {
                question: 'Do you offer discounts?',
                answer: 'We offer 20% discount for annual billing on all plans.',
              },
              {
                question: 'What payment methods?',
                answer: 'We accept all major credit cards and PayPal.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-left animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            Have more questions?{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing