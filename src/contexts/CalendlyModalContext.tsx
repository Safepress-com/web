import { createContext, useContext, useState, type ReactNode } from 'react';

interface CalendlyModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CalendlyModalContext = createContext<CalendlyModalContextType | undefined>(undefined);

export function CalendlyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CalendlyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </CalendlyModalContext.Provider>
  );
}

export function useCalendlyModal() {
  const context = useContext(CalendlyModalContext);
  if (context === undefined) {
    throw new Error('useCalendlyModal must be used within a CalendlyModalProvider');
  }
  return context;
} 