import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useAppointment } from '../contexts/AppointmentContext'
import {
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  BeakerIcon,
  ShieldCheckIcon,
  TruckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  VideoCameraIcon,
  CalendarIcon,
  PhoneIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  accent: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  }
}

const featuredServices = [
  {
    id: 1,
    name: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response teams',
    availability: 'Available 24/7',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2800',
    features: ['Rapid Response', 'Advanced Life Support', 'Trauma Care', 'Critical Care'],
    icon: TruckIcon,
    color: 'from-red-500 to-red-700'
  },
  {
    id: 2,
    name: 'Cardiac Center',
    description: 'State-of-the-art cardiac care with expert cardiologists',
    availability: 'Appointments Available',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2800',
    features: ['Heart Surgery', 'Cardiac Rehab', 'ECG/Echo', 'Consultation'],
    icon: HeartIcon,
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 3,
    name: 'Maternity Care',
    description: 'Comprehensive maternity services with dedicated care teams',
    availability: 'Booking Now',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2800',
    features: ['Prenatal Care', 'Labor & Delivery', 'NICU', 'Postnatal Support'],
    icon: UserGroupIcon,
    color: 'from-purple-500 to-purple-700'
  }
]

const medicalServices = [
  {
    name: 'Emergency Care',
    description: '24/7 emergency medical services with rapid response',
    icon: TruckIcon,
    color: 'from-red-400 to-red-600',
  },
  {
    name: 'Expert Doctors',
    description: 'Highly qualified medical professionals across specialties',
    icon: UserGroupIcon,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Lab Services',
    description: 'Advanced diagnostic and laboratory testing facilities',
    icon: BeakerIcon,
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Heart Center',
    description: 'Comprehensive cardiac care and treatment',
    icon: HeartIcon,
    color: 'from-pink-400 to-pink-600',
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock medical assistance and care',
    icon: ClockIcon,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    name: 'Patient Safety',
    description: 'Highest standards of patient safety and care',
    icon: ShieldCheckIcon,
    color: 'from-amber-400 to-amber-600',
  },
]

const stats = [
  { id: 1, name: 'Years of Excellence', value: '25+' },
  { id: 2, name: 'Specialist Doctors', value: '150+' },
  { id: 3, name: 'Happy Patients', value: '50k+' },
  { id: 4, name: 'Success Rate', value: '99%' },
]

const specialities = [
  {
    name: 'Cardiology',
    description: 'Expert heart care with advanced cardiac treatments',
    icon: HeartIcon,
    href: '/specialities/cardiology',
  },
  {
    name: 'Neurology',
    description: 'Comprehensive brain and nervous system care',
    icon: BeakerIcon,
    href: '/specialities/neurology',
  },
  {
    name: 'Orthopedics',
    description: 'Advanced bone and joint treatments',
    icon: UserGroupIcon,
    href: '/specialities/orthopedics',
  },
  {
    name: 'Emergency Care',
    description: '24/7 emergency medical services',
    icon: ClockIcon,
    href: '/specialities/emergency',
  },
]

const features = [
  {
    name: 'Book Appointment',
    description: 'Schedule your visit with our specialists',
    icon: CalendarIcon,
    href: '/book-appointment',
  },
  {
    name: 'Emergency',
    description: '24/7 emergency care services',
    icon: PhoneIcon,
    href: '/emergency',
  },
]

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2800',
    title: 'World-Class Healthcare',
    subtitle: 'Advanced Medical Care with Compassion and Excellence',
    cta: 'Book an Appointment',
    secondaryCta: 'Learn More'
  },
  {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2800',
    title: 'Expert Medical Team',
    subtitle: 'Leading Healthcare Professionals at Your Service',
    cta: 'Find a Doctor',
    secondaryCta: 'Our Specialists'
  },
  {
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2800',
    title: 'Advanced Technology',
    subtitle: 'State-of-the-Art Medical Facilities for Better Care',
    cta: 'Our Services',
    secondaryCta: 'Virtual Tour'
  }
]

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2800',
    specialties: ['Interventional Cardiology', 'Heart Surgery'],
    availability: 'Mon - Fri'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2800',
    specialties: ['Brain Surgery', 'Spine Treatment'],
    availability: 'Tue - Sat'
  },
  {
    name: 'Dr. Emily Williams',
    role: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2800',
    specialties: ['Child Care', 'Vaccination'],
    availability: 'Mon - Thu'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2800',
    specialties: ['Joint Replacement', 'Sports Medicine'],
    availability: 'Wed - Sun'
  }
]

