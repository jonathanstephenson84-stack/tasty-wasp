"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "The form could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you. Your message has been sent. I’ll be in touch shortly.",
      );
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "The message could not be sent. Please try again or email jonathanstephenson84@gmail.com.",
      );
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="a1cdab6e-d9a9-481d-9879-4c477c378779"
      />

      <input
        type="hidden"
        name="subject"
        value="New Tasty Wasp website enquiry"
      />

      <input type="hidden" name="from_name" value="Tasty Wasp website" />

      <input
        className="hidden"
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label
          className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full border-b border-stone bg-transparent py-3 text-xl outline-none transition-colors focus:border-carbon"
          id="name"
          name="name"
          required
          type="text"
          autoComplete="name"
        />
      </div>

      <div>
        <label
          className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full border-b border-stone bg-transparent py-3 text-xl outline-none transition-colors focus:border-carbon"
          id="email"
          name="email"
          required
          type="email"
          autoComplete="email"
        />
      </div>

      <div>
        <label
          className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted"
          htmlFor="company"
        >
          Company
        </label>
        <input
          className="w-full border-b border-stone bg-transparent py-3 text-xl outline-none transition-colors focus:border-carbon"
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
        />
      </div>

      <div>
        <label
          className="mb-3 block text-xs font-semibold uppercase tracking-[0.1em] text-muted"
          htmlFor="message"
        >
          Tell us about your project
        </label>
        <textarea
          className="min-h-40 w-full resize-y border-b border-stone bg-transparent py-3 text-xl outline-none transition-colors focus:border-carbon"
          id="message"
          name="message"
          required
        />
      </div>

      <button
        className="inline-flex items-center gap-4 border-b border-carbon pb-2 text-sm font-semibold uppercase tracking-[0.08em] transition-all hover:gap-7 disabled:cursor-wait disabled:opacity-50"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Sending…" : "Begin the conversation"}
        <span aria-hidden="true">→</span>
      </button>

      <div aria-live="polite" className="min-h-7">
        {message ? (
          <p
            className={`text-sm leading-6 ${
              status === "success" ? "text-carbon" : "text-red-700"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}