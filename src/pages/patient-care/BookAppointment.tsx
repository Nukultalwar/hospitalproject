import { useState } from 'react';
import { CalendarIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';

const departments = [
  { id: 'cardiology', name: 'Cardiology' },
  { id: 'neurology', name: 'Neurology' },
  { id: 'orthopedics', name: 'Orthopedics' },
  { id: 'pediatrics', name: 'Pediatrics' },
  { id: 'oncology', name: 'Oncology' },
  { id: 'gastroenterology', name: 'Gastroenterology' },
];

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-600 py-24 sm:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Book an Appointment
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Schedule your visit with our expert doctors. We're here to provide
              you with the best medical care.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="py-24 sm:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="label">
                        Full Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="department" className="label">
                        Department
                      </label>
                      <div className="mt-2">
                        <select
                          name="department"
                          id="department"
                          required
                          value={formData.department}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Appointment Details
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className="label">
                        Preferred Date
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="label">
                        Preferred Time
                      </label>
                      <div className="mt-2">
                        <input
                          type="time"
                          name="time"
                          id="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="message" className="label">
                    Additional Information
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      placeholder="Please provide any additional information about your condition"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-primary-50 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <PhoneIcon className="h-6 w-6 text-primary-600 mr-2" />
                <span className="text-gray-900">Emergency: 1800-123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-primary-600 mr-2" />
                <span className="text-gray-900">24/7 Appointment Line</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 