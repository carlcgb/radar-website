"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { LogoMark, LogoWordmark } from "@/components/icons/logo";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/theme/theme-provider";
import { NAV_LINKS, PRIMARY_CTA, SITE } from "@/lib/content/site";
import { scrollToAnchor } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <a
      href="#contenu-principal"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-[var(--bg-surface)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--text-primary)] focus:shadow-[var(--shadow-focus)]"
    >
      Passer au contenu
    </a>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      className="size-9 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (href: string, label: string) => (
    <button
      key={href}
      type="button"
      onClick={() => {
        scrollToAnchor(href);
        setOpen(false);
      }}
      className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
    >
      {label}
    </button>
  );

  return (
    <header id="nav">
      <SkipLink />
      <nav
        aria-label="Navigation principale"
        className={cn(
          "sticky top-0 z-[100] transition-all duration-200",
          scrolled
            ? "border-b border-[var(--border-default)] bg-[var(--bg-surface)]/95 backdrop-blur-md shadow-[var(--shadow-nav)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-brand)]"
            aria-label="RadarCRM — Accueil"
          >
            <LogoMark />
            <LogoWordmark />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => navLink(l.href, l.label))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href={SITE.appUrl}
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] sm:inline-block"
            >
              Connexion
            </Link>
            <div className="hidden sm:block">
              <CtaButton
                label={PRIMARY_CTA}
                location="nav"
                size="default"
              />
            </div>
            <div className="sm:hidden">
              <CtaButton label="Démo" location="nav-mobile" size="default" />
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-9 lg:hidden"
                  aria-label="Ouvrir le menu"
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-[var(--border-default)] bg-[var(--bg-surface)] sm:max-w-sm"
              >
                <SheetHeader>
                  <SheetTitle className="text-left font-display text-[var(--text-primary)]">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((l) => navLink(l.href, l.label))}
                  <Link
                    href={SITE.appUrl}
                    className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text-muted)]"
                  >
                    Connexion
                  </Link>
                  <CtaButton
                    label={PRIMARY_CTA}
                    location="nav-drawer"
                    fullWidth
                    className="mt-4"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
