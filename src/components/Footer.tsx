import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Doctors', href: '/doctors' },
  { name: 'Our Services', href: '/services' },
  { name: 'Specialities', href: '/specialities' },
  { name: 'Patient Care', href: '/patient-care' },
  { name: 'Contact Us', href: '/contact' },
]

const departments = [
  { name: 'Cardiac Sciences', href: '/specialities/cardiac-care' },
  { name: 'Cancer Care', href: '/specialities/cancer-care' },
  { name: 'Neurosciences', href: '/specialities/neurosciences' },
  { name: 'Gastrosciences', href: '/specialities/gastrosciences' },
  { name: 'Orthopaedics', href: '/specialities/orthopaedics' },
  { name: 'Renal Sciences', href: '/specialities/renal-care' },
]

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: '#' },
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white/80">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <div className="text-2xl font-bold text-white">
                Health<span className="text-accent-400">Care</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed text-white/90">
              We are dedicated to providing world-class healthcare services with a
              commitment to excellence, compassion, and innovation. Our team of
              expert medical professionals ensures the highest standards of patient
              care.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-accent-600 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center text-sm hover:text-accent-400 transition-colors"
                  >
                    <ChevronRightIcon className="w-3 h-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.href}
                    className="inline-flex items-center text-sm hover:text-accent-400 transition-colors"
                  >
                    <ChevronRightIcon className="w-3 h-3 mr-2" />
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center text-sm hover:text-accent-400 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hospital.com"
                  className="inline-flex items-center text-sm hover:text-accent-400 transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-3" />
                  <span>info@hospital.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Healthcare Avenue,<br />
                  Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-accent-400" />
                <div className="text-sm">
                  <p className="text-white/90">Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-white/90">Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
