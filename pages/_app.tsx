import '../styles/globals.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/400.css'

import Head from 'next/head'
import HeadTags from '../components/common/HeadTags'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/override.css";
import { ReactElement, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import SiteLayout from '../layouts/Default'
import { NextPage } from 'next'

type GetLayout = (page: ReactNode) => ReactElement
type PageWithLayout = NextPage & {
  getLayout: GetLayout
}

interface MyAppProps {
  Component: PageWithLayout
  pageProps: unknown
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('RVQXQDGO', {
      includedDomains: ['www.MyCovidTime.in', 'my-covid-time.vercel.app', 'localhost:3000'],
    })

    function onRouteChangeComplete(): void {
      Fathom.trackPageview()
    }

    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  const getLayout = Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'My Covid Time',
    alternateName: 'MyCovidTime.in',
    url: process.env.BASE_URL,
    logo: '/img/logo.jpg',
    sameAs: [
      'https://www.facebook.com/MyCovidTime',
      'https://twitter.com/MyCOVIDTime_IN',
      'https://www.instagram.com/MyCovidTijme_IN/',
      'https://github.com/my-covid-time/www',
      'https://MyCovidTime.in',
    ],
  }

  return getLayout(
    <>
      <Head>
        <link key="favicon" rel="icon" href="/favicon.ico" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@MyCOVIDTime_In" />
        <meta property="og:type" content="website" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <HeadTags />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