const testimonials = [
  {
    content: "The level of care and professionalism I received was exceptional. The doctors and staff went above and beyond to ensure my comfort and recovery.",
    author: "Sarah Mitchell",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2800"
  },
  {
    content: "State-of-the-art facilities combined with compassionate care. This hospital sets the standard for healthcare excellence.",
    author: "David Thompson",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2800"
  },
  {
    content: "The medical team's expertise and dedication to patient care is truly remarkable. I couldn't have asked for better treatment.",
    author: "Dr. Emily Chen",
    role: "Visiting Doctor",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2800"
  }
]

const latestNews = [
  {
    title: "Breakthrough in Cancer Treatment",
    category: "Research",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2800",
    excerpt: "New immunotherapy treatment shows promising results in clinical trials."
  },
  {
    title: "Advanced Robotic Surgery Center",
    category: "Technology",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2800",
    excerpt: "Hospital introduces cutting-edge robotic surgery system for precise procedures."
  },
  {
    title: "Mental Health Awareness Program",
    category: "Community",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2800",
    excerpt: "New initiative launched to support mental health in the community."
  }
]

const Home = () => {
  const { openAppointment } = useAppointment()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let interval: NodeJS.Timeout

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          const isEnd = currentIndex >= medicalServices.length - 1
          const nextIndex = isEnd ? 0 : currentIndex + 1
          
          slider.scrollTo({
            left: nextIndex * 320,
            behavior: 'smooth'
          })
          
          setCurrentIndex(nextIndex)
        }
      }, 3000)
    }

    startAutoScroll()

    const handleScroll = () => {
      if (slider) {
        const index = Math.round(slider.scrollLeft / 320)
        setCurrentIndex(index)
      }
    }

    slider.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(interval)
      slider?.removeEventListener('scroll', handleScroll)
    }
  }, [currentIndex, isPaused])

  const handleSlideChange = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return

    const isEnd = currentIndex >= medicalServices.length - 1
    const isStart = currentIndex <= 0

    let nextIndex = currentIndex
    if (direction === 'next' && !isEnd) {
      nextIndex = currentIndex + 1
    } else if (direction === 'prev' && !isStart) {
      nextIndex = currentIndex - 1
    } else if (direction === 'next' && isEnd) {
      nextIndex = 0
    } else if (direction === 'prev' && isStart) {
      nextIndex = medicalServices.length - 1
    }

    sliderRef.current.scrollTo({
      left: nextIndex * 320,
      behavior: 'smooth'
    })
    setCurrentIndex(nextIndex)
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
              transition: { duration: 0.8 },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-3000"
              style={{ backgroundImage: `url(${slide.image})` }}
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
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={openAppointment}
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {slide.cta}
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </button>
                    <Link
                      to="/about"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                    >
                      {slide.secondaryCta}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced Slide Navigation */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-16 h-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                currentSlide === index ? 'bg-primary-500 w-24' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Features Section */}
      <div className="bg-white py-12 -mt-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-accent-50 group-hover:bg-accent-100 transition-colors">
                      <feature.icon
                        className="h-8 w-8 text-accent-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-secondary-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-lg text-secondary-600">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={feature.href}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      {feature.name === 'Book Appointment' ? 'Book Now' : 'Call Now'}
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 py-16">
        <div className="container mx-auto px-6">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4 group hover:scale-105 transition-transform duration-300"
              >
                <dt className="text-base leading-7 text-zinc-900">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-accent-400 group-hover:text-accent-300 transition-colors sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Specialities Section */}
      <div className="py-12 bg-secondary-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-accent-600 font-semibold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl mb-4">
              Our Specialities
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl leading-8 text-secondary-600">
              Comprehensive healthcare services delivered by expert specialists
              using cutting-edge technology.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {specialities.map((speciality) => (
              <Link
                key={speciality.name}
                to={speciality.href}
                className="group flex flex-col bg-white rounded-2xl p-8 shadow-lg ring-1 ring-secondary-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center gap-x-4">
                  <div className="p-3 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors">
                    <speciality.icon
                      className="h-8 w-8 text-primary-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-secondary-900">
                    {speciality.name}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-secondary-600">
                  {speciality.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700">
                  Learn more
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Healthcare Excellence</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Our Medical Services
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience world-class healthcare with our comprehensive medical services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-600">
                        {service.availability}
                      </span>
                      <div className={`p-3 rounded-full bg-accent-600 shadow-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="text-secondary-600 mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={openAppointment}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent-600 text-white font-semibold hover:bg-accent-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Book Appointment
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services Slider */}
      <section className="py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Why Us</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience excellence in healthcare with our world-class facilities and expert medical team
            </p>
          </div>
          
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-hidden scroll-smooth gap-6 pb-12"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {medicalServices.map((service) => (
                <div
                  key={service.name}
                  className="flex-none w-[380px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
                    <div className="p-4 rounded-2xl bg-accent-600 transform group-hover:scale-110 transition-transform duration-300 w-fit">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                      >
                        Learn more
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => handleSlideChange('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-accent-600 hover:text-accent-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => handleSlideChange('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-accent-600 hover:text-accent-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex >= medicalServices.length - 1}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Slider Progress */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex justify-center gap-3">
                {medicalServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (sliderRef.current) {
                        sliderRef.current.scrollTo({
                          left: index * 380,
                          behavior: 'smooth'
                        })
                        setCurrentIndex(index)
                      }
                    }}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-accent-600 w-20' : 'bg-secondary-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Video */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2800" 
                alt="Hospital Overview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <VideoCameraIcon className="h-12 w-12 text-white" />
              </button>
            </div>
            <div>
              <span className="text-accent-600 font-semibold mb-4 block">About Us</span>
              <h2 className="text-4xl font-bold mb-6 text-secondary-900">
                Leading Healthcare Provider Since 1995
              </h2>
              <div className="w-24 h-1 bg-accent-500 rounded-full mb-6"></div>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                With over 25 years of excellence in healthcare, we combine cutting-edge technology with compassionate care. Our team of expert medical professionals is dedicated to providing the highest quality treatment and personalized attention to every patient.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-50">
                    <UserGroupIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Expert Doctors</h3>
                    <p className="text-secondary-600">Highly qualified specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-50">
                    <BeakerIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Modern Technology</h3>
                    <p className="text-secondary-600">Advanced medical equipment</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Medical Experts</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Meet Our Specialists
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our team of highly qualified medical professionals is here to provide you with the best care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="space-y-2">
                      <div className="font-medium text-white/90">Specialties:</div>
                      {doctor.specialties.map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                          <span className="text-sm">{specialty}</span>
                        </div>
                      ))}
                      <div className="pt-2 font-medium text-white/90">
                        Available: {doctor.availability}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-secondary-900">{doctor.name}</h3>
                  <p className="text-accent-600 font-medium">{doctor.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300"
            >
              View All Doctors
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              What Our Patients Say
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="relative">
            <div className="max-w-3xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                >
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                        </svg>
                      </div>
                    </div>
                    <blockquote className="text-xl text-secondary-600 mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                    <div className="text-accent-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-accent-600 w-8' : 'bg-secondary-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Latest Updates</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Latest News & Articles
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <div key={news.title} className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-accent-600 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{news.excerpt}</p>
                  <Link
                    to="/news"
                    className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300"
            >
              View All News
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
