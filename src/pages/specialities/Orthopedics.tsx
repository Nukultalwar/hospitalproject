import { motion } from 'framer-motion'
import {
  BeakerIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../../contexts/AppointmentContext'

const treatments = [
  {
    name: 'Joint Replacement',
    description: 'Advanced joint replacement surgery for knees, hips, and shoulders',
  },
  {
    name: 'Sports Medicine',
    description: 'Treatment and rehabilitation for sports-related injuries',
  },
  {
    name: 'Spine Surgery',
    description: 'Minimally invasive spine procedures and treatments',
  },
  {
    name: 'Trauma Care',
    description: 'Emergency treatment for fractures and injuries',
  },
  {
    name: 'Arthroscopy',
    description: 'Minimally invasive diagnostic and treatment procedures',
  },
  {
    name: 'Physical Therapy',
    description: 'Comprehensive rehabilitation programs',
  },
]

const facilities = [
  {
    icon: BeakerIcon,
    name: 'Advanced Technology',
    description: 'State-of-the-art orthopedic surgical equipment',
  },
  {
    icon: UserGroupIcon,
    name: 'Expert Team',
    description: 'Skilled orthopedic surgeons and specialists',
  },
  {
    icon: SparklesIcon,
    name: 'Rehabilitation',
    description: 'Modern rehabilitation facilities and programs',
  },
]

const highlights = [
  'Comprehensive Orthopedic Center',
  'Minimally Invasive Surgery',
  'Advanced Joint Care',
  'Sports Medicine',
  'Rehabilitation Programs',
  'Research Initiatives',
]

export default function Orthopedics() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?q=80&w=2800)',
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
                Orthopedics Center
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Advanced orthopedic care for better mobility and quality of life
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Book Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Orthopedic Care
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Orthopedics Center combines advanced surgical techniques with
                comprehensive rehabilitation programs to provide the best possible
                outcomes for our patients. From joint replacements to sports
                medicine, we offer complete care for all orthopedic conditions.
              </p>
              <div className="space-y-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-[rgb(225,29,72)]" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2800"
                alt="Orthopedics Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Treatment Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of orthopedic treatments using
              advanced medical technologies and evidence-based protocols.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {treatment.name}
                </h3>
                <p className="text-gray-600">{treatment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art facilities and equipment for comprehensive orthopedic care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 mb-6">
                  <facility.icon className="h-8 w-8 text-[rgb(225,29,72)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {facility.name}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
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
              Get Expert Orthopedic Care
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of orthopedic specialists is here to help. Schedule a consultation
              to discuss your treatment options.
            </p>
            <button
              onClick={openAppointment}
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 