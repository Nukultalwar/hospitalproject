import { useAppointment } from '../../contexts/AppointmentContext'
import { VideoCameraIcon, ClockIcon, DevicePhoneMobileIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Video Consultations',
    description: 'High-quality video consultations with experienced doctors from the comfort of your home.',
    icon: VideoCameraIcon,
  },
  {
    name: '24/7 Availability',
    description: 'Access to medical consultations round the clock for your convenience.',
    icon: ClockIcon,
  },
  {
    name: 'Mobile App Access',
    description: 'Easy-to-use mobile application for scheduling and attending consultations.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Digital Prescriptions',
    description: 'Receive digital prescriptions and medical advice directly on your device.',
    icon: DocumentTextIcon,
  },
]

const specialties = [
  {
    name: 'General Medicine',
    description: 'Consultations for common health issues and general medical advice.',
    availableSlots: 'Multiple slots daily',
    consultationTime: '15-20 minutes',
    price: '$49',
  },
  {
    name: 'Pediatrics',
    description: 'Expert pediatric care and consultations for children\'s health issues.',
    availableSlots: '9 AM - 7 PM',
    consultationTime: '20-30 minutes',
    price: '$59',
  },
  {
    name: 'Mental Health',
    description: 'Professional counseling and psychiatric consultations.',
    availableSlots: '10 AM - 8 PM',
    consultationTime: '45-60 minutes',
    price: '$79',
  },
  {
    name: 'Chronic Care',
    description: 'Regular follow-ups and management of chronic conditions.',
    availableSlots: '9 AM - 6 PM',
    consultationTime: '20-30 minutes',
    price: '$69',
  },
]

const benefits = [
  'No travel or waiting time',
  'Access to specialists across locations',
  'Secure and confidential consultations',
  'Immediate prescription delivery',
  'Follow-up care and monitoring',
  'Cost-effective healthcare solution',
]

export default function Telemedicine() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Online <span className="text-primary-600">Consultations</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert medical care from the comfort of your home through secure video consultations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Consultation
              </button>
              <button onClick={openAppointment} className="btn btn-outline">
                View Doctors
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Telemedicine Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience healthcare delivery reimagined through our cutting-edge telemedicine platform.
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

      {/* Specialties Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Available Specialties</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Online Consultation Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Connect with specialists across various medical fields for expert consultations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {specialties.map((specialty) => (
                <div key={specialty.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{specialty.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{specialty.description}</p>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Available Slots</p>
                        <p className="mt-1 text-sm text-gray-900">{specialty.availableSlots}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Duration</p>
                        <p className="mt-1 text-sm text-gray-900">{specialty.consultationTime}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Price</p>
                        <p className="mt-1 text-sm text-gray-900">{specialty.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button onClick={openAppointment} className="btn btn-primary w-full">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Benefits</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Telemedicine?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the advantages of modern healthcare delivery:
          </p>
          <ul className="mt-8 space-y-4 text-left text-lg leading-8 text-gray-600">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center">
                <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex justify-center">
          <button onClick={openAppointment} className="btn btn-primary">
            Start Your Consultation
          </button>
        </div>
      </div>
    </div>
  )
} 