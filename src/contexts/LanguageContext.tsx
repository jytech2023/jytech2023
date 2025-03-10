import React, { useState, useEffect } from 'react';
import { Language, translations } from './translations';
import { LanguageContext } from './languageContext.context';

const LANGUAGE_STORAGE_KEY = 'jytech_language_preference';

const getInitialLanguage = (): Language => {
  // Check localStorage first
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
  if (storedLanguage && (storedLanguage === 'zh' || storedLanguage === 'en')) {
    console.log('Using stored language preference:', storedLanguage);
    return storedLanguage;
  }

  // Check system language
  const systemLanguages = navigator.languages || [navigator.language];
  console.log('Detected system languages:', systemLanguages);
  
  const preferredLanguage = systemLanguages
    .map(lang => lang.toLowerCase())
    .find(lang => lang.startsWith('zh') || lang === 'en');

  const detectedLanguage = preferredLanguage?.startsWith('zh') ? 'zh' : 'en';
  console.log('Selected language based on system preference:', detectedLanguage);
  return detectedLanguage;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
