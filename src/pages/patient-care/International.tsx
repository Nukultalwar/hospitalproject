import { motion } from 'framer-motion'
import {
  GlobeAltIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../../contexts/AppointmentContext'

const services = [
  {
    name: 'Medical Visa Assistance',
    description: 'Support with medical visa documentation and processing',
    icon: DocumentTextIcon,
  },
  {
    name: 'Language Support',
    description: 'Multilingual staff and interpreters available',
    icon: LanguageIcon,
  },
  {
    name: 'Accommodation',
    description: 'Assistance with hotel bookings and accommodation',
    icon: HomeIcon,
  },
  {
    name: 'Cost Estimates',
    description: 'Detailed treatment cost estimates and financial counseling',
    icon: CurrencyDollarIcon,
  },
]

const facilities = [
  {
    name: 'International Patient Lounge',
    description: 'Exclusive lounge with modern amenities for international patients',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2800',
  },
  {
    name: 'Dedicated Care Coordinators',
    description: 'Personal care coordinators to assist throughout your treatment',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2800',
  },
  {
    name: 'World-Class Infrastructure',
    description: 'State-of-the-art medical facilities and equipment',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2800',
  },
]

const steps = [
  {
    title: 'Initial Inquiry',
    description: 'Contact our international patient department with your medical reports',
  },
  {
    title: 'Medical Opinion',
    description: 'Receive detailed treatment plan and cost estimate from our specialists',
  },
  {
    title: 'Travel Planning',
    description: 'Get assistance with visa, travel, and accommodation arrangements',
  },
  {
    title: 'Arrival & Treatment',
    description: 'Begin your treatment with our dedicated medical team',
  },
]

export default function International() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?q=80&w=2800)',
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
                International Patient Care
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                World-class healthcare with personalized support for international patients
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Get Treatment Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our International Patient Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive support services to ensure a smooth and
              comfortable medical journey for our international patients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 mb-6">
                  <service.icon className="h-8 w-8 text-[rgb(225,29,72)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Experience healthcare excellence with our state-of-the-art facilities
              and dedicated international patient services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Treatment Process
            </h2>
            <p className="text-lg text-gray-600">
              A simple and streamlined process for international patients seeking
              treatment at our hospital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-[rgb(225,29,72)]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact International Patient Care
              </h2>
              <p className="text-lg text-gray-600">
                Our dedicated team is available 24/7 to assist you with any queries
                about your medical treatment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <PhoneIcon className="h-6 w-6 text-[rgb(225,29,72)]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <GlobeAltIcon className="h-6 w-6 text-[rgb(225,29,72)]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">international@hospital.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-[rgb(225,29,72)]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      International Patient Care Department
                      <br />
                      Level 2, Main Hospital Building
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Get a Treatment Quote
                </h3>
                <p className="text-gray-600 mb-8">
                  Send us your medical reports and get a detailed treatment plan and
                  cost estimate within 48 hours.
                </p>
                <button
                  onClick={openAppointment}
                  className="w-full px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 