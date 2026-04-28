import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  CalendarIcon,
  UserGroupIcon,
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../contexts/AppointmentContext'

const specialities = [
  {
    name: 'Cardiac Care',
    description: 'Comprehensive heart and cardiovascular care',
    href: '/specialities/cardiac-care',
  },
  {
    name: 'Cancer Care',
    description: 'Advanced oncology treatments and support',
    href: '/specialities/cancer-care',
  },
  {
    name: 'Neurology',
    description: 'Expert neurological care and treatment',
    href: '/specialities/neurology',
  },
  {
    name: 'Orthopedics',
    description: 'Specialized bone and joint care',
    href: '/specialities/orthopedics',
  },
  {
    name: 'Gastroenterology',
    description: 'Digestive health specialists',
    href: '/specialities/gastroenterology',
  },
  {
    name: 'Pediatrics',
    description: 'Complete child healthcare services',
    href: '/specialities/pediatrics',
  },
]

const patientCare = [
  {
    name: 'Health Packages',
    description: 'Comprehensive health screening packages',
    href: '/patient-care/health-packages',
  },
  {
    name: 'International Patients',
    description: 'Healthcare services for global patients',
    href: '/patient-care/international',
  },
  {
    name: 'Patient Stories',
    description: 'Real experiences from our patients',
    href: '/patient-care/stories',
  },
  {
    name: 'Insurance',
    description: 'Insurance and billing information',
    href: '/patient-care/insurance',
  },
]

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openAppointment } = useAppointment()
  const location = useLocation()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[rgb(225,29,72)] text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between py-3">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-white" />
                <span className="text-sm">Mon - Sat: 8:00 - 20:00</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-white" />
                <a href="tel:+1234567890" className="text-sm hover:text-white/80 transition-colors">
                  1800-123-4567
                </a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4 text-white" />
                <a href="mailto:info@hospital.com" className="text-sm hover:text-white/80 transition-colors">
                  info@hospital.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={openAppointment}
                className="text-sm font-medium hover:text-white/80 transition-colors"
              >
                Book Appointment
              </button>
              <Link to="/find-doctor" className="text-sm font-medium hover:text-white/80 transition-colors">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary-900">
                Health<span className="text-[rgb(225,29,72)]">Care</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold ${
                    location.pathname === item.href
                      ? 'text-[rgb(225,29,72)]'
                      : 'text-gray-700 hover:text-[rgb(225,29,72)]'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Specialities Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('specialities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-[rgb(225,29,72)] transition-colors">
                  Specialities
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className={`absolute top-full -left-24 w-[600px] bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === 'specialities' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {specialities.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group flex flex-col p-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-[rgb(225,29,72)] transition-colors">
                            {item.name}
                          </div>
                          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Care Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('patientCare')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-[rgb(225,29,72)] transition-colors">
                  Patient Care
                  <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className={`absolute top-full -left-24 w-[600px] bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform ${
                  activeDropdown === 'patientCare' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {patientCare.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="group flex flex-col p-4 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-[rgb(225,29,72)] transition-colors">
                            {item.name}
                          </div>
                          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={openAppointment}
                className="ml-4 px-5 py-2.5 bg-[rgb(225,29,72)] text-white text-sm font-semibold rounded-lg hover:bg-[rgb(225,29,72)]/90 transition-colors"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-6">
                  <Link to="/" className="text-2xl font-bold text-primary-900">
                    Health<span className="text-accent-600">Care</span>
                  </Link>
                  <button
                    type="button"
                    className="p-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2 text-base font-medium text-gray-900 hover:text-accent-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900 mb-2">Specialities</div>
                    {specialities.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-accent-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900 mb-2">Patient Care</div>
                    {patientCare.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 pl-4 text-sm text-gray-700 hover:text-accent-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => {
                        openAppointment()
                        setMobileMenuOpen(false)
                      }}
                      className="w-full px-4 py-3 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
}
