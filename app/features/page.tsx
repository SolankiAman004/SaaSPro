'use client'

import { 
  Shield, Zap, BarChart3, Users, Globe, Lock,
  Cloud, Code, Database, Smartphone, Bell, Zap as Lightning
} from 'lucide-react'

const featureCategories = [
  {
    title: 'Security & Compliance',
    features: [
      {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Bank-level encryption, SOC2 compliance, and regular security audits.',
      },
      {
        icon: Lock,
        title: 'Data Privacy',
        description: 'GDPR and CCPA compliant with complete data ownership control.',
      },
    ],
  },
  {
    title: 'Performance',
    features: [
      {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Sub-second response times with 99.9% uptime guarantee.',
      },
      {
        icon: Cloud,
        title: 'Cloud Native',
        description: 'Built on AWS with auto-scaling and global CDN.',
      },
    ],
  },
  {
    title: 'Analytics',
    features: [
      {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Real-time dashboards with predictive insights.',
      },
      {
        icon: Database,
        title: 'Data Warehousing',
        description: 'Store and analyze years of historical data.',
      },
    ],
  },
  {
    title: 'Collaboration',
    features: [
      {
        icon: Users,
        title: 'Team Workspaces',
        description: 'Collaborate in real-time with your entire team.',
      },
      {
        icon: Bell,
        title: 'Smart Notifications',
        description: 'Get notified about important updates and changes.',
      },
    ],
  },
  {
    title: 'Development',
    features: [
      {
        icon: Code,
        title: 'API First',
        description: 'Comprehensive REST API with webhook support.',
      },
      {
        icon: Smartphone,
        title: 'Mobile Ready',
        description: 'Progressive web app that works on any device.',
      },
    ],
  },
  {
    title: 'Global',
    features: [
      {
        icon: Globe,
        title: 'Multi-Region',
        description: 'Deployed across 5 continents for maximum availability.',
      },
      {
        icon: Lightning,
        title: 'Real-time Sync',
        description: 'Instant updates across all connected devices.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to streamline operations, boost productivity, and drive growth.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full animate-pulse">
            <span className="text-sm font-medium">✓ All features included in every plan</span>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="animate-slide-up" 
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with your favorite tools and services
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {['Slack', 'Google', 'Salesforce', 'Notion', 'GitHub', 'Figma'].map((tool, index) => (
                <div
                  key={tool}
                  className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-gray-700 font-bold">{tool.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-gray-900">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience All Features?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Start your free trial today and explore all features for 14 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors transform hover:scale-105 active:scale-95">
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}