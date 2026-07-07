"use client";

import { FormEvent, useState } from "react";

const formEndpoint = "https://formsubmit.co/ajax/jonathanstephenson84@gmail.com";

type SubmissionState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      return;
    }

    formData.append("_subject", "New Tasty Wasp project enquiry");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    setSubmissionState("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmissionState("sent");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />

      <Field id="name" label="Name" name="name" required type="text" />
      <Field id="email" label="Email" name="email" required type="email" />
      <Field id="company" label="Company" name="company" type="text" />

      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase text-muted" htmlFor="project">
          Project
        </label>
        <textarea
          className="min-h-36 resize-y border border-stone bg-transparent px-4 py-3 text-base leading-7 text-carbon outline-none transition-colors duration-300 placeholder:text-muted/70 focus:border-carbon"
          id="project"
          name="project"
          required
        />
      </div>

      <button
        className="inline-flex min-h-12 items-center justify-center border border-carbon bg-carbon px-5 py-3 text-sm font-semibold uppercase text-bone transition-colors duration-300 hover:bg-ochre hover:text-carbon disabled:cursor-wait disabled:border-stone disabled:bg-stone disabled:text-carbon"
        disabled={submissionState === "sending"}
        type="submit"
      >
        {submissionState === "sending" ? "Sending" : "Send enquiry"}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm leading-6 text-muted">
        {submissionState === "sent"
          ? "Thank you. Your enquiry has been sent."
          : null}
        {submissionState === "error"
          ? "Something did not send. Please email jonathanstephenson84@gmail.com."
          : null}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  required,
  type
}: {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  type: "email" | "text";
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-semibold uppercase text-muted" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-12 border border-stone bg-transparent px-4 text-base text-carbon outline-none transition-colors duration-300 placeholder:text-muted/70 focus:border-carbon"
        id={id}
        name={name}
        required={required}
        type={type}
      />
    </div>
  );
}
