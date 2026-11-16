"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input id="name" name="name" type="text" required minLength={2}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input id="email" name="email" type="email" required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required
          placeholder="What is your project about?"
          className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Your Message
        </label>
        <textarea id="message" name="message" required minLength={10} rows={6}
          placeholder="Tell us a little about your project..."
          className="w-full resize-y rounded-xl border border-white/10 bg-[#111827] px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
        />
      </div>

      <button type="submit"
        className="w-full rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-white sm:w-auto"
      >
        Send Message ↗
      </button>

      {submitted && (
        <p role="status" className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-200">
          Thank you for trying our contact form! This interactive portfolio
          demo does not send or store messages.
        </p>
      )}
    </form>
  );
}

