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
      note: "Fondo azul oscuro incluido",
      stage: MIST,
      avatar: true,
      preview: `${p}-color-midnight-bg.png`,
      height: Math.round(h * 1.3),
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
    variants: variantsFor("horizontal", 40),
  },
  {
    id: "vertical",
    label: "Vertical",
    summary: "Para espacios cuadrados o angostos.",
    variants: variantsFor("vertical", 56),
  },
  {
    id: "simbolo",
    label: "Símbolo",
    summary: "La Q sola. Para fotos de perfil, favicons e íconos de app.",
    variants: [
      {
        name: "Color",
        note: "Fondo transparente",
        stage: MIDNIGHT,
        preview: `${s}-color.png`,
        height: 52,
        files: [{ label: "PNG", href: `${s}-color.png` }],
      },
      {
        name: "Ícono, fondo oscuro",
        note: "Perfil, favicon o app",
        stage: MIST,
        avatar: true,
        preview: `${s}-midnight-bg.png`,
        height: 76,
        files: [{ label: "PNG", href: `${s}-midnight-bg.png` }],
      },
      {
        name: "Ícono, fondo blanco",
        note: "Perfil, favicon o app",
        stage: MIDNIGHT,
        avatar: true,
        preview: `${s}-white-bg.png`,
        height: 76,
        files: [{ label: "PNG", href: `${s}-white-bg.png` }],
      },
      {
        name: "Blanco",
        note: "Una tinta, sobre oscuro",
        stage: MIDNIGHT,
        preview: `${s}-white.png`,
        height: 52,
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
        height: 52,
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
        height: 52,
        files: [
          { label: "PNG", href: `${s}-grayscale.png` },
          { label: "SVG", href: `${s}-gray.svg` },
        ],
      },
    ],
  },
];

export function LogoVersions() {
  return (
    <div className="space-y-12">
      {LOCKUPS.map((lockup) => (
        <div key={lockup.id} id={`logo-${lockup.id}`} className="scroll-mt-6">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-heading text-xl font-bold text-white">{lockup.label}</h3>
            <p className="text-[15px] text-[var(--qb-muted)]">{lockup.summary}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {lockup.variants.map((v) => (
              <figure
                key={v.preview}
                className="flex flex-col overflow-hidden rounded-[18px] rounded-bl-none bg-white/[0.04] ring-1 ring-white/[0.07]"
              >
                <div
                  className="flex h-32 items-center justify-center overflow-hidden px-4"
                  style={{ background: v.stage }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.preview}
                    alt={`Logo QuillaBlocks ${lockup.label.toLowerCase()}, ${v.name.toLowerCase()}`}
                    style={{ height: v.height }}
                    className={`max-w-full object-contain ${v.avatar ? "rounded-xl" : ""}`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col gap-3 p-3">
                  <span>
                    <span className="block text-sm font-bold text-white">{v.name}</span>
                    <span className="block text-[12px] leading-snug text-[var(--qb-muted)]">{v.note}</span>
                  </span>
                  <span className="mt-auto flex gap-1.5">
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
      ))}
    </div>
  );
}
