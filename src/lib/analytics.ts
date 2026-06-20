"use client";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: AnalyticsParams }) => void;
  }
}

export function trackEvent(name: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", name, params);
  }

  if (window.plausible) {
    window.plausible(name, { props: params });
  }
}

export function trackCtaClick(location: string, label: string) {
  trackEvent("cta_clicked", { cta_location: location, cta_label: label });
}

export function trackSectionView(sectionId: string, sectionName: string) {
  trackEvent("section_viewed", { section_id: sectionId, section_name: sectionName });
}
