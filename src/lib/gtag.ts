declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackCallConversion = (phoneUrl: string): boolean => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-16844187926/OPEnCLTcs-sbEJbS998-",
      value: 1.0,
      currency: "USD",
      event_callback: () => {
        window.location.href = phoneUrl;
      },
    });
    return false;
  }
  return true;
};

export const trackFormConversion = (): void => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-16844187926/FORM_SUBMIT",
    });
  }
};
