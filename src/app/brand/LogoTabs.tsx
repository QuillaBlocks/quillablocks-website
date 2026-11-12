"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

type Variant = {
  name: string;
  note: string;
  stage: string;
  preview: string;
  height: number;
  avatar?: boolean;
  files: { label: string; href: string }[];
};

type Lockup = { id: string; label: string; summary: string; variants: Variant[] };

const MIDNIGHT = "#121329";
const WHITE = "#ffffff";
const MIST = "#eef0f4";
const base = "/brand/logo/quillablocks";

function variantsFor(layout: "horizontal" | "vertical", h: number): Variant[] {
  const p = `${base}-${layout}`;
  return [
    {
      name: "Color",
      note: "Sobre fondos claros",
      stage: WHITE,
      preview: `${p}-color-on-light.png`,
      height: h,
      files: [{ label: "PNG", href: `${p}-color-on-light.png` }],
    },
    {
      name: "Color",
      note: "Sobre fondos oscuros",
      stage: MIDNIGHT,
      preview: `${p}-color-on-dark.png`,
      height: h,
      files: [{ label: "PNG", href: `${p}-color-on-dark.png` }],
    },
    {
      name: "Color con fondo",
      note: "Ya incluye el fondo medianoche",
      stage: MIDNIGHT,
      preview: `${p}-color-midnight-bg.png`,
      height: Math.round(h * 1.38),
      files: [{ label: "PNG", href: `${p}-color-midnight-bg.png` }],
    },
    {
      name: "Blanco",
      note: "Negativo, sobre fondos oscuros o fotos",
      stage: MIDNIGHT,
      preview: `${p}-white.png`,
      height: h,
      files: [
        { label: "PNG", href: `${p}-white.png` },
        { label: "SVG", href: `${p}-white.svg` },
      ],
    },
    {
      name: "Negro",
      note: "Positivo, para una sola tinta",
      stage: WHITE,
      preview: `${p}-black.png`,
      height: h,
      files: [
        { label: "PNG", href: `${p}-black.png` },
        { label: "SVG", href: `${p}-black.svg` },
      ],
    },
    {
      name: "Escala de grises",
      note: "Impresión en blanco y negro",
      stage: MIST,
      preview: `${p}-grayscale.png`,
      height: h,
      files: [
        { label: "PNG", href: `${p}-grayscale.png` },
        { label: "SVG", href: `${p}-gray.svg` },
      ],
    },
  ];
}

const s = `${base}-symbol`;

const LOCKUPS: Lockup[] = [
  {
    id: "horizontal",
    label: "Horizontal",
    summary: "La versión principal. Úsala por defecto.",
    variants: variantsFor("horizontal", 64),
  },
  {
    id: "vertical",
    label: "Vertical",
    summary: "Para espacios cuadrados o angostos.",
    variants: variantsFor("vertical", 84),
  },
  {
    id: "simbolo",
    label: "Símbolo",
    summary: "La Q sola. Para avatares, favicons e íconos de app.",
    variants: [
      {
        name: "Color",
        note: "Fondo transparente",
        stage: MIDNIGHT,
        preview: `${s}-color.png`,
        height: 84,
        files: [{ label: "PNG", href: `${s}-color.png` }],
      },
      {
        name: "Avatar medianoche",
        note: "Foto de perfil y favicon",
        stage: MIST,
        avatar: true,
        preview: `${s}-midnight-bg.png`,
        height: 136,
        files: [{ label: "PNG", href: `${s}-midnight-bg.png` }],
      },
      {
        name: "Avatar blanco",
        note: "Foto de perfil y favicon",
        stage: MIDNIGHT,
        avatar: true,
        preview: `${s}-white-bg.png`,
        height: 136,
        files: [{ label: "PNG", href: `${s}-white-bg.png` }],
      },
      {
        name: "Blanco",
        note: "Una tinta, sobre oscuro",
        stage: MIDNIGHT,
        preview: `${s}-white.png`,
        height: 84,
        files: [
          { label: "PNG", href: `${s}-white.png` },
          { label: "SVG", href: `${s}-white.svg` },
        ],
      },
      {
        name: "Negro",
        note: "Una tinta, sobre claro",
        stage: WHITE,
        preview: `${s}-black.png`,
        height: 84,
        files: [
          { label: "PNG", href: `${s}-black.png` },
          { label: "SVG", href: `${s}-black.svg` },
        ],
      },
      {
        name: "Escala de grises",
        note: "Impresión en blanco y negro",
        stage: MIST,
        preview: `${s}-grayscale.png`,
        height: 84,
        files: [
          { label: "PNG", href: `${s}-grayscale.png` },
          { label: "SVG", href: `${s}-gray.svg` },
        ],
      },
    ],
  },
];

export function LogoTabs() {
  const [active, setActive] = useState(0);
  const lockup = LOCKUPS[active];

  function onKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : LOCKUPS.length - 1)) % LOCKUPS.length;
    setActive(next);
    document.getElementById(`tab-${LOCKUPS[next].id}`)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Versiones del logo"
        onKeyDown={onKey}
        className="mb-4 inline-flex gap-1 rounded-full bg-white/[0.05] p-1 ring-1 ring-white/[0.07]"
      >
        {LOCKUPS.map((l, i) => (
          <button
            key={l.id}
            role="tab"
            type="button"
            id={`tab-${l.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${l.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--qb-text)] transition-colors hover:text-white aria-selected:bg-white aria-selected:text-brand-midnight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {l.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${lockup.id}`} aria-labelledby={`tab-${lockup.id}`}>
        <p className="mb-5 text-[15px] text-[var(--qb-muted)]">{lockup.summary}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lockup.variants.map((v) => (
            <figure
              key={v.preview}
              className="overflow-hidden rounded-[20px] rounded-bl-none bg-white/[0.04] ring-1 ring-white/[0.07]"
            >
              <div
                className="flex h-48 items-center justify-center overflow-hidden px-6"
                style={{ background: v.stage }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.preview}
                  alt={`Logo QuillaBlocks ${lockup.label.toLowerCase()}, ${v.name.toLowerCase()}`}
                  style={{ height: v.height }}
                  className={`max-w-full object-contain ${v.avatar ? "rounded-[22%]" : ""}`}
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="min-w-0">
                  <span className="block text-[15px] font-bold text-white">{v.name}</span>
                  <span className="block text-[13px] leading-snug text-[var(--qb-muted)]">{v.note}</span>
                </span>
                <span className="flex shrink-0 gap-1.5">
                  {v.files.map((f) => (
                    <a
                      key={f.href}
                      href={f.href}
                      download
                      className="inline-flex items-center gap-1 rounded-full bg-white/[0.07] px-2.5 py-1.5 font-mono text-[11px] font-semibold text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {f.label}
                      <FaArrowDown size={9} aria-hidden />
                    </a>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
