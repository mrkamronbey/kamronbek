"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
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
    return { status: "error", message: "Barcha maydonlarni to'ldiring." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: "error", message: "Email xizmati sozlanmagan." };
  }

  try {
    await resend.emails.send({
      from:    "portfolio@sunnatoff.dev",
      to:      "komronbek.sunnatov@mail.ru",
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] ${name}dan xabar`,
      html: `
        <h2>Yangi xabar — Sunnatoff.dev Portfolio</h2>
        <p><strong>Ism:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Mavzu:</strong> ${subject}</p>` : ""}
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
    return { status: "success", message: "Xabar muvaffaqiyatli yuborildi!" };
  } catch {
    return { status: "error", message: "Xabar yuborishda xatolik yuz berdi." };
  }
}
