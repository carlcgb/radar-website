import { describe, expect, it } from "vitest";
import { demoFormSchema } from "@/lib/form-schema";
import { FAQ_ITEMS } from "@/lib/content/faq";
import { CHAPTERS } from "@/lib/content/chapters";
import { SECTOR_CARDS } from "@/lib/content/sectors";

describe("demoFormSchema", () => {
  it("accepts valid submission", () => {
    const result = demoFormSchema.safeParse({
      firstName: "Jean",
      lastName: "Tremblay",
      email: "jean@agence.ca",
      organization: "Agence Laval",
      teamSize: "3-5",
    });
    expect(result.success).toBe(true);
  });

  it("accepts honeypot empty string", () => {
    const result = demoFormSchema.safeParse({
      firstName: "Jean",
      lastName: "Tremblay",
      email: "jean@agence.ca",
      organization: "Agence Laval",
      teamSize: "3-5",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects honeypot when filled", () => {
    const result = demoFormSchema.safeParse({
      firstName: "Jean",
      lastName: "Tremblay",
      email: "jean@agence.ca",
      organization: "Agence Laval",
      teamSize: "3-5",
      website: "spam",
    });
    expect(result.success).toBe(false);
  });
});

describe("content completeness", () => {
  it("has 7 FAQ items per PRD", () => {
    expect(FAQ_ITEMS).toHaveLength(7);
  });

  it("has 5 product chapters", () => {
    expect(CHAPTERS).toHaveLength(5);
  });

  it("has 12 sector cards", () => {
    expect(SECTOR_CARDS).toHaveLength(12);
  });
});
