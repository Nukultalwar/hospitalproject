import { Link } from 'react-router-dom'
import { useAppointment } from '../contexts/AppointmentContext'

const patientResources = [
  {
    title: 'Patient Registration',
    description: 'Learn about our registration process and required documents.',
    link: '/patient-care/registration',
  },
  {
    title: 'Insurance & Billing',
    description: 'Information about insurance coverage and payment options.',
    link: '/patient-care/insurance',
  },
  {
    title: 'Medical Records',
    description: 'Access and manage your medical records securely.',
    link: '/patient-care/medical-records',
  },
  {
    title: 'Patient Rights',
    description: 'Understanding your rights and responsibilities as a patient.',
    link: '/patient-care/patient-rights',
  },
]

const facilities = [
  {
    title: 'Private Rooms',
    description: 'Comfortable private rooms with modern amenities for patient comfort.',
    image: '/images/facilities/private-room.jpg',
  },
  {
    title: 'ICU Facilities',
    description: 'State-of-the-art intensive care units with 24/7 monitoring.',
    image: '/images/facilities/icu.jpg',
  },
  {
    title: 'Operation Theaters',
    description: 'Advanced operation theaters equipped with the latest technology.',
    image: '/images/facilities/operation-theater.jpg',
  },
  {
    title: 'Pharmacy',
    description: '24-hour pharmacy service with a wide range of medications.',
    image: '/images/facilities/pharmacy.jpg',
  },
]

const faqs = [
  {
    question: 'What should I bring for my first visit?',
    answer: 'Please bring your government-issued ID, insurance card, list of current medications, and any relevant medical records or test results.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment through our online booking system, by calling our appointment desk, or by visiting the hospital in person.',
  },
  {
    question: 'What are the visiting hours?',
    answer: 'General visiting hours are from 10:00 AM to 8:00 PM daily. ICU and special care units may have different visiting hours.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance providers. Please contact our insurance desk to verify your coverage.',
  },
]

export default function PatientCare() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="heading-1 text-primary-950">
              Patient <span className="text-accent-600">Care</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are committed to providing exceptional care and support to our patients throughout their healthcare journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Appointment
              </button>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Resources */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-primary-950">
            Patient <span className="text-accent-600">Resources</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access important information and resources to help you navigate your healthcare journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {patientResources.map((resource) => (
            <Link
              key={resource.title}
              to={resource.link}
              className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 ring-1 ring-gray-200 transition duration-300 hover:bg-gray-50 hover:ring-primary-500"
            >
              <div>
                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-primary-950">
              Hospital <span className="text-accent-600">Facilities</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              State-of-the-art facilities designed for patient comfort and care.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{facility.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-primary-950">
            Frequently Asked <span className="text-accent-600">Questions</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our services and procedures.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-white p-8 ring-1 ring-gray-200">
              <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
} 