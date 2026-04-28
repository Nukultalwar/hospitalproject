import { motion } from 'framer-motion'
import {
  BeakerIcon,
  UserGroupIcon,
  HeartIcon,
  CheckCircleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../../contexts/AppointmentContext'

const treatments = [
  {
    name: 'General Pediatrics',
    description: 'Comprehensive healthcare for infants, children, and adolescents',
  },
  {
    name: 'Pediatric Surgery',
    description: 'Specialized surgical procedures for children',
  },
  {
    name: 'Neonatal Care',
    description: 'Advanced care for newborns and premature babies',
  },
  {
    name: 'Developmental Care',
    description: 'Monitoring and support for child development',
  },
  {
    name: 'Pediatric Emergency',
    description: '24/7 emergency care services for children',
  },
  {
    name: 'Vaccinations',
    description: 'Complete immunization programs for children',
  },
]

const facilities = [
  {
    icon: BeakerIcon,
    name: 'Child-Friendly Environment',
    description: 'Specially designed spaces for young patients',
  },
  {
    icon: UserGroupIcon,
    name: 'Expert Team',
    description: 'Skilled pediatricians and child specialists',
  },
  {
    icon: HeartIcon,
    name: 'Family Support',
    description: 'Comprehensive support for families',
  },
]

const highlights = [
  'Comprehensive Pediatric Center',
  'Child-Friendly Environment',
  'Advanced Medical Care',
  'Emergency Services',
  'Family-Centered Care',
  'Preventive Programs',
]

export default function Pediatrics() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2800)',
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
                Pediatrics Center
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Specialized healthcare for children with compassionate care
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
                Expert Pediatric Care
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Pediatrics Center provides comprehensive healthcare for children
                from birth through adolescence. With a focus on family-centered
                care, we combine medical expertise with a gentle, child-friendly
                approach to ensure the best possible care for your child.
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
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2800"
                alt="Pediatrics Facility"
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of pediatric services using
              child-friendly approaches and advanced medical care.
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
              Child-friendly facilities designed to make your little ones comfortable.
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
              Schedule Your Child's Visit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of pediatric specialists is here to provide the best care
              for your child. Book an appointment today.
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