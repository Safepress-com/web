import { useState } from 'react';

export function useContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return {
    isOpen,
    openForm,
    closeForm
  };
}