import { useAppointment } from '../../contexts/AppointmentContext'
import { BeakerIcon, ClockIcon, TruckIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advanced Laboratory',
    description: 'State-of-the-art laboratory equipment and facilities for accurate test results.',
    icon: BeakerIcon,
  },
  {
    name: 'Quick Turnaround',
    description: 'Fast processing times with most routine test results available within 24 hours.',
    icon: ClockIcon,
  },
  {
    name: 'Home Collection',
    description: 'Convenient home sample collection service with trained phlebotomists.',
    icon: TruckIcon,
  },
  {
    name: 'Digital Reports',
    description: 'Access your test results online through our secure patient portal.',
    icon: ChartBarIcon,
  },
]

const testCategories = [
  {
    name: 'Routine Blood Tests',
    description: 'Common blood tests for general health assessment.',
    tests: [
      'Complete Blood Count (CBC)',
      'Basic Metabolic Panel',
      'Comprehensive Metabolic Panel',
      'Lipid Profile',
      'Thyroid Function Tests',
    ],
    turnaround: '24 hours',
    homeCollection: true,
  },
  {
    name: 'Diagnostic Tests',
    description: 'Specialized tests for specific conditions.',
    tests: [
      'Diabetes Tests (HbA1c)',
      'Liver Function Tests',
      'Kidney Function Tests',
      'Cardiac Markers',
      'Hormone Tests',
    ],
    turnaround: '24-48 hours',
    homeCollection: true,
  },
  {
    name: 'Specialized Tests',
    description: 'Advanced diagnostic and screening tests.',
    tests: [
      'Tumor Markers',
      'Allergy Testing',
      'Autoimmune Markers',
      'Genetic Testing',
      'Molecular Diagnostics',
    ],
    turnaround: '3-5 days',
    homeCollection: false,
  },
  {
    name: 'Wellness Packages',
    description: 'Comprehensive test packages for preventive care.',
    tests: [
      'Basic Health Screen',
      'Executive Health Check',
      'Women\'s Health Profile',
      'Men\'s Health Profile',
      'Senior Citizen Package',
    ],
    turnaround: '48 hours',
    homeCollection: true,
  },
]

export default function LabTests() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Laboratory <span className="text-primary-600">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced diagnostic testing with accurate results and quick turnaround times.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Lab Test
              </button>
              <button onClick={openAppointment} className="btn btn-outline">
                Home Collection
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
            Advanced Laboratory Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our state-of-the-art laboratory provides accurate and timely diagnostic testing services.
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

      {/* Test Categories Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Test Categories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available Tests
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a wide range of diagnostic tests and health screening packages.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {testCategories.map((category) => (
                <div key={category.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{category.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{category.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {category.tests.map((test) => (
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
                        <p className="text-sm font-medium text-gray-500">Turnaround Time</p>
                        <p className="mt-1 text-sm text-gray-900">{category.turnaround}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Home Collection</p>
                        <p className="mt-1 text-sm text-gray-900">{category.homeCollection ? 'Available' : 'Lab Visit Required'}</p>
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
            Simple steps to get your lab tests done:
          </p>
          <ol className="mt-8 space-y-4 text-left text-lg leading-8 text-gray-600">
            <li>1. Book your test online or call our helpline</li>
            <li>2. Choose between home collection or lab visit</li>
            <li>3. Get your samples collected by our trained professionals</li>
            <li>4. Receive digital reports within the specified turnaround time</li>
            <li>5. Optional consultation to understand your results</li>
          </ol>
        </div>
        <div className="mt-16 flex justify-center">
          <button onClick={openAppointment} className="btn btn-primary">
            Schedule Your Test
          </button>
        </div>
      </div>
    </div>
  )
} 