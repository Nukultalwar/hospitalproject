import { useAppointment } from '../../contexts/AppointmentContext'
import { BrainIcon, BeakerIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Advanced Neuro Diagnostics',
    description: 'State-of-the-art neurological imaging and diagnostic services including MRI, CT, EEG, and EMG.',
    icon: BeakerIcon,
  },
  {
    name: 'Expert Neurologists',
    description: 'Team of specialized neurologists and neurosurgeons with extensive experience in treating complex conditions.',
    icon: UserGroupIcon,
  },
  {
    name: 'Comprehensive Care',
    description: 'Integrated approach to neurological care, from diagnosis to treatment and rehabilitation.',
    icon: BrainIcon,
  },
  {
    name: 'Advanced Treatments',
    description: 'Access to the latest neurological treatments and minimally invasive surgical techniques.',
    icon: SparklesIcon,
  },
]

const treatments = [
  {
    name: 'Brain Surgery',
    description: 'Advanced surgical procedures for brain tumors, aneurysms, and other neurological conditions.',
    duration: 'Varies by procedure',
    recovery: '5-10 days hospital stay',
  },
  {
    name: 'Spine Surgery',
    description: 'Minimally invasive and traditional surgical procedures for spine conditions and injuries.',
    duration: '2-6 hours',
    recovery: '3-7 days hospital stay',
  },
  {
    name: 'Stroke Treatment',
    description: 'Rapid response stroke care with advanced interventional treatments and rehabilitation.',
    duration: 'Immediate response',
    recovery: 'Varies by severity',
  },
  {
    name: 'Neuro Rehabilitation',
    description: 'Comprehensive rehabilitation programs for recovery from neurological conditions and injuries.',
    duration: 'Customized programs',
    recovery: 'Ongoing support',
  },
]

const team = [
  {
    name: 'Dr. David Thompson',
    role: 'Chief of Neurology',
    image: '/images/doctors/david-thompson.jpg',
    specialization: 'Neurological Surgery',
  },
  {
    name: 'Dr. Sarah Lee',
    role: 'Neurologist',
    image: '/images/doctors/sarah-lee.jpg',
    specialization: 'Movement Disorders',
  },
  {
    name: 'Dr. Michael Brown',
    role: 'Spine Surgeon',
    image: '/images/doctors/michael-brown.jpg',
    specialization: 'Spine Surgery',
  },
]

export default function Neurosciences() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Neurosciences <span className="text-primary-600">Center</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced neurological care with cutting-edge technology and expert specialists. Dedicated to treating complex neurological conditions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button onClick={openAppointment} className="btn btn-primary">
                Book Consultation
              </button>
              <button onClick={openAppointment} className="btn btn-outline">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Comprehensive Care</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Neurological Center
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our neuroscience center provides comprehensive care for all neurological conditions with state-of-the-art technology.
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

      {/* Treatments Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Treatments</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Neurological Treatment Options
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a wide range of treatments for neurological conditions, from minimally invasive procedures to complex surgeries.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {treatments.map((treatment) => (
                <div key={treatment.name} className="flex flex-col bg-white rounded-2xl p-8 ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{treatment.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{treatment.description}</p>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Duration</p>
                        <p className="mt-1 text-sm text-gray-900">{treatment.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Recovery</p>
                        <p className="mt-1 text-sm text-gray-900">{treatment.recovery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Expert Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Neurology Specialists
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of experienced neurologists and neurosurgeons are dedicated to providing exceptional care.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={member.image} alt={member.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
              <p className="text-base leading-7 text-primary-600">{member.role}</p>
              <p className="text-sm leading-6 text-gray-600">{member.specialization}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button onClick={openAppointment} className="btn btn-primary">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
} 