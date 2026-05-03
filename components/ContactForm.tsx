"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const subjectOptions = [
  "Table Reservation",
  "Event & Private Hire",
  "Catering Inquiry",
  "Wholesale & Beans",
  "General Feedback",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
          Message Sent!
        </h3>
        <p className="text-stone-500 dark:text-stone-400 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-6 text-amber-700 dark:text-amber-500 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
          >
            Full Name <span className="text-amber-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
          >
            Email Address <span className="text-amber-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm appearance-none cursor-pointer"
        >
          <option value="">Select a subject...</option>
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5"
        >
          Message <span className="text-amber-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-amber-700/25"
      >
        {loading ? (
          <>
            <Loader className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
