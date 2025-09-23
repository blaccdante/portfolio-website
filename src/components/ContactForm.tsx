"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <div className="max-w-xl mx-auto">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const data = new FormData(form);
          const name = data.get("name");
          const email = data.get("email");
          const message = data.get("message");
          const mailto = `mailto:dannysoawesome@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
            String(name || "")
          )}&body=${encodeURIComponent(String(message || ""))}%0A%0AFrom:%20${encodeURIComponent(
            String(email || "")
          )}`;
          setStatus("sending");
          window.location.href = mailto;
          setTimeout(() => setStatus("sent"), 500);
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-60"
        >
          {status === "idle" && "Send Message"}
          {status === "sending" && "Opening mail client..."}
          {status === "sent" && "Thanks!"}
        </button>
      </form>
    </div>
  );
}