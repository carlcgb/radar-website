"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Section } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";
import { trackEvent } from "@/lib/analytics";
import {
  demoFormSchema,
  TEAM_SIZE_OPTIONS,
  type DemoFormValues,
} from "@/lib/form-schema";

export function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    mode: "onBlur",
    defaultValues: { teamSize: "3-5" as const },
  });

  const onSubmit = async (data: DemoFormValues) => {
    setError(null);
    trackEvent("demo_form_started", { form_location: "demo-section" });

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formLocation: "demo-section",
          referrer: document.referrer,
        }),
      });

      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? "Erreur lors de l'envoi");
      }

      trackEvent("demo_form_submitted", { form_location: "demo-section" });
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur lors de l'envoi");
    }
  };

  if (submitted) {
    return (
      <Section id="demo" className="bg-[var(--bg-base)]" ariaLabelledBy="demo-success">
        <Container className="max-w-xl text-center">
          <h2 id="demo-success" className="font-display text-2xl font-bold text-[var(--text-primary)]">
            Merci. Votre demande a été reçue.
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]" role="status" aria-live="assertive">
            Vous recevrez un courriel de confirmation sous 24 heures. Préparez la liste de vos
            régions prioritaires — on les chargera dans la démo.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="demo" className="bg-[var(--bg-base)]" ariaLabelledBy="demo-heading">
      <Container className="max-w-xl">
        <Eyebrow>Réserver une démo</Eyebrow>
        <SectionHeading id="demo-heading" className="mt-4">
          20 minutes pour voir votre région.
        </SectionHeading>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
          noValidate
          aria-live="polite"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Votre prénom *</Label>
              <Input
                id="firstName"
                autoComplete="given-name"
                aria-required="true"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                className="min-h-11 bg-[var(--bg-inset)] text-base"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-sm text-[var(--color-danger-500)]">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Votre nom *</Label>
              <Input
                id="lastName"
                autoComplete="family-name"
                aria-required="true"
                className="min-h-11 bg-[var(--bg-inset)] text-base"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-[var(--color-danger-500)]">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Courriel professionnel *</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              className="min-h-11 bg-[var(--bg-inset)] text-base"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-[var(--color-danger-500)]">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Cabinet / Agence *</Label>
            <Input
              id="organization"
              autoComplete="organization"
              aria-required="true"
              className="min-h-11 bg-[var(--bg-inset)] text-base"
              {...register("organization")}
            />
            {errors.organization && (
              <p className="text-sm text-[var(--color-danger-500)]">
                {errors.organization.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamSize">Nombre de conseillers *</Label>
            <Controller
              name="teamSize"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="teamSize" className="min-h-11 w-full bg-[var(--bg-inset)] text-base">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    {TEAM_SIZE_OPTIONS.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea
              id="message"
              rows={3}
              maxLength={500}
              className="bg-[var(--bg-inset)] text-base"
              {...register("message")}
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
            {...register("website")}
          />

          {error && (
            <p className="text-sm text-[var(--color-danger-500)]" role="alert">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full bg-gradient-to-br from-[var(--color-chartreuse-500)] to-[var(--color-chartreuse-400)] text-[var(--text-inverse)] hover:from-[var(--color-chartreuse-400)] hover:to-[var(--color-chartreuse-500)] shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] transition-all duration-150 sm:w-auto sm:px-8 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Envoi…" : "Réserver la démo →"}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
