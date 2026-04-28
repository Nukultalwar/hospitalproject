import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../../contexts/AppointmentContext'

const insuranceProviders = [
  {
    name: 'Blue Cross Blue Shield',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2800',
    plans: ['PPO', 'HMO', 'Medicare Advantage'],
  },
  {
    name: 'UnitedHealthcare',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2800',
    plans: ['Choice Plus', 'Options PPO', 'Medicare Solutions'],
  },
  {
    name: 'Aetna',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2800',
    plans: ['Open Choice PPO', 'HMO', 'Medicare Advantage'],
  },
  {
    name: 'Cigna',
    logo: 'https://images.unsplash.com/photo-1576091160310-bb4a9d4df00d?q=80&w=2800',
    plans: ['Open Access Plus', 'LocalPlus', 'Medicare Plans'],
  },
]

const benefits = [
  {
    name: 'Easy Verification',
    description: 'Quick and simple insurance verification process',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Direct Billing',
    description: 'We handle insurance claims directly with providers',
    icon: DocumentTextIcon,
  },
  {
    name: 'Cost Estimates',
    description: 'Clear breakdown of expected out-of-pocket expenses',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Claims Assistance',
    description: 'Dedicated team to help with insurance claims',
    icon: ClipboardDocumentCheckIcon,
  },
]

const faqItems = [
  {
    question: 'What insurance plans do you accept?',
    answer:
      'We accept most major insurance plans including PPO, HMO, and Medicare plans. Please contact our insurance department for specific plan verification.',
  },
  {
    question: 'How do I verify my insurance coverage?',
    answer:
      'You can verify your insurance coverage by contacting our insurance department with your policy details. We will check your benefits and provide you with coverage information.',
  },
  {
    question: 'What if my insurance plan is not listed?',
    answer:
      'If your insurance plan is not listed, please contact us. We work with many insurance providers and may be able to arrange coverage or discuss alternative payment options.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we offer flexible payment plans for patients who need assistance with out-of-pocket expenses. Our financial counselors can help you explore your options.',
  },
]

export default function Insurance() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2800)',
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
                Insurance & Billing
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Making healthcare accessible with comprehensive insurance coverage
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Verify Insurance
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
              Insurance Benefits
            </h2>
            <p className="text-lg text-gray-600">
              We make the insurance process simple and straightforward for our patients
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

      {/* Insurance Providers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Insurance Providers
            </h2>
            <p className="text-lg text-gray-600">
              We work with major insurance providers to ensure you get the care you need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceProviders.map((provider) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {provider.name}
                </h3>
                <div className="space-y-2">
                  {provider.plans.map((plan) => (
                    <div
                      key={plan}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <ClipboardDocumentCheckIcon className="h-5 w-5 text-[rgb(225,29,72)]" />
                      <span>{plan}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common insurance and billing questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Insurance Support
              </h2>
              <p className="text-lg text-gray-600">
                Our insurance specialists are here to help you understand your coverage
                and benefits
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
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-[rgb(225,29,72)]" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">insurance@hospital.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Verify Your Insurance
                </h3>
                <p className="text-gray-600 mb-8">
                  Contact us to verify your insurance coverage and understand your
                  benefits.
                </p>
                <button
                  onClick={openAppointment}
                  className="w-full px-6 py-3 text-lg font-semibold rounded-lg bg-[rgb(225,29,72)] text-white hover:bg-[rgb(225,29,72)]/90 transition-colors"
                >
                  Contact Insurance Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 