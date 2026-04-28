import { useState } from 'react'
import { useAppointment } from '../contexts/AppointmentContext'
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  const { openAppointment } = useAppointment()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact <span className="text-primary-600">Us</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our medical professionals and support team.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
            <p className="mt-4 leading-7 text-gray-600">
              We're here to help. Contact us for any inquiries or medical assistance.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <BuildingOfficeIcon className="h-6 w-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="mt-1 text-gray-600">123 Healthcare Avenue</p>
                  <p className="text-gray-600">Medical District, City 12345</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <PhoneIcon className="h-6 w-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="mt-1 text-gray-600">Emergency: (555) 123-4567</p>
                  <p className="text-gray-600">General: (555) 765-4321</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-600">info@healthcare.com</p>
                  <p className="text-gray-600">appointments@healthcare.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
