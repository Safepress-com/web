import { useCalendlyModal as useCalendlyModalContext } from '../contexts/CalendlyModalContext';

export function useCalendlyModal() {
  return useCalendlyModalContext();
}