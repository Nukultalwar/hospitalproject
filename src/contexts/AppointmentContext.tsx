import { createContext, useContext, useState, ReactNode } from 'react'

interface AppointmentContextType {
  isAppointmentOpen: boolean
  openAppointment: () => void
  closeAppointment: () => void
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined)

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)

  const openAppointment = () => setIsAppointmentOpen(true)
  const closeAppointment = () => setIsAppointmentOpen(false)

  return (
    <AppointmentContext.Provider
      value={{
        isAppointmentOpen,
        openAppointment,
        closeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointment() {
  const context = useContext(AppointmentContext)
  if (context === undefined) {
    throw new Error('useAppointment must be used within an AppointmentProvider')
  }
  return context
} 