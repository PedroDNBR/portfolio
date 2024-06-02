import { Metadata } from "next";

/**
 * Prod url. Change if needed.
 */
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://pedrogom.es";

const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Pedro Gomes Antunes",
  description:
    "A committed game developer with a passion for conceptualizing and developing game applications.",
  openGraph: {
    siteName: "Pedro Gomes Antunes",
    title: "Pedro Gomes Antunes",
    url,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "follow, index",
};

export default {
  metadata: metadata,
  url,
} as const;
