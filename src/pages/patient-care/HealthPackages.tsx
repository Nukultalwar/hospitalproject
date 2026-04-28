import { motion } from 'framer-motion'
import {
  BeakerIcon,
  HeartIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../../contexts/AppointmentContext'

const packages = [
  {
    name: 'Basic Health Checkup',
    price: '$199',
    description: 'Essential health screening package for routine checkup',
    tests: [
      'Complete Blood Count',
      'Lipid Profile',
      'Blood Sugar Test',
      'Kidney Function Test',
      'Liver Function Test',
      'Chest X-Ray',
      'ECG',
      'Doctor Consultation',
    ],
  },
  {
    name: 'Comprehensive Health Screening',
    price: '$499',
    description: 'Detailed health assessment with advanced diagnostics',
    tests: [
      'All Basic Package Tests',
      'Thyroid Profile',
      'Vitamin D & B12',
      'Cancer Markers',
      'Bone Density Scan',
      'Ultrasound Abdomen',
      'Stress Test',
      'Dietary Consultation',
    ],
  },
  {
    name: 'Executive Health Program',
    price: '$999',
    description: 'Premium health screening with specialized consultations',
    tests: [
      'All Comprehensive Package Tests',
      'Full Body MRI',
      'CT Scan',
      'Cardiac Evaluation',
      'Pulmonary Function Test',
      'Sleep Study',
      'Genetic Screening',
      'Wellness Coaching',
    ],
  },
]

const benefits = [
  {
    name: 'Early Detection',
    description: 'Identify potential health issues before they become serious',
    icon: BeakerIcon,
  },
  {
    name: 'Personalized Care',
    description: 'Customized health plans based on your results',
    icon: UserIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'State-of-the-art diagnostic equipment and procedures',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Quick Results',
    description: 'Digital reports within 24-48 hours',
    icon: ClockIcon,
  },
]

export default function HealthPackages() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2800)',
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
                Health Screening Packages
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Comprehensive health checkup packages designed for your well-being
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Book Health Checkup
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Health Packages?
            </h2>
            <p className="text-lg text-gray-600">
              Our health screening packages are designed to provide comprehensive
              insights into your health status with the highest quality standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 mb-6">
                  <benefit.icon className="h-8 w-8 text-[rgb(225,29,72)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.name}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Health Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our range of comprehensive health screening packages
              tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-[rgb(225,29,72)]">
                      {pkg.price}
                    </span>
                    <span className="ml-2 text-gray-500">/person</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="space-y-3">
                    {pkg.tests.map((test) => (
                      <div key={test} className="flex items-center gap-3">
                        <ClipboardDocumentCheckIcon className="h-5 w-5 text-[rgb(225,29,72)]" />
                        <span className="text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={openAppointment}
                    className="w-full mt-8 px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Simple Booking Process
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Book your health checkup in three easy steps
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(225,29,72)]">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Choose Package</h3>
                <p className="text-gray-600">Select your preferred health package</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(225,29,72)]">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
                <p className="text-gray-600">Schedule at your convenient time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[rgb(225,29,72)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[rgb(225,29,72)]">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Screened</h3>
                <p className="text-gray-600">Complete your health assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 