import type { ContactFormData } from '../services/api';

export interface LocalFormData {
  name: string;
  company: string;
  email: string;
  telegram: string;
  helpType: string;
  otherHelp: string;
  message: string;
}

export function mapFormDataToApi(localData: LocalFormData): ContactFormData {
  // Determine the howCanWeHelp value
  let howCanWeHelp = '';
  
  if (localData.helpType === 'other' && localData.otherHelp.trim()) {
    howCanWeHelp = localData.otherHelp.trim();
  } else {
    // Map the help type to a more readable format
    const helpTypeMap: Record<string, string> = {
      'mvp-product': 'Build a new product (MVP / full system)',
      'scale-existing': 'Scale or improve an existing product',
      'ai-development': 'AI development or integration',
      'blockchain-web3': 'Blockchain / Web3 development',
      'game-development': 'Game development',
      'security-audit': 'Smart contract audit / security review',
      'architecture-consulting': 'Architecture & infrastructure consulting',
    };
    
    howCanWeHelp = helpTypeMap[localData.helpType] || localData.helpType;
  }

  const apiData: ContactFormData = {
    fullName: localData.name.trim(),
    company: localData.company.trim(),
    email: localData.email.trim(),
    telegram: localData.telegram.trim() || '', // Make sure telegram is always a string
    howCanWeHelp,
  };

  // Only include message if it's not empty
  if (localData.message.trim()) {
    apiData.message = localData.message.trim();
  }

  return apiData;
}

export function validateFieldLengths(data: ContactFormData): string[] {
  const errors: string[] = [];

  if (data.fullName.length > 100) {
    errors.push('Full name must be 100 characters or less');
  }

  if (data.company.length > 100) {
    errors.push('Company name must be 100 characters or less');
  }

  if (data.telegram.length > 50) {
    errors.push('Telegram handle must be 50 characters or less');
  }

  if (data.howCanWeHelp.length > 200) {
    errors.push('Service description must be 200 characters or less');
  }

  if (data.message && data.message.length > 1000) {
    errors.push('Message must be 1000 characters or less');
  }

  return errors;
}