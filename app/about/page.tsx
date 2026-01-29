'use client'

import { useState } from 'react'
import { Target, Globe, Award, Heart, Clock, ChevronDown, ChevronUp } from 'lucide-react'

const milestones = [
  { year: '2020', title: 'Founded', description: 'Started with a small team of passionate developers' },
  { year: '2021', title: 'First 100 Customers', description: 'Reached our first major milestone' },
  { year: '2022', title: 'Series A Funding', description: 'Raised $10M to accelerate growth' },
  { year: '2023', title: 'Global Expansion', description: 'Launched in 5 new countries' },
  { year: '2024', title: '10,000+ Customers', description: 'Helping businesses worldwide' },
]

const team = [
  { name: 'Alex Johnson', role: 'CEO & Founder', bio: 'Former Google PM with 10+ years in SaaS', image: 'AJ' },
  { name: 'Sarah Chen', role: 'CTO', bio: 'Ex-Microsoft architect, AI/ML specialist', image: 'SC' },
  { name: 'Michael Rodriguez', role: 'Head of Product', bio: 'Product leader from Uber and Airbnb', image: 'MR' },
  { name: 'Emma Wilson', role: 'Head of Design', bio: 'Design lead from Figma and Adobe', image: 'EW' },
  { name: 'David Kim', role: 'Lead Engineer', bio: 'Full-stack developer with open-source contributions', image: 'DK' },
  { name: 'Lisa Taylor', role: 'Customer Success', bio: 'Previously at Salesforce and Zendesk', image: 'LT' },
]

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve businesses across all industries including tech, healthcare, finance, retail, and education.',
  },
  {
    question: 'Where are your offices located?',
    answer: 'Our headquarters are in San Francisco, with additional offices in New York, London, and Singapore.',
  },
  {
    question: 'How many employees do you have?',
    answer: 'We currently have over 150 employees across 4 countries and are growing rapidly.',
  },
  {
    question: 'What makes SaaSPro different?',
    answer: 'Our focus on intuitive design, enterprise-grade security, and exceptional customer support sets us apart.',
  },
]

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About SaaSPro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to revolutionize how businesses operate in the digital age.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border text-blue-600 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Serving 10,000+ businesses worldwide</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Customers', value: '10K+' },
            { label: 'Countries', value: '50+' },
            { label: 'Team Members', value: '150+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border text-center hover:shadow-md transition-shadow animate-slide-up"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-blue-50 border rounded-2xl p-8 animate-slide-left">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg">
              To empower businesses of all sizes with intuitive, powerful SaaS solutions that drive growth,
              efficiency, and innovation.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-8 animate-slide-right">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg">
              To become the global standard for business operations software, helping companies thrive in a
              digital-first world.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white border rounded-xl">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openFaq === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-blue-50 border rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Thousands of Successful Businesses
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Ready to transform your business with SaaSPro? Start your free trial today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Start Free Trial
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Contact Sales
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
