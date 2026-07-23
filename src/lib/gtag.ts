/**
 * Safely triggers Google Analytics 4 (GA4) events.
 * This prevents SSR errors and degrades gracefully if AdBlockers block gtag.
 */
export const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  // Next.js standard dataLayer injection
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({ event: eventName, ...params });
  } 
  // Fallback direct gtag call if dataLayer isn't used
  else if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  } else {
    // In local development or if adblocked, we just log it safely
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[GA4 Local] Event: ${eventName}`, params);
    }
  }
};
