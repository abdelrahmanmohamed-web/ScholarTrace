// app/fonts.ts
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// Headlines only, used sparingly per the design — one weight is enough.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body/UI: 400 for regular text, 500 for labels/emphasis, 600 for buttons & sub-headers.
// Drop 500 or 600 below if you end up not using them anywhere.
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

// Metadata only (DOIs, dates, counts, status codes) — no bold usage in the design, so one weight.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
});
