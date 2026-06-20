"use client";

import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";
import { scrollToAnchor, scrollToDemo } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  label: string;
  location: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg" | "xl";
  className?: string;
  fullWidth?: boolean;
};

export function CtaButton({
  label,
  location,
  href = "#demo",
  variant = "primary",
  size = "default",
  className,
  fullWidth,
}: CtaButtonProps) {
  const handleClick = () => {
    trackCtaClick(location, label);
    if (href === "#demo") {
      scrollToDemo();
    } else if (href.startsWith("#")) {
      scrollToAnchor(href);
    }
  };

  const sizeClass =
    size === "xl"
      ? "h-14 px-8 text-lg"
      : size === "lg"
        ? "h-12 px-6 text-base"
        : "h-10 px-4 text-sm";

  const variantClass =
    variant === "primary"
      ? "bg-gradient-to-br from-[var(--color-chartreuse-500)] to-[var(--color-chartreuse-400)] text-[var(--text-inverse)] hover:from-[var(--color-chartreuse-400)] hover:to-[var(--color-chartreuse-300,#d4e87a)] active:from-[var(--color-chartreuse-600)] active:to-[var(--color-chartreuse-500)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] group cursor-pointer"
      : variant === "secondary"
        ? "border border-[var(--border-default)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-border)] cursor-pointer"
        : "bg-transparent text-[var(--text-accent)] hover:bg-[var(--accent-subtle)] cursor-pointer";

  return (
    <Button
      type="button"
      onClick={handleClick}
      className={cn(
        "font-semibold transition-all duration-150 focus-visible:ring-[var(--accent-brand)] focus-visible:ring-offset-[var(--bg-base)]",
        sizeClass,
        variantClass,
        fullWidth && "w-full",
        className,
      )}
    >
      {label.replace(" →", "")}
      {label.includes("→") && (
        <ArrowRight
          className="ml-1 size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Button>
  );
}
