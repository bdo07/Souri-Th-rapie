import type { Metadata } from 'next'
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {

  return {
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
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
        'ar': '/ar',
      },
    },
    openGraph: {
      title: 'Souri Thérapie - Wellness & Beauty Clinic',
      description: 'Comprehensive health and aesthetic services for your well-being and beauty.',
      url: `https://souri-therapie.com/${locale}`,
      siteName: 'Souri Thérapie',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Souri Thérapie - Wellness & Beauty Clinic',
        },
      ],
      locale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'ar_SA',
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
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering by setting the locale
  setRequestLocale(locale)
  
  // Get messages for the current locale
  const messages = await getMessages()
  
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={locale === 'ar' ? 'font-arabic' : 'font-english'}>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
} 