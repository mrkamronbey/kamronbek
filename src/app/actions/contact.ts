"use server";

import { Resend } from "resend";
import { PERSON } from "@/shared/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactStatus = "idle" | "loading" | "success" | "error";

export interface ContactState {
  status: ContactStatus;
  /** Translation key under the `contact.status` namespace (resolved on the client). */
  messageKey?: "required" | "not_configured" | "failed" | "success";
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", messageKey: "required" };
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: "error", messageKey: "not_configured" };
  }

  try {
    await resend.emails.send({
      from:    "portfolio@sunnatoff.dev",
      to:      PERSON.email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] ${name}`,
      html: `
        <h2>Yangi xabar — Sunnatoff.dev Portfolio</h2>
        <p><strong>Ism:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Mavzu:</strong> ${subject}</p>` : ""}
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
    return { status: "success", messageKey: "success" };
  } catch {
    return { status: "error", messageKey: "failed" };
  }
}
