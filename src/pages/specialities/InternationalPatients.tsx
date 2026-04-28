import { useAppointment } from '../../contexts/AppointmentContext'
import { GlobeAltIcon, UserGroupIcon, BuildingOfficeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'International Coordination',
    description: 'Dedicated team to assist with medical travel planning and coordination.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Multilingual Support',
    description: 'Support staff fluent in multiple languages for seamless communication.',
    icon: UserGroupIcon,
  },
  {
    name: 'Accommodation Assistance',
    description: 'Help with finding suitable accommodation near the hospital.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Documentation Support',
    description: 'Assistance with medical visas and other required documentation.',
    icon: DocumentTextIcon,
  },
]

const services = [
  {
    name: 'Medical Travel Planning',
    description: 'Comprehensive assistance with planning your medical journey.',
    includes: [
      'Pre-arrival consultation',
      'Treatment cost estimates',
      'Visa assistance',
      'Travel arrangements',
      'Local transportation',
    ],
    duration: 'Pre-arrival',
  },
  {
    name: 'Treatment Coordination',
    description: 'End-to-end coordination of your medical treatment.',
    includes: [
      'Doctor appointments',
      'Treatment scheduling',
      'Medical records management',
      'Translation services',
      'Follow-up care planning',
    ],
    duration: 'During stay',
  },
  {
    name: 'Concierge Services',
    description: 'Premium concierge services for a comfortable stay.',
    includes: [
      'Airport pickup/drop',
      'Accommodation booking',
      'Local guidance',
      'Dietary arrangements',
      'Emergency assistance',
    ],
    duration: 'Throughout stay',
  },
  {
    name: 'Post-Treatment Support',
    description: 'Continued support after your treatment.',
    includes: [
      'Follow-up consultations',
      'Medical reports',
      'Medication guidance',
      'Remote monitoring',
      'Care coordination',
    ],
    duration: 'Post-treatment',
  },
]

const process = [
  {
    step: 1,
    title: 'Initial Inquiry',
    description: 'Contact our international patient desk with your medical requirements.',
  },
  {
    step: 2,
    title: 'Medical Assessment',
    description: 'Our doctors review your case and provide treatment recommendations.',
  },
  {
    step: 3,
    title: 'Travel Planning',
    description: 'We help plan your medical travel, including visa and accommodation.',
  },
  {
    step: 4,
    title: 'Treatment',
    description: 'Receive world-class medical care at our facility.',
  },
  {
    step: 5,
    title: 'Follow-up Care',
    description: 'Continued care and support even after you return home.',
  },
]

export default function InternationalPatients() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              International <span className="text-primary-600">Patients</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              World-class healthcare with personalized support for international patients.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Request Consultation
              </button>
              <button onClick={openAppointment} className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            International Patient Care
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive support services designed specifically for our international patients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Support Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              End-to-end assistance for international patients seeking medical treatment.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{service.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Service Period</p>
                        <p className="mt-1 text-sm text-gray-900">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple and streamlined process for international patients:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-8">
            {process.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button onClick={openAppointment} className="btn btn-primary">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
} 