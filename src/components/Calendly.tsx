'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/ericdoster/intro-consult?hide_event_type_details=1';

export function initializeCalendly() {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.showPopupWidget(CALENDLY_URL);
  } else {
    console.warn('Calendly is not loaded yet');
  }
}

export function CalendlyButton({ children }: { children: React.ReactNode }) {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Calendly) {
      setIsCalendlyReady(true);
    }
  }, []);

  const handleClick = () => {
    if (isCalendlyReady) {
      window.Calendly.showPopupWidget(CALENDLY_URL);
    } else {
      console.warn('Calendly is not ready yet');
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
}

export function CalendlyScripts() {
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('Calendly script loaded');
        }}
      />
    </>
  );
}
