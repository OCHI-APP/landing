"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function WaitlistModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => {
    return name.trim().length >= 2 && isValidEmail(email);
  }, [name, email]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
  }, [open]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Please enter a valid name and email.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close modal"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white border border-black/10 shadow-xl overflow-hidden"
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Join the waitlist
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Leave your name and email — we’ll reach out when it’s ready.
                  </p>
                </div>

                <button
                  type="button"
                  className="shrink-0 h-9 w-9 rounded-full bg-black text-white flex items-center justify-center"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={onSubmit} className="mt-5 space-y-3">
                <label className="block">
                  <span className="text-xs font-medium text-gray-700">
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 caret-black outline-none focus:ring-2 focus:ring-black/10"
                    autoComplete="name"
                    autoFocus
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-gray-700">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 caret-black outline-none focus:ring-2 focus:ring-black/10"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>

                {error && (
                  <p className="text-sm text-red-600 leading-relaxed">
                    {error}
                  </p>
                )}

                {status === "success" && (
                  <p className="text-sm text-emerald-600 leading-relaxed">
                    Added! Check your email soon.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95 transition-opacity"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


