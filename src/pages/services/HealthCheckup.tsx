import { useAppointment } from '../../contexts/AppointmentContext'
import { BeakerIcon, HeartIcon, UserGroupIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Screening',
    description: 'Complete health assessment including physical examination and advanced diagnostics.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Advanced Diagnostics',
    description: 'State-of-the-art diagnostic tests and imaging services.',
    icon: BeakerIcon,
  },
  {
    name: 'Expert Medical Team',
    description: 'Experienced healthcare professionals for thorough evaluation.',
    icon: UserGroupIcon,
  },
  {
    name: 'Preventive Care',
    description: 'Early detection and prevention of potential health issues.',
    icon: HeartIcon,
  },
]

const packages = [
  {
    name: 'Basic Health Checkup',
    description: 'Essential health screening package for routine checkup.',
    tests: [
      'Complete Blood Count',
      'Blood Pressure Check',
      'BMI Assessment',
      'Basic Physical Examination',
      'Urine Analysis',
    ],
    duration: '1-2 hours',
    price: '$199',
  },
  {
    name: 'Comprehensive Health Screening',
    description: 'Detailed health assessment with advanced diagnostics.',
    tests: [
      'All Basic Package Tests',
      'Lipid Profile',
      'Blood Sugar Test',
      'Thyroid Function Test',
      'ECG',
      'Chest X-ray',
    ],
    duration: '2-3 hours',
    price: '$399',
  },
  {
    name: 'Executive Health Package',
    description: 'Complete health evaluation with specialized screenings.',
    tests: [
      'All Comprehensive Package Tests',
      'Cancer Markers',
      'Vitamin Profile',
      'Stress Test',
      'Ultrasound Screening',
      'Diet Consultation',
    ],
    duration: '4-5 hours',
    price: '$799',
  },
  {
    name: 'Cardiac Health Screening',
    description: 'Specialized cardiac health assessment package.',
    tests: [
      'ECG',
      'Echo',
      'Stress Test',
      'Lipid Profile',
      'Cardiac Consultation',
      'Diet Planning',
    ],
    duration: '3-4 hours',
    price: '$599',
  },
]

export default function HealthCheckup() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Health <span className="text-primary-600">Checkup</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive health screening packages for preventive care and early detection.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Health Checkup
              </button>
              <button onClick={openAppointment} className="btn btn-outline">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Approach</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Health Screening
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our health checkup packages are designed to provide thorough health assessment and early detection of potential issues.
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

      {/* Packages Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Packages</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Health Screening Packages
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from our range of comprehensive health screening packages tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {packages.map((pkg) => (
                <div key={pkg.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{pkg.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{pkg.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {pkg.tests.map((test) => (
                      <li key={test} className="flex items-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {test}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Duration</p>
                        <p className="mt-1 text-sm text-gray-900">{pkg.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Price</p>
                        <p className="mt-1 text-sm text-gray-900">{pkg.price}</p>
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

      {/* Process Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple steps to complete your health checkup:
          </p>
          <ol className="mt-8 space-y-4 text-left text-lg leading-8 text-gray-600">
            <li>1. Choose your preferred health screening package</li>
            <li>2. Book an appointment at your convenient time</li>
            <li>3. Complete the screening tests as scheduled</li>
            <li>4. Receive detailed reports and medical consultation</li>
          </ol>
        </div>
        <div className="mt-16 flex justify-center">
          <button onClick={openAppointment} className="btn btn-primary">
            Schedule Your Checkup
          </button>
        </div>
      </div>
    </div>
  )
} 