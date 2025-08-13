import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Souri Thérapie - Wellness & Beauty Clinic',
  description: 'Comprehensive health and aesthetic services including physical therapy, laser treatments, cupping therapy, and acupuncture. Your trusted wellness partner.',
  keywords: 'wellness, beauty, physical therapy, laser treatments, cupping therapy, acupuncture, health clinic',
  authors: [{ name: 'Souri Thérapie' }],
  creator: 'Souri Thérapie',
  publisher: 'Souri Thérapie',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://souri-therapie.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Souri Thérapie - Wellness & Beauty Clinic',
    description: 'Comprehensive health and aesthetic services for your well-being and beauty.',
    url: 'https://souri-therapie.com',
    siteName: 'Souri Thérapie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Souri Thérapie - Wellness & Beauty Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Souri Thérapie - Wellness & Beauty Clinic',
    description: 'Comprehensive health and aesthetic services for your well-being and beauty.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 