import { motion } from 'framer-motion'
import { StarIcon, QuoteIcon } from '@heroicons/react/24/solid'
import { useAppointment } from '../../contexts/AppointmentContext'

const testimonials = [
  {
    name: 'Sarah Thompson',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2800',
    treatment: 'Cardiac Surgery',
    quote:
      'The care I received was exceptional. The medical team was not only highly skilled but also incredibly compassionate. They made my recovery journey much easier.',
    rating: 5,
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2800',
    treatment: 'Joint Replacement',
    quote:
      'From the initial consultation to post-surgery care, everything was handled professionally. The results exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    location: 'Spain',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2800',
    treatment: 'Cancer Treatment',
    quote:
      'The doctors and nurses became like family during my treatment. Their expertise and support helped me through a challenging time.',
    rating: 5,
  },
]

const featuredStory = {
  name: 'James Wilson',
  age: 45,
  location: 'Australia',
  treatment: 'Complex Spine Surgery',
  image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2800',
  quote:
    'After years of chronic back pain and unsuccessful treatments, I found hope at this hospital. The surgical team performed a complex spine surgery that completely transformed my life. Today, I'm pain-free and able to enjoy activities I had given up on.',
  beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2800',
  afterImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2800',
}

const highlights = [
  {
    stat: '98%',
    label: 'Patient Satisfaction',
  },
  {
    stat: '50+',
    label: 'Countries',
  },
  {
    stat: '1000+',
    label: 'Success Stories',
  },
  {
    stat: '25+',
    label: 'Years of Excellence',
  },
]

export default function Stories() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2800)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Patient Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Real stories of hope, healing, and transformation from our patients
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Start Your Story
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[rgb(225,29,72)] mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Featured Patient Story
            </h2>
            <p className="text-lg text-gray-600">
              A journey of transformation and healing
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {featuredStory.name}
                  </h3>
                  <p className="text-gray-600">
                    {featuredStory.age} years, {featuredStory.location}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-xl text-gray-600 italic">
                "{featuredStory.quote}"
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Before Treatment</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={featuredStory.beforeImage}
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">After Treatment</p>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={featuredStory.afterImage}
                      alt="After treatment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Treatment Details</h4>
                <p className="text-gray-600">{featuredStory.treatment}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              More Patient Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our patients about their experiences and recoveries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.treatment} | {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Begin Your Journey to Recovery
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of satisfied patients who have experienced exceptional
              care and successful treatments at our hospital.
            </p>
            <button
              onClick={openAppointment}
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 