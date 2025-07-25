"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="flex flex-col gap-4 bg-blue-50 rounded-xl p-6 shadow"
      onSubmit={e => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        required
        className="rounded-lg border-gray-200 px-4 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-200 outline-none bg-white text-gray-900"
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        className="rounded-lg border-gray-200 px-4 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-200 outline-none bg-white text-gray-900"
      />
      <textarea
        placeholder="Your Message"
        required
        rows={4}
        className="rounded-lg border-gray-200 px-4 py-2 text-base shadow-sm focus:ring-2 focus:ring-blue-200 outline-none bg-white text-gray-900"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg"
      >
        Send Message
      </button>
      {submitted && <div className="text-green-600 font-medium mt-2">Thank you! We'll be in touch soon.</div>}
    </form>
  );
} 