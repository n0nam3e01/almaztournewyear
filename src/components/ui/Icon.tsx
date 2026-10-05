import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  diagonal: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  pin: (
    <>
      <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="15" rx="4" />
      <path d="M5 10h14M12 3v7M8 18l-3 3M16 18l3 3" />
      <circle cx="8.5" cy="14" r=".5" />
      <circle cx="15.5" cy="14" r=".5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M17 4a3 3 0 0 1 0 6M21 21v-3a6 6 0 0 0-4-5.6" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18v-7h18v7M3 18v3M21 18v3M3 11V5h18v6M6 11V8h4v3M14 11V8h4v3" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v8a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5ZM17 9h2a3 3 0 0 1 0 6h-2M7 2v3M12 2v3" />
    </>
  ),
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6ZM8 12l3 3 5-6" />
    </>
  ),
  plane: <path d="m22 2-8 20-4-8-8-4 20-8ZM10 14 22 2" />,
  passport: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="10" r="4" />
      <path d="M8 10h8M12 6c2 3 2 5 0 8M12 6c-2 3-2 5 0 8M9 18h6" />
    </>
  ),
  utensils: (
    <>
      <path d="M4 3v6a3 3 0 0 0 6 0V3M7 3v18M20 3c-4 2-4 7-4 10h4M20 3v18" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v9h14v-9M12 8v13M12 8H8a3 3 0 1 1 3-3l1 3ZM12 8h4a3 3 0 1 0-3-3l-1 3Z" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  star: (
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
  ),
  download: (
    <>
      <path d="M12 3v12M7 10l5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M21 11.6a9 9 0 0 1-13.6 7.8L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
      <path d="M8.1 7.5c.8 4.4 3.2 6.8 7.6 7.7l1.1-2.1-2.5-1.3-1 1c-1.6-.7-2.9-2-3.5-3.5l1-1-1.3-2.4-1.4 1.6Z" />
    </>
  ),
};
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.arrow}
    </svg>
  );
}
