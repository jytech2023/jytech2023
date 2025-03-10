import { createContext } from 'react';
import { LanguageContextType } from './languageContext.types';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
