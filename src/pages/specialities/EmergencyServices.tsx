import { useAppointment } from '../../contexts/AppointmentContext'
import { PhoneIcon, ClockIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '24/7 Emergency Care',
    description: 'Round-the-clock emergency medical services with immediate response for critical conditions.',
    icon: ClockIcon,
  },
  {
    name: 'Advanced Life Support',
    description: 'Fully equipped ambulances with advanced life support systems and trained paramedics.',
    icon: TruckIcon,
  },
  {
    name: 'Expert Emergency Team',
    description: 'Experienced emergency physicians and specialists available 24/7.',
    icon: UserGroupIcon,
  },
  {
    name: 'Rapid Response',
    description: 'Quick response times and efficient emergency care protocols.',
    icon: PhoneIcon,
  },
]

const services = [
  {
    name: 'Trauma Care',
    description: 'Comprehensive trauma care for accidents and severe injuries.',
    availability: '24/7',
    response: 'Immediate',
  },
  {
    name: 'Cardiac Emergency',
    description: 'Specialized care for heart attacks and cardiac emergencies.',
    availability: '24/7',
    response: 'Within minutes',
  },
  {
    name: 'Stroke Care',
    description: 'Rapid response stroke treatment and intervention.',
    availability: '24/7',
    response: 'Immediate',
  },
  {
    name: 'Critical Care',
    description: 'Advanced critical care for life-threatening conditions.',
    availability: '24/7',
    response: 'Immediate',
  },
]

export default function EmergencyServices() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Emergency <span className="text-primary-600">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              24/7 emergency medical care with state-of-the-art facilities and expert medical professionals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="tel:911" className="btn btn-primary">
                Call Emergency: 911
              </a>
              <button onClick={openAppointment} className="btn btn-outline">
                Non-Emergency Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Emergency Care</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Emergency Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our emergency department is equipped to handle all types of medical emergencies with rapid response times.
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
            <h2 className="text-base font-semibold leading-7 text-primary-600">Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Care Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide immediate care for all types of medical emergencies with specialized teams and equipment.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{service.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Availability</p>
                        <p className="mt-1 text-sm text-gray-900">{service.availability}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Response Time</p>
                        <p className="mt-1 text-sm text-gray-900">{service.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Instructions */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">What to Do</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            In Case of Emergency
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these steps during a medical emergency:
          </p>
          <ul className="mt-8 space-y-4 text-left text-lg leading-8 text-gray-600">
            <li>1. Call emergency services immediately (911)</li>
            <li>2. Stay calm and provide clear information about the emergency</li>
            <li>3. Follow instructions given by emergency personnel</li>
            <li>4. Have important medical information ready if possible</li>
          </ul>
        </div>
        <div className="mt-16 flex justify-center">
          <a href="tel:911" className="btn btn-primary">
            Call Emergency: 911
          </a>
        </div>
      </div>
    </div>
  )
} 