"use client";
// Contact form. There is no server, so "Send" opens the visitor's own
// email app with the message filled in (works on Vercel's free plan).
import { useState } from "react";

export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form__row">
        <input name="name" placeholder="Name" required value={form.name} onChange={update} />
        <input name="email" type="email" placeholder="Email" required value={form.email} onChange={update} />
      </div>
      <textarea name="message" placeholder="Message" rows={5} required value={form.message} onChange={update} />
      <button type="submit" className="btn" disabled={!email}>
        {email ? "Send Message" : "Add an email in siteData.js"}
      </button>
    </form>
  );
}
