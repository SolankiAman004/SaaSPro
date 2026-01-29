import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'SaaSPro transformed how we handle our operations. The analytics dashboard alone saved us 20 hours per week.',
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO at StartupXYZ',
    content: 'Best investment we made this year. The team collaboration features are incredible.',
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Operations Manager',
    content: 'The customer support is outstanding. They helped us customize the platform perfectly for our needs.',
    avatar: 'ER',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-blue-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <Quote className="h-8 w-8 text-blue-200 ml-auto" />
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials