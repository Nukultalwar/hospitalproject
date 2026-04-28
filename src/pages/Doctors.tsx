import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { useAppointment } from '../contexts/AppointmentContext'

const departments = [
  'All Departments',
  'Cardiac Sciences',
  'Cancer Care',
  'Neurosciences',
  'Gastrosciences',
  'Orthopaedics',
  'Renal Sciences',
  'Internal Medicine',
  'Ophthalmology',
]

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief of Cardiology',
    department: 'Cardiac Sciences',
    education: 'MD, FACC',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800',
    specialization: 'Interventional Cardiology',
    experience: '15+ years',
    languages: ['English', 'Spanish'],
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Senior Oncologist',
    department: 'Cancer Care',
    education: 'MD, PhD',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800',
    specialization: 'Medical Oncology',
    experience: '12+ years',
    languages: ['English', 'Mandarin'],
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Neurology',
    department: 'Neurosciences',
    education: 'MD, FAAN',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800',
    specialization: 'Neurological Surgery',
    experience: '18+ years',
    languages: ['English', 'Portuguese'],
  },
  {
    name: 'Dr. James Wilson',
    role: 'Senior Gastroenterologist',
    department: 'Gastrosciences',
    education: 'MD, FACG',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800',
    specialization: 'Hepatology',
    experience: '10+ years',
    languages: ['English'],
  },
  {
    name: 'Dr. Lisa Thompson',
    role: 'Chief Orthopedic Surgeon',
    department: 'Orthopaedics',
    education: 'MD, FAAOS',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800',
    specialization: 'Joint Replacement',
    experience: '14+ years',
    languages: ['English', 'French'],
  },
  {
    name: 'Dr. David Kim',
    role: 'Senior Nephrologist',
    department: 'Renal Sciences',
    education: 'MD, FASN',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=800',
    specialization: 'Kidney Transplant',
    experience: '16+ years',
    languages: ['English', 'Korean'],
  },
  {
    name: 'Dr. Rachel Patel',
    role: 'Internal Medicine Specialist',
    department: 'Internal Medicine',
    education: 'MD, FACP',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800',
    specialization: 'Preventive Medicine',
    experience: '8+ years',
    languages: ['English', 'Hindi', 'Gujarati'],
  },
  {
    name: 'Dr. Mark Anderson',
    role: 'Chief Ophthalmologist',
    department: 'Ophthalmology',
    education: 'MD, FAAO',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800',
    specialization: 'Retinal Surgery',
    experience: '20+ years',
    languages: ['English'],
  },
]

export default function Doctors() {
  const { openAppointment } = useAppointment()
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDepartment =
      selectedDepartment === 'All Departments' || doctor.department === selectedDepartment
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.department.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDepartment && matchesSearch
  })

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
                Our Expert Medical Team
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Meet our team of highly qualified specialists dedicated to providing exceptional healthcare
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-secondary-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedDepartment === department
                      ? 'bg-accent-600 text-white'
                      : 'bg-white text-secondary-600 hover:bg-accent-50'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-b from-white to-secondary-50/50 h-[540px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-secondary-100"
              >
                <div className="h-[280px] relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button
                      onClick={openAppointment}
                      className="w-full py-3 px-6 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
                <div className="p-6 h-[260px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-secondary-900 group-hover:text-accent-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-accent-600 font-medium">{doctor.role}</p>
                    </div>
                    <div className="bg-primary-50 p-2.5 rounded-xl group-hover:bg-primary-100 transition-colors">
                      <AcademicCapIcon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
                      <BuildingOfficeIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{doctor.department}</span>
                    </div>
                    <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
                      <BriefcaseIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
                      <AcademicCapIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{doctor.education}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-secondary-100">
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language) => (
                        <span
                          key={language}
                          className="px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 rounded-full group-hover:bg-accent-50 group-hover:text-accent-700 transition-colors"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 