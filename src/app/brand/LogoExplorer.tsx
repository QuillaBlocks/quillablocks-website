"use client";

import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

type Variant = {
  key: string;
  name: string;
  note: string;
  stage: string;
  file: string;
  size: string;
  svg?: string;
  icon?: boolean;
};

type Version = {
  id: string;
  label: string;
  use: string;
  thumb: string;
  thumbHeight: number;
  preview: number;
  color: Variant[];
  mono: Variant[];
};

const MIDNIGHT = "#121329";
const WHITE = "#ffffff";
const MIST = "#eef0f4";
const dir = "/brand/logo/";

function lockup(layout: "horizontal" | "vertical", size: string, bgSize: string) {
  const p = `quillablocks-${layout}`;
  return {
    color: [
      { key: "color-light", name: "Fondo claro", note: "La de uso general", stage: WHITE, file: `${p}-color-on-light.png`, size },
      { key: "color-dark", name: "Fondo oscuro", note: "Sobre azul oscuro o negro", stage: MIDNIGHT, file: `${p}-color-on-dark.png`, size },
      { key: "color-bg", name: "Con fondo", note: "Trae el fondo azul oscuro", stage: MIST, file: `${p}-color-midnight-bg.png`, size: bgSize, icon: true },
    ],
    mono: [
      { key: "white", name: "Blanco", note: "Sobre fondos oscuros o fotos", stage: MIDNIGHT, file: `${p}-white.png`, svg: `${p}-white.svg`, size },
      { key: "black", name: "Negro", note: "Sobre fondos claros", stage: WHITE, file: `${p}-black.png`, svg: `${p}-black.svg`, size },
      { key: "gray", name: "Grises", note: "Impresión en blanco y negro", stage: MIST, file: `${p}-grayscale.png`, svg: `${p}-gray.svg`, size },
    ],
  };
}

const VERSIONS: Version[] = [
  {
    id: "horizontal",
    label: "Horizontal",
    use: "Principal",
    thumb: "quillablocks-horizontal-color-on-dark.png",
    thumbHeight: 30,
    preview: 104,
    ...lockup("horizontal", "730 × 288", "840 × 398"),
  },
  {
    id: "vertical",
    label: "Vertical",
    use: "Espacios cuadrados",
    thumb: "quillablocks-vertical-color-on-dark.png",
    thumbHeight: 44,
    preview: 150,
    ...lockup("vertical", "765 × 399", "949 × 583"),
  },
  {
    id: "isotipo",
    label: "Isotipo",
    use: "Perfiles e íconos",
    thumb: "quillablocks-symbol-color.png",
    thumbHeight: 40,
    preview: 150,
    color: [
      { key: "color-dark", name: "Transparente", note: "Sobre fondos oscuros", stage: MIDNIGHT, file: "quillablocks-symbol-color.png", size: "239 × 251" },
      { key: "icon-dark", name: "Ícono oscuro", note: "Foto de perfil o favicon", stage: MIST, file: "quillablocks-symbol-midnight-bg.png", size: "1081 × 1081", icon: true },
      { key: "icon-white", name: "Ícono blanco", note: "Foto de perfil o favicon", stage: MIDNIGHT, file: "quillablocks-symbol-white-bg.png", size: "1081 × 1081", icon: true },
    ],
    mono: [
      { key: "white", name: "Blanco", note: "Sobre fondos oscuros", stage: MIDNIGHT, file: "quillablocks-symbol-white.png", svg: "quillablocks-symbol-white.svg", size: "239 × 251" },
      { key: "black", name: "Negro", note: "Sobre fondos claros", stage: WHITE, file: "quillablocks-symbol-black.png", svg: "quillablocks-symbol-black.svg", size: "239 × 251" },
      { key: "gray", name: "Grises", note: "Impresión en blanco y negro", stage: MIST, file: "quillablocks-symbol-grayscale.png", svg: "quillablocks-symbol-gray.svg", size: "239 × 251" },
    ],
  },
];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const surface = "overflow-hidden rounded-[24px] rounded-bl-none bg-white/[0.04] ring-1 ring-white/[0.08]";
const label = "text-xs font-semibold uppercase tracking-[0.08em] text-[var(--qb-muted)]";

const heightFor = (version: Version, v: Variant, base: number) =>
  Math.round(v.icon ? base * (version.id === "isotipo" ? 1.15 : 1.35) : base);

function Download({ href, text, primary }: { href: string; text: string; primary?: boolean }) {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${focus} ${
        primary ? "bg-brand-teal text-white hover:brightness-110" : "bg-white/[0.08] text-white hover:bg-white/[0.16]"
      }`}
    >
      {text}
      <FaArrowDown size={10} aria-hidden />
    </a>
  );
}

function Essentials() {
  const small = [
    {
      title: "Para fondos oscuros",
      note: "Horizontal a color, nombre en blanco",
      stage: MIDNIGHT,
      file: "quillablocks-horizontal-color-on-dark.png",
      height: 52,
    },
    {
      title: "Para fotos de perfil",
      note: "Isotipo con fondo, cuadrado",
      stage: MIST,
      file: "quillablocks-symbol-midnight-bg.png",
      height: 84,
      icon: true,
    },
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <figure className={`${surface} flex flex-col`}>
        <div className="relative flex min-h-64 flex-1 items-center justify-center bg-white px-8 py-12 sm:min-h-80">
          <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-2.5 py-1 text-xs font-bold text-brand-midnight">
            Logo principal
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${dir}quillablocks-horizontal-color-on-light.png`}
            alt="Logo principal de QuillaBlocks, horizontal a color"
            className="h-24 max-w-full object-contain sm:h-28"
          />
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-4 p-5">
          <span>
            <span className="block text-lg font-bold text-white">Horizontal a color</span>
            <span className="block text-sm text-[var(--qb-muted)]">El que sirve en casi todo. Si dudas, usa este.</span>
          </span>
          <Download href={`${dir}quillablocks-horizontal-color-on-light.png`} text="Descargar PNG" primary />
        </figcaption>
      </figure>
      <div className="grid gap-4">
        {small.map((s) => (
          <figure key={s.file} className={`${surface} flex flex-col`}>
            <div className="flex min-h-36 flex-1 items-center justify-center px-6" style={{ background: s.stage }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dir + s.file}
                alt={s.title}
                style={{ height: s.height }}
                className={`max-w-full object-contain ${s.icon ? "rounded-2xl" : ""}`}
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
              <span className="min-w-0">
                <span className="block text-[15px] font-bold text-white">{s.title}</span>
                <span className="block text-[13px] text-[var(--qb-muted)]">{s.note}</span>
              </span>
              <Download href={dir + s.file} text="PNG" />
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function VariantButton({
  version,
  v,
  on,
  onClick,
}: {
  version: Version;
  v: Variant;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`flex min-w-0 items-center gap-3 rounded-2xl rounded-bl-none p-2 pr-3 text-left ring-1 transition-colors ${focus} ${
        on ? "bg-white/[0.08] ring-2 ring-brand-yellow" : "ring-white/[0.08] hover:bg-white/[0.05]"
      }`}
    >
      <span
        aria-hidden
        className="flex h-11 w-16 shrink-0 items-center justify-center rounded-xl rounded-bl-none ring-1 ring-white/15"
        style={{ background: v.stage }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dir + v.file}
          alt=""
          className={`max-w-[52px] object-contain ${v.icon ? "rounded-[4px]" : ""}`}
          style={{ height: heightFor(version, v, version.id === "horizontal" ? 18 : 26) }}
        />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-white">{v.name}</span>
        <span className="block truncate text-xs text-[var(--qb-muted)]">{v.note}</span>
      </span>
    </button>
  );
}

function Explorer() {
  const [versionId, setVersionId] = useState(VERSIONS[0].id);
  const [key, setKey] = useState("color-light");

  const version = VERSIONS.find((x) => x.id === versionId) ?? VERSIONS[0];
  const all = [...version.color, ...version.mono];
  const variant = all.find((x) => x.key === key) ?? version.color[0];

  function chooseVersion(next: Version) {
    setVersionId(next.id);
    if (![...next.color, ...next.mono].some((x) => x.key === key)) setKey(next.color[0].key);
  }

  return (
    <div className={`${surface} p-4 sm:p-6`}>
      <div className="mb-5">
        <p className={`${label} mb-3`}>1 · Elige la versión</p>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {VERSIONS.map((x) => {
            const on = x.id === version.id;
            return (
              <button
                key={x.id}
                type="button"
                aria-pressed={on}
                onClick={() => chooseVersion(x)}
                className={`flex flex-col items-center gap-3 rounded-2xl rounded-bl-none px-2 pb-3 pt-4 ring-1 transition-colors ${focus} ${
                  on ? "bg-white/[0.08] ring-2 ring-brand-yellow" : "ring-white/[0.08] hover:bg-white/[0.05]"
                }`}
              >
                <span className="flex h-12 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dir + x.thumb} alt="" className="max-w-full object-contain" style={{ height: x.thumbHeight }} />
                </span>
                <span className="text-center">
                  <span className="block text-sm font-bold text-white sm:text-[15px]">{x.label}</span>
                  <span className="block text-[11px] text-[var(--qb-muted)] sm:text-xs">{x.use}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="flex h-64 items-center justify-center rounded-2xl rounded-bl-none px-8 ring-1 ring-white/[0.08] transition-colors duration-300 sm:h-[340px]"
        style={{ background: variant.stage }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={variant.file}
          src={dir + variant.file}
          alt={`Logo QuillaBlocks ${version.label.toLowerCase()}, ${variant.name.toLowerCase()}`}
          style={{ height: heightFor(version, variant, version.preview) }}
          className={`max-h-[78%] max-w-full object-contain ${variant.icon ? "rounded-3xl" : ""}`}
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <p className={`${label} mb-3`}>2 · A color</p>
          <div className="grid gap-2">
            {version.color.map((v) => (
              <VariantButton key={v.key} version={version} v={v} on={v.key === variant.key} onClick={() => setKey(v.key)} />
            ))}
          </div>
        </div>
        <div>
          <p className={`${label} mb-3`}>O a una tinta</p>
          <div className="grid gap-2">
            {version.mono.map((v) => (
              <VariantButton key={v.key} version={version} v={v} on={v.key === variant.key} onClick={() => setKey(v.key)} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
        <span className="min-w-0">
          <span className="block text-[15px] font-bold text-white">
            {version.label} · {variant.name}
          </span>
          <span className="block truncate font-mono text-[12px] text-[var(--qb-muted)]">
            {variant.file} · {variant.size} px
          </span>
        </span>
        <span className="flex flex-wrap gap-2">
          <Download href={dir + variant.file} text="Descargar PNG" primary />
          {variant.svg && <Download href={dir + variant.svg} text="SVG" />}
        </span>
      </div>
    </div>
  );
}

export function LogoExplorer() {
  return (
    <div className="space-y-14">
      <div>
        <h3 className="font-heading mb-5 text-2xl font-bold text-white">Los 3 logos que más usamos</h3>
        <Essentials />
      </div>
      <div>
        <h3 className="font-heading mb-1 text-2xl font-bold text-white">Todas las versiones</h3>
        <p className="mb-5 text-[15px] text-[var(--qb-muted)]">
          Elige la versión y el color; la vista previa muestra el fondo sobre el que va cada archivo.
        </p>
        <Explorer />
      </div>
    </div>
  );
}
