import Head from 'next/head'
import Script from 'next/script'
import {useRouter} from 'next/router'

export default function MyApp({Component, pageProps}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Personal Blog by Marcelo Risoli. I talk tech"
        />
        <meta name="keywords" content="Blog, Tech, Marcelo Risoli" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://risoli.dev/" />
        <meta property="og:title" content="Marcelo Risoli Blog" />
        <meta
          property="og:description"
          content="Personal Blog by Marcelo Risoli. I talk tech."
        />
        <meta
          property="og:image"
          content="https://en.gravatar.com/userimage/52005801/f8d14e95204e2d58667419f1d3a9b29c.jpg?size=2048"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/mgrisoli" />
        <meta property="twitter:title" content="Marcelo Risoli Blog" />
        <meta
          property="twitter:description"
          content="Personal Blog by Marcelo Risoli. I talk tech."
        />
        <meta
          property="twitter:image"
          content="https://en.gravatar.com/userimage/52005801/f8d14e95204e2d58667419f1d3a9b29c.jpg?size=2048"
        />

        <link rel="canonical" href={`https://risoli.dev${router.pathname}`} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Marcelo Risoli's blog</title>
      </Head>
      <script
        data-name="BMC-Widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        id="buy-me-a-coffee"
        data-id="risoli"
        data-description="Support me on Buy me a coffee!"
        data-message="If you would like to support me, buy me a coffee!"
        data-color="#FF813F"
        data-position=""
        data-x_margin="18"
        data-y_margin="18"
      ></script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZE55BQV2RQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZE55BQV2RQ');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
