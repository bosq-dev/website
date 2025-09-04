import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { I18nProvider } from '@/i18n/i18n';
import en from '@/i18n/en.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nProvider defaultLocale="en" resources={{ en }}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
