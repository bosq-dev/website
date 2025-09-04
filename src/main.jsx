import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { I18nProvider } from '@/i18n/i18n';
import en from '@/i18n/en.json';
import pt from '@/i18n/pt.json';

const resources = { en, pt };
const browserLang = (navigator.language || 'en').toLowerCase();
const defaultLocale = browserLang.startsWith('pt') ? 'pt' : 'en';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider defaultLocale={defaultLocale} resources={resources}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
