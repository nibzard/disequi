import type { ReactNode } from "react"
import "./globals.css"
import "../styles/syntax-highlight.css"
import { PerformanceMonitor } from "./components/performance-monitor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disequi - Transforming Ideas",
  description:
    "Disequi helps businesses achieve equilibrium between innovation and stability through our proven process of divergence and convergence.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "innovation, business transformation, digital strategy, technology consulting, Split, Croatia",
  authors: [{ name: "Disequi LLC", url: "https://disequi.com" }],
  generator: 'v0.dev',
  metadataBase: new URL("https://disequi.com"),
  // Open Graph metadata defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://disequi.com",
    siteName: "Disequi",
    title: "Disequi - Transforming Ideas",
    description: "Disequi helps businesses achieve equilibrium between innovation and stability through our proven process of divergence and convergence.",
    images: [
      {
        url: "https://disequi.com/api/thumbnail?seed=123456",
        width: 1200,
        height: 630,
        alt: "Disequi - Transforming Ideas",
      },
    ],
  },
  // Twitter Card metadata defaults
  twitter: {
    card: "summary_large_image",
    site: "@disequi",
    creator: "@disequi",
    title: "Disequi - Transforming Ideas",
    description: "Disequi helps businesses achieve equilibrium between innovation and stability through our proven process of divergence and convergence.",
    images: ["https://disequi.com/api/thumbnail?seed=123456"],
  },
  // Verification
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  // Robots
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Structured data for Organization - should be on all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Disequi",
              "url": "https://disequi.com",
              "logo": "https://disequi.com/favicon.ico",
              "sameAs": [
                "https://twitter.com/disequi",
                "https://linkedin.com/company/disequi",
                "https://facebook.com/disequi"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+385-123-456-789",
                "contactType": "customer service",
                "availableLanguage": ["English", "Croatian"]
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}