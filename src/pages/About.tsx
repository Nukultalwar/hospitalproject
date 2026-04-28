import { useState } from 'react'
import {
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  BeakerIcon,
  LightBulbIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAppointment } from '../contexts/AppointmentContext'

const values = [
  {
    icon: HeartIcon,
    title: 'Patient-Centered Care',
    description: 'Putting patients first in everything we do, ensuring personalized and compassionate care.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'Embracing cutting-edge medical technologies and techniques for better healthcare outcomes.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Excellence',
    description: 'Maintaining the highest standards of medical care and professional service.'
  },
  {
    icon: UserGroupIcon,
    title: 'Teamwork',
    description: 'Collaborating across disciplines to provide comprehensive care solutions.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Accessibility',
    description: 'Making quality healthcare accessible to all members of our community.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Ethics',
    description: 'Upholding the highest ethical standards in medical practice and patient care.'
  }
]

const milestones = [
  {
    year: '1995',
    title: 'Foundation',
    description: 'Established as a small community hospital with 50 beds'
  },
  {
    year: '2000',
    title: 'Expansion',
    description: 'Added new wings for specialized care and research'
  },
  {
    year: '2010',
    title: 'Technology',
    description: 'Implemented state-of-the-art medical equipment and systems'
  },
  {
    year: '2015',
    title: 'Recognition',
    description: 'Received national accreditation for excellence in healthcare'
  },
  {
    year: '2020',
    title: 'Innovation',
    description: 'Launched telemedicine services and digital health solutions'
  },
  {
    year: '2024',
    title: 'Growth',
    description: 'Expanded to multiple locations with specialized centers'
  }
]

const achievements = [
  {
    icon: TrophyIcon,
    title: 'Excellence in Healthcare',
    description: 'Ranked among top 10 hospitals nationally'
  },
  {
    icon: AcademicCapIcon,
    title: 'Research Leadership',
    description: 'Over 500 research papers published'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Modern Facilities',
    description: 'State-of-the-art medical centers'
  },
  {
    icon: UserGroupIcon,
    title: 'Expert Team',
    description: '150+ specialized doctors and staff'
  }
]

const About = () => {
  const { openAppointment } = useAppointment()
  const [currentMilestone, setCurrentMilestone] = useState(0)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2800)' }}
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
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Leading the way in medical excellence and compassionate patient care since 1995
              </p>
              <button
                onClick={openAppointment}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-accent-600 text-white hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2800" 
                alt="Hospital Overview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <VideoCameraIcon className="h-12 w-12 text-white" />
              </button>
            </div>
            <div>
              <span className="text-accent-600 font-semibold mb-4 block">Our Story</span>
              <h2 className="text-4xl font-bold mb-6 text-secondary-900">
                Leading Healthcare Provider Since 1995
              </h2>
              <div className="w-24 h-1 bg-accent-500 rounded-full mb-6"></div>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                For over 25 years, we have been at the forefront of medical excellence, combining cutting-edge technology with compassionate care. Our journey began as a small community hospital and has grown into a leading healthcare institution, serving thousands of patients annually.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-50">
                    <BeakerIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Research</h3>
                    <p className="text-secondary-600">Leading medical research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-50">
                    <UserGroupIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Expert Team</h3>
                    <p className="text-secondary-600">Skilled professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Our Values</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from patient care to community service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-3 rounded-xl bg-primary-50 w-fit">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mt-6 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Our Journey</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Key Milestones
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-100"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-accent-600 text-white rounded-full text-sm font-semibold">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mt-4 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary-600">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold mb-4 block">Our Achievements</span>
            <h2 className="text-4xl font-bold mb-4 text-secondary-900">
              Recognition & Excellence
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                  <achievement.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-secondary-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience World-Class Healthcare
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied patients who trust us with their health
            </p>
            <button
              onClick={openAppointment}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-primary-600 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book an Appointment
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 