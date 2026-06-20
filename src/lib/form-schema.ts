import { z } from "zod";

export const demoFormSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 caractères"),
  lastName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Courriel invalide"),
  organization: z.string().min(2, "Minimum 2 caractères"),
  teamSize: z.enum(["1-2", "3-5", "6-10", "11-20", "20+"]),
  message: z.string().max(500).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;

export const TEAM_SIZE_OPTIONS = [
  { value: "1-2", label: "1–2 conseillers" },
  { value: "3-5", label: "3–5 conseillers" },
  { value: "6-10", label: "6–10 conseillers" },
  { value: "11-20", label: "11–20 conseillers" },
  { value: "20+", label: "20+ conseillers" },
] as const;
