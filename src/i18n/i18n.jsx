import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const I18nContext = createContext({
  locale: 'en',
  setLocale: () => {},
  messages: {},
  t: (key, fallback) => fallback || key
});

function getMessageByPath(messages, key) {
  if (!key) return '';
  const segments = key.split('.');
  let node = messages;
  for (const seg of segments) {
    if (node && Object.prototype.hasOwnProperty.call(node, seg)) {
      node = node[seg];
    } else {
      return undefined;
    }
  }
  return typeof node === 'string' ? node : undefined;
}

export function I18nProvider({ children, defaultLocale = 'en', resources = {} }) {
  const [locale, setLocale] = useState(defaultLocale);

  const messages = useMemo(() => resources[locale] || {}, [resources, locale]);

  const t = useCallback(
    (key, fallback) => {
      const value = getMessageByPath(messages, key);
      return value !== undefined ? value : (fallback || key);
    },
    [messages]
  );

  const value = useMemo(() => ({ locale, setLocale, messages, t }), [locale, messages, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
