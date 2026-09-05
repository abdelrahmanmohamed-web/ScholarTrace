import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fraunces, plexMono, plexSans } from "./fonts";

export const metadata: Metadata = {
  title: "ScholarTrace",
  description:
    "ScholarTrace — continuous academic reference monitoring. Track cited papers, catch retractions early, and keep an auditable record of citation integrity.",
  openGraph: {
    title: "ScholarTrace",
    description: "Continuous academic reference monitoring for researchers and universities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarTrace",
    description: "Continuous academic reference monitoring for researchers and universities.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        fraunces.variable,
        plexSans.variable,
        plexMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
