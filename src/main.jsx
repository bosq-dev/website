import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { I18nProvider } from '@/i18n/i18n';
import en from '@/i18n/en.json';
import pt from '@/i18n/pt.json';
import zh from '@/i18n/zh.json';
import fr from '@/i18n/fr.json';

const resources = { en, pt, zh, fr };
const browserLang = (navigator.language || 'en').toLowerCase();

const resolveLocale = (language, availableLocales, fallback = 'en') => {
  const lang = (language || '').toLowerCase();

  // 1) Exact match (e.g., 'pt', 'en', 'zh-CN')
  if (availableLocales.includes(lang)) return lang;

  // 2) Match by base language before '-' (e.g., 'pt-BR' -> 'pt')
  const base = lang.split('-')[0];
  if (availableLocales.includes(base)) return base;

  // 3) If we only have regioned locales and user sent base (e.g., 'pt' -> 'pt-BR')
  const prefixed = availableLocales.find((loc) => loc.startsWith(base));
  if (prefixed) return prefixed;

  // 4) Fallback to provided default, or first available
  return availableLocales.includes(fallback) ? fallback : availableLocales[0];
};

const availableLocales = Object.keys(resources);
const defaultLocale = resolveLocale(browserLang, availableLocales, 'en');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider defaultLocale={defaultLocale} resources={resources}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
