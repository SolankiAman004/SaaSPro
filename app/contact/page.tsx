'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, HelpCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@saaspro.com', 'support@saaspro.com'],
    description: 'We typically respond within 2 hours',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    description: 'Mon-Fri, 9am-6pm EST',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Tech Street', 'San Francisco, CA 94107', 'United States'],
    description: 'Come visit us anytime',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
]

const faqs = [
  {
    question: 'How long does it take to get set up?',
    answer: 'Most customers are up and running in under 30 minutes.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. No contracts, cancel anytime with no hidden fees.',
  },
  {
    question: 'Do you offer custom plans?',
    answer: 'Yes, we offer custom enterprise plans for large organizations.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      })
      setSubmitSuccess(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions? We're here to help you succeed with our SaaS platform.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">✓ 24/7 support available for enterprise customers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm animate-slide-left">
              <div className="flex items-center mb-8">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Send className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-green-700 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      placeholder="Company Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      required
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none bg-white"
                    required
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm animate-slide-right">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="flex items-start animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1 text-sm">{detail}</p>
                      ))}
                      <div className="flex items-center mt-2 text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {method.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 animate-slide-up animation-delay-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="pb-4 border-b border-gray-100 last:border-0 last:pb-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">{faq.question}</h4>
                    <p className="text-gray-600 text-xs">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center group">
                View all FAQs
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>


            {/* Map Placeholder */}

          </div>
        </div>
      </div>
    </div>
  )
}