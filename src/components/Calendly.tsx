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

export function CalendlyButton({ children }: { children: React.ReactNode }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if (typeof window !== 'undefined' && window.Calendly) {
      setIsScriptLoaded(true);
    }

    // Add a listener for when the script loads
    const handleScriptLoad = () => {
      if (window.Calendly) {
        setIsScriptLoaded(true);
      }
    };

    window.addEventListener('calendly:ready', handleScriptLoad);

    return () => {
      window.removeEventListener('calendly:ready', handleScriptLoad);
    };
  }, []);

  const handleClick = () => {
    if (isScriptLoaded && window.Calendly) {
      window.Calendly.showPopupWidget(CALENDLY_URL);
    } else {
      console.warn('Calendly is not ready yet. Please try again in a moment.');
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
        strategy="lazyOnload"
        onReady={() => {
          // Dispatch a custom event when Calendly is ready
          if (typeof window !== 'undefined' && window.Calendly) {
            window.dispatchEvent(new Event('calendly:ready'));
          }
        }}
      />
    </>
  );
}
