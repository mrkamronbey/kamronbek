"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="space-y-4">

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div>
          <label className="block font-mono text-[11px] text-muted uppercase tracking-[1.5px] mb-2">
            Ism *
          </label>
          <input
            name="name"
            required
            placeholder="Kamronbek Sunnatov"
            className="w-full bg-canvas border border-line rounded-lg px-4 py-2.5 text-sm text-content placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
          />
        </div>
        <div>
          <label className="block font-mono text-[11px] text-muted uppercase tracking-[1.5px] mb-2">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            className="w-full bg-canvas border border-line rounded-lg px-4 py-2.5 text-sm text-content placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[11px] text-muted uppercase tracking-[1.5px] mb-2">
          Mavzu
        </label>
        <input
          name="subject"
          placeholder="Loyiha haqida..."
          className="w-full bg-canvas border border-line rounded-lg px-4 py-2.5 text-sm text-content placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all"
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] text-muted uppercase tracking-[1.5px] mb-2">
          Xabar *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Loyihangiz yoki savolingiz haqida yozing..."
          className="w-full bg-canvas border border-line rounded-lg px-4 py-2.5 text-sm text-content placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
        />
      </div>

      {/* Status message */}
      {state.status === "success" && (
        <div className="flex items-center gap-2 text-success bg-success/[0.08] border border-success/20 px-4 py-3 rounded-lg text-sm">
          <CheckCircle size={16} />
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div className="flex items-center gap-2 text-[#f87171] bg-[#f87171]/[0.08] border border-[#f87171]/20 px-4 py-3 rounded-lg text-sm">
          <AlertCircle size={16} />
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-[14px] px-6 py-3.5 rounded-lg transition-all hover:bg-[#4a7de0] disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-px"
      >
        {pending ? (
          <><Loader2 size={16} className="animate-spin" /> Yuborilmoqda...</>
        ) : (
          <><Send size={16} /> Xabar yuborish</>
        )}
      </button>
    </form>
  );
}
