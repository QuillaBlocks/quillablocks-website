"use client";

import { useState } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa6";

function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }
  return { copied, copy };
}

export function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
  const { copied, copy } = useCopy(text);
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {copied ? <FaCheck size={11} aria-hidden /> : <FaRegCopy size={11} aria-hidden />}
      <span aria-live="polite">{copied ? "Copiado" : label}</span>
    </button>
  );
}

export function Swatch({
  name,
  hex,
  rgb,
  cmyk,
  role,
  ink,
}: {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  role: string;
  ink: string;
}) {
  const { copied, copy } = useCopy(hex);
  return (
    <div className="overflow-hidden rounded-[20px] rounded-bl-none bg-white/[0.04] ring-1 ring-white/[0.07]">
      <button
        type="button"
        onClick={copy}
        aria-label={`Copiar ${hex}`}
        className="group flex h-32 w-full items-end p-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        style={{ background: hex, color: ink }}
      >
        <span
          aria-live="polite"
          className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          style={copied ? { opacity: 1 } : undefined}
        >
          {copied ? <FaCheck size={11} aria-hidden /> : <FaRegCopy size={11} aria-hidden />}
          {copied ? "Copiado" : "Copiar HEX"}
        </span>
      </button>
      <div className="p-4">
        <p className="mb-3 text-base font-bold text-white">{name}</p>
        <dl className="mb-3 space-y-1 font-mono text-[13px]">
          {[
            ["HEX", hex],
            ["RGB", rgb],
            ["CMYK", cmyk],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <dt className="w-11 shrink-0 text-[var(--qb-muted)]">{k}</dt>
              <dd className="text-white">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm leading-snug text-[var(--qb-text)]">{role}</p>
      </div>
    </div>
  );
}
