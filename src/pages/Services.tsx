import { Link } from 'react-router-dom'
import {
  ClipboardDocumentCheckIcon,
  TruckIcon,
  BeakerIcon,
  HeartIcon,
  GlobeAltIcon,
  VideoCameraIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Health Checkup Programs',
    description: 'Comprehensive health screening packages tailored to your needs.',
    icon: ClipboardDocumentCheckIcon,
    href: '/services/health-checkup',
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency care with rapid response and advanced life support.',
    icon: TruckIcon,
    href: '/services/emergency',
  },
  {
    name: 'Laboratory Services',
    description: 'State-of-the-art diagnostic testing and pathology services.',
    icon: BeakerIcon,
    href: '/services/lab-tests',
  },
  {
    name: 'Critical Care',
    description: 'Advanced intensive care units with round-the-clock monitoring.',
    icon: HeartIcon,
    href: '/services/critical-care',
  },
  {
    name: 'International Patients',
    description: 'Specialized care and support for international patients.',
    icon: GlobeAltIcon,
    href: '/services/international-patients',
  },
  {
    name: 'Telemedicine',
    description: 'Virtual consultations with our expert doctors from anywhere.',
    icon: VideoCameraIcon,
    href: '/services/telemedicine',
  },
  {
    name: 'Rehabilitation',
    description: 'Comprehensive rehabilitation programs for optimal recovery.',
    icon: UserGroupIcon,
    href: '/services/rehabilitation',
  },
  {
    name: 'Home Healthcare',
    description: 'Professional medical care in the comfort of your home.',
    icon: HomeIcon,
    href: '/services/home-healthcare',
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-primary-950">
            Our Medical <span className="text-accent-600">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of medical services with state-of-the-art facilities and experienced healthcare professionals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 ring-1 ring-gray-200 transition duration-300 hover:bg-gray-50 hover:ring-primary-500"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-50">
                <service.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
              </div>
              <div className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-primary-600">
                Learn more
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 