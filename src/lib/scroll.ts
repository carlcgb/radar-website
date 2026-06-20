"use client";

export function scrollToDemo() {
  const el = document.getElementById("demo");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  el?.querySelector<HTMLElement>("input, select, textarea")?.focus();
}

export function scrollToAnchor(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}
