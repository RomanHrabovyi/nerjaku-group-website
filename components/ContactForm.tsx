"use client";

import type { FormEvent } from "react";
import { copy, type Locale } from "@/lib/site-content";

const whatsappNumber = "355682939145";

export function ContactForm({ locale }: { locale: Locale }) {
  const text = copy[locale];

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      text.contactEyebrow,
      `${text.name}: ${form.get("name")}`,
      `${text.phone}: ${form.get("contact")}`,
      `${text.projectDetails}: ${form.get("details")}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <h3>{text.contactFormTitle}</h3>
      <label>
        <span>{text.name}</span>
        <input autoComplete="name" name="name" required />
      </label>
      <label>
        <span>{text.phone}</span>
        <input autoComplete="email" name="contact" required />
      </label>
      <label>
        <span>{text.projectDetails}</span>
        <textarea name="details" rows={4} required />
      </label>
      <button className="button button--yellow form-submit" type="submit">
        {text.send} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">{text.whatsappNote}</p>
    </form>
  );
}
