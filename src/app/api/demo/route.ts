import { NextResponse } from "next/server";
import { demoFormSchema } from "@/lib/form-schema";
import { EMAIL_FROM, SITE } from "@/lib/content/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = demoFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { website: honeypot, ...data } = parsed.data;
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      ...data,
      formLocation: body.formLocation ?? "unknown",
      referrer: body.referrer ?? "",
      submittedAt: new Date().toISOString(),
      flaggedSmallTeam: data.teamSize === "1-2",
    };

    const recipient = process.env.DEMO_RECIPIENT_EMAIL ?? SITE.demoEmail;
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: EMAIL_FROM,
          to: [recipient],
          subject: `[Demo] ${data.organization} — ${data.firstName} ${data.lastName}`,
          text: JSON.stringify(payload, null, 2),
        }),
      });

      if (!res.ok) {
        console.error("Resend error", await res.text());
        return NextResponse.json({ error: "Échec d'envoi du courriel" }, { status: 502 });
      }
    } else if (process.env.NODE_ENV === "development") {
      console.info("[demo-form]", payload);
    } else {
      console.warn("[demo-form] RESEND_API_KEY not set — submission logged only", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
