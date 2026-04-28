import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AppointmentForm from './components/AppointmentForm'
import { AppointmentProvider, useAppointment } from './contexts/AppointmentContext'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'

// Main pages
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'

// Speciality pages
import CardiacCare from './pages/specialities/CardiacCare'
import CancerCare from './pages/specialities/CancerCare'
import HealthCheckup from './pages/specialities/HealthCheckup'
import EmergencyServices from './pages/specialities/EmergencyServices'
import InternationalPatients from './pages/specialities/InternationalPatients'
import Telemedicine from './pages/specialities/Telemedicine'
import LabTests from './pages/specialities/LabTests'
import Cardiology from './pages/specialities/Cardiology'
import Neurology from './pages/specialities/Neurology'
import Orthopedics from './pages/specialities/Orthopedics'
import Emergency from './pages/specialities/Emergency'
import Gastroenterology from './pages/specialities/Gastroenterology'
import Pediatrics from './pages/specialities/Pediatrics'

// Patient Care pages
import BookAppointment from './pages/patient-care/BookAppointment'
import HealthPackages from './pages/patient-care/HealthPackages'
import PatientStories from './pages/patient-care/PatientStories'
import Insurance from './pages/patient-care/Insurance'

import NotFound from './pages/NotFound'

const AppContent = () => {
  const { isAppointmentOpen, closeAppointment, openAppointment } = useAppointment()

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenAppointmentPopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        openAppointment()
        localStorage.setItem('hasSeenAppointmentPopup', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [openAppointment])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Main Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        
        {/* Speciality Routes */}
        <Route path="/specialities/cardiac-care" element={<CardiacCare />} />
        <Route path="/specialities/cancer-care" element={<CancerCare />} />
        <Route path="/specialities/health-checkup" element={<HealthCheckup />} />
        <Route path="/specialities/emergency-services" element={<EmergencyServices />} />
        <Route path="/specialities/international-patients" element={<InternationalPatients />} />
        <Route path="/specialities/telemedicine" element={<Telemedicine />} />
        <Route path="/specialities/lab-tests" element={<LabTests />} />
        <Route path="/specialities/cardiology" element={<Cardiology />} />
        <Route path="/specialities/neurology" element={<Neurology />} />
        <Route path="/specialities/orthopedics" element={<Orthopedics />} />
        <Route path="/specialities/emergency" element={<Emergency />} />
        <Route path="/specialities/gastroenterology" element={<Gastroenterology />} />
        <Route path="/specialities/pediatrics" element={<Pediatrics />} />
        
        {/* Patient Care Routes */}
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/patient-care/health-packages" element={<HealthPackages />} />
        <Route path="/patient-care/stories" element={<PatientStories />} />
        <Route path="/patient-care/insurance" element={<Insurance />} />
        
        {/* Contact Routes */}
        <Route path="/contact/general" element={<Contact />} />
        <Route path="/contact/appointments" element={<Contact />} />
        <Route path="/contact/insurance" element={<Contact />} />
        <Route path="/contact/careers" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <AppointmentForm isOpen={isAppointmentOpen} onClose={closeAppointment} />
    </>
  )
}

function App() {
  // Enable browser's native scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  return (
    <Router>
      <AppointmentProvider>
        <MainLayout>
          <AppContent />
        </MainLayout>
      </AppointmentProvider>
    </Router>
  )
}

export default App
