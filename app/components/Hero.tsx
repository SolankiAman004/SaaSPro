'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Sparkles size={16} />
            <span className="text-sm font-medium">New: AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Transform Your Business With
            <span className="text-blue-600"> Modern SaaS</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Experience the future of business management with our all-in-one SaaS platform.
            Streamline operations, boost productivity, and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg border hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95"
            >
              Book a Demo
            </Link>
          </div>
          
          <div className="mt-12 animate-fade-in animation-delay-600">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero