"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const FacebookPixelEvents = () => {
  const pathname = usePathname();
  const [pixelInitialized, setPixelInitialized] = useState(false);

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      setPixelInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!pixelInitialized) return;
    window.fbq("track", "PageView");
  }, [pathname, pixelInitialized]);

  return null;
};

export const trackInitiateCheckout = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout');
  }
};
