import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HeartIcon,
  BeakerIcon,
  BrainIcon,
  StomachIcon,
  BoneIcon,
  KidneyIcon,
  UserGroupIcon,
  EyeIcon,
  EarIcon,
  BabyIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../contexts/AppointmentContext'

const specialities = [
  {
    name: 'Cardiac Sciences',
    description: 'Comprehensive heart care with advanced diagnostics and treatments.',
    icon: HeartIcon,
    href: '/specialities/cardiac-care',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2800',
  },
  {
    name: 'Cancer Care',
    description: 'Integrated oncology services with cutting-edge treatment protocols.',
    icon: BeakerIcon,
    href: '/specialities/cancer-care',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2800',
  },
  {
    name: 'Neurosciences',
    description: 'Expert care for neurological conditions and disorders.',
    icon: BrainIcon,
    href: '/specialities/neurosciences',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2800',
  },
  {
    name: 'Gastrosciences',
    description: 'Advanced treatment for digestive and liver disorders.',
    icon: StomachIcon,
    href: '/specialities/gastrosciences',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2800',
  },
  {
    name: 'Orthopaedics',
    description: 'Comprehensive care for bone, joint, and muscle conditions.',
    icon: BoneIcon,
    href: '/specialities/orthopaedics',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2800',
  },
  {
    name: 'Renal Sciences',
    description: 'Specialized care for kidney diseases and disorders.',
    icon: KidneyIcon,
    href: '/specialities/renal-care',
    image: 'https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?q=80&w=2800',
  },
  {
    name: 'Internal Medicine',
    description: 'Comprehensive care for adult diseases and conditions.',
    icon: UserGroupIcon,
    href: '/specialities/internal-medicine',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2800',
  },
  {
    name: 'Ophthalmology',
    description: 'Advanced eye care and vision correction services.',
    icon: EyeIcon,
    href: '/specialities/ophthalmology',
    image: 'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=2800',
  },
  {
    name: 'ENT',
    description: 'Expert care for ear, nose, and throat conditions.',
    icon: EarIcon,
    href: '/specialities/ent',
    image: 'https://images.unsplash.com/photo-1589279003513-467d320f47eb?q=80&w=2800',
  },
  {
    name: 'Pediatrics',
    description: 'Specialized healthcare for infants, children, and adolescents.',
    icon: BabyIcon,
    href: '/specialities/pediatrics',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2800',
  },
]

export default function Specialities() {
  const { openAppointment } = useAppointment()

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2800)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Our Medical Specialities
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Comprehensive healthcare services across multiple specialties, combining expertise with advanced technology
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specialities Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((speciality) => (
              <motion.div
                key={speciality.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src={speciality.image}
                    alt={speciality.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <speciality.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{speciality.name}</h3>
                  </div>
                  <p className="text-white/90 mb-6">{speciality.description}</p>
                  <Link
                    to={speciality.href}
                    className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 