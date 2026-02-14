import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SmileCity Orthodontic and Dental Clinic | Best Orthodontist in Gurgaon, Haryana",
  description: "Dr. K. Purnasri (MDS Orthodontist, Aligner Specialist, Invisalign Certified Provider). Located at Sector 65, Gurgaon. Specialist-driven orthodontic care.",
  keywords: "Dr. K. Purnasri, Orthodontist, Aligner Specialist, Invisalign Gurgaon, SmileCity Orthodontic and Dental Clinic, Sector 65 Gurgaon Dentist, Braces",
  authors: [{ name: "Dr. K. Purnasri" }],
  creator: "SmileCity Orthodontic and Dental Clinic",
  publisher: "SmileCity Orthodontic and Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smilecitygurgaon.com/'), // Updated URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SmileCity Orthodontic and Dental Clinic | Expert Orthodontic Care",
    description: "Dr. K. Purnasri - 8+ Years Experience. M3M 65th Avenue, Sector 65, Gurgaon.",
    url: 'https://smilecitygurgaon.com/',
    siteName: "SmileCity Orthodontic and Dental Clinic",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "SmileCity Orthodontic and Dental Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SmileCity Orthodontic and Dental Clinic",
    description: "Expert Orthodontic Care in Gurgaon",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
