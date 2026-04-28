import { Fragment, useState } from 'react'
import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import {
  XMarkIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon,
  HeartIcon,
  BeakerIcon,
  UserGroupIcon,
  BoltIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { 
  BrainIcon as Brain, 
  BoneIcon as Bone 
} from '@heroicons/react/24/solid'

const appointmentTypes = [
  { 
    id: 'consultation', 
    name: 'Consultation',
    description: 'First visit with our specialist'
  },
  { 
    id: 'follow-up', 
    name: 'Follow-up',
    description: 'Review your progress'
  },
  { 
    id: 'second-opinion', 
    name: 'Second Opinion',
    description: 'Get another expert view'
  },
  { 
    id: 'health-checkup', 
    name: 'Health Checkup',
    description: 'Comprehensive health screening'
  },
]

const departments = [
  { id: 'cardiology', name: 'Cardiology', icon: HeartIcon },
  { id: 'neurology', name: 'Neurology', icon: BoltIcon },
  { id: 'oncology', name: 'Oncology', icon: BeakerIcon },
  { id: 'orthopedics', name: 'Orthopedics', icon: AcademicCapIcon },
  { id: 'gastroenterology', name: 'Gastroenterology', icon: BeakerIcon },
  { id: 'general-medicine', name: 'General Medicine', icon: UserGroupIcon },
]

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
]

interface AppointmentFormProps {
  isOpen: boolean
  onClose: () => void
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AppointmentForm({ isOpen, onClose }: AppointmentFormProps) {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState(appointmentTypes[0])
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0])
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle appointment submission
    console.log({
      type: selectedType,
      department: selectedDepartment,
      timeSlot: selectedTimeSlot,
      ...formData,
    })
    onClose()
    setStep(1) // Reset step for next time
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-xl bg-white shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl overflow-hidden">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block z-10">
                  <button
                    type="button"
                    className="rounded-lg bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[rgb(225,29,72)] focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Header with Progress Steps */}
                <div className="bg-gradient-to-r from-[rgb(225,29,72)] to-[rgb(225,29,72)]/80 px-4 py-6 sm:px-6">
                  <Dialog.Title className="text-xl font-semibold text-white mb-6">
                    Book an Appointment
                  </Dialog.Title>
                  <div className="max-w-md mx-auto relative">
                    {/* Connecting lines */}
                    <div className="absolute top-5 left-[20%] right-[20%] h-[2px] bg-white/20" />
                    
                    <div className="grid grid-cols-3">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="flex flex-col items-center relative">
                          <div
                            className={classNames(
                              'h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-200 bg-white z-10',
                              step >= num
                                ? 'text-[rgb(225,29,72)] border-white'
                                : 'text-white/60 border-white/40 bg-transparent'
                            )}
                          >
                            {step > num ? (
                              <CheckCircleIcon className="h-6 w-6" />
                            ) : (
                              num
                            )}
                          </div>
                          <span className="mt-2 text-sm text-white/80">
                            {num === 1 ? 'Type' : num === 2 ? 'Details' : 'Confirm'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 sm:p-6">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {step === 1 && (
                      <motion.div
                        className="space-y-8"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeIn}
                      >
                        <div>
                          <label className="text-lg font-semibold text-gray-900 mb-4 block">
                            Select Appointment Type
                          </label>
                          <RadioGroup value={selectedType} onChange={setSelectedType} className="mt-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              {appointmentTypes.map((type) => (
                                <RadioGroup.Option
                                  key={type.id}
                                  value={type}
                                  className={({ active, checked }) =>
                                    classNames(
                                      'relative flex cursor-pointer rounded-xl px-5 py-4 shadow-md transition-all duration-200',
                                      active ? 'ring-2 ring-[rgb(225,29,72)] ring-offset-2' : '',
                                      checked
                                        ? 'bg-gradient-to-r from-[rgb(225,29,72)] to-[rgb(225,29,72)]/90 text-white'
                                        : 'bg-white hover:bg-gray-50'
                                    )
                                  }
                                >
                                  {({ checked }) => (
                                    <div className="flex w-full items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="text-sm">
                                          <RadioGroup.Label
                                            as="p"
                                            className={classNames(
                                              'font-semibold mb-1',
                                              checked ? 'text-white' : 'text-gray-900'
                                            )}
                                          >
                                            {type.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className={classNames(
                                              'inline',
                                              checked ? 'text-white/80' : 'text-gray-500'
                                            )}
                                          >
                                            {type.description}
                                          </RadioGroup.Description>
                                        </div>
                                      </div>
                                      {checked && (
                                        <CheckCircleIcon className="h-5 w-5 text-white" />
                                      )}
                                    </div>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <label className="text-lg font-semibold text-gray-900 mb-4 block">
                            Select Department
                          </label>
                          <RadioGroup value={selectedDepartment} onChange={setSelectedDepartment} className="mt-4">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                              {departments.map((department) => (
                                <RadioGroup.Option
                                  key={department.id}
                                  value={department}
                                  className={({ active, checked }) =>
                                    classNames(
                                      'relative flex cursor-pointer rounded-xl px-5 py-4 shadow-md transition-all duration-200',
                                      active ? 'ring-2 ring-[rgb(225,29,72)] ring-offset-2' : '',
                                      checked
                                        ? 'bg-gradient-to-r from-[rgb(225,29,72)] to-[rgb(225,29,72)]/90 text-white'
                                        : 'bg-white hover:bg-gray-50'
                                    )
                                  }
                                >
                                  {({ checked }) => (
                                    <div className="flex w-full flex-col items-center justify-center">
                                      <department.icon
                                        className={classNames(
                                          'h-8 w-8 mb-3 transition-colors duration-200',
                                          checked ? 'text-white' : 'text-[rgb(225,29,72)]'
                                        )}
                                      />
                                      <RadioGroup.Label
                                        as="p"
                                        className={classNames(
                                          'font-medium text-sm text-center',
                                          checked ? 'text-white' : 'text-gray-900'
                                        )}
                                      >
                                        {department.name}
                                      </RadioGroup.Label>
                                    </div>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        className="space-y-8"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeIn}
                      >
                        <div className="bg-white rounded-xl shadow-lg p-6">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div className="col-span-2">
                              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                Full Name
                              </label>
                              <div className="mt-2 relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <UserIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  required
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                  placeholder="John Doe"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email
                              </label>
                              <div className="mt-2 relative">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  required
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="block w-full rounded-lg border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                  placeholder="john@example.com"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                Phone Number
                              </label>
                              <div className="mt-2 relative">
                                <input
                                  type="tel"
                                  name="phone"
                                  id="phone"
                                  required
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="block w-full rounded-lg border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="date" className="block text-sm font-medium text-gray-900">
                                Preferred Date
                              </label>
                              <div className="mt-2 relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  required
                                  value={formData.date}
                                  onChange={handleInputChange}
                                  min={new Date().toISOString().split('T')[0]}
                                  className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-900">
                                Preferred Time
                              </label>
                              <div className="mt-2 relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <ClockIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                  value={selectedTimeSlot}
                                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                                  className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                >
                                  {timeSlots.map((slot) => (
                                    <option key={slot} value={slot}>
                                      {slot}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="col-span-2">
                              <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                                Brief Description of Your Concern
                              </label>
                              <div className="mt-2">
                                <textarea
                                  name="description"
                                  id="description"
                                  rows={3}
                                  value={formData.description}
                                  onChange={handleInputChange}
                                  className="block w-full rounded-lg border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[rgb(225,29,72)] sm:text-sm"
                                  placeholder="Please describe your symptoms or reason for visit"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        className="space-y-6"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeIn}
                      >
                        <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-lg p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                            <CheckCircleIcon className="h-6 w-6 text-[rgb(225,29,72)] mr-2" />
                            Appointment Summary
                          </h4>
                          <dl className="space-y-6">
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                              <dt className="w-1/3 flex items-center text-sm text-gray-600">
                                <CalendarIcon className="h-5 w-5 mr-2 text-[rgb(225,29,72)]" />
                                Type:
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                {selectedType.name}
                              </dd>
                            </div>
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                              <dt className="w-1/3 flex items-center text-sm text-gray-600">
                                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-[rgb(225,29,72)]" />
                                Department:
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                {selectedDepartment.name}
                              </dd>
                            </div>
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                              <dt className="w-1/3 flex items-center text-sm text-gray-600">
                                <UserIcon className="h-5 w-5 mr-2 text-[rgb(225,29,72)]" />
                                Name:
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                {formData.name}
                              </dd>
                            </div>
                            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                              <dt className="w-1/3 flex items-center text-sm text-gray-600">
                                <CalendarIcon className="h-5 w-5 mr-2 text-[rgb(225,29,72)]" />
                                Date & Time:
                              </dt>
                              <dd className="text-sm font-medium text-gray-900">
                                {formData.date} at {selectedTimeSlot}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </motion.div>
                    )}

                    <div className="mt-8 flex flex-col space-y-4">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="self-start inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors duration-200"
                        >
                          Previous
                        </button>
                      )}
                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="mx-auto w-full max-w-sm inline-flex items-center justify-center rounded-lg bg-[rgb(225,29,72)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(225,29,72)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(225,29,72)] transition-colors duration-200"
                        >
                          Next
                          <ChevronRightIcon className="ml-2 h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="mx-auto w-full max-w-sm inline-flex items-center justify-center rounded-lg bg-[rgb(225,29,72)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(225,29,72)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(225,29,72)] transition-colors duration-200"
                        >
                          Confirm Appointment
                          <CheckCircleIcon className="ml-2 h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 