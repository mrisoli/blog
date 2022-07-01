import Head from 'next/head'
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-86504769-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-86504769-2');
            `,
          }}
        />

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

        {/*
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="risoli"
          data-description="Support me on Buy me a coffee!"
          data-message="If you would like to support me, buy me a coffee!"
          data-color="#FF813F"
          data-position=""
          data-x_margin="18"
          data-y_margin="18"
        ></script>
        */}


        <div className='widget'>
          <a href="https://altcoffee.xyz/p/1656691259313x720406653501259300" target="_blank">
            <img src="https://s3.amazonaws.com/appforest_uf/f1638866811059x775730535897205800/buymeacoffee-crypto.png" alt="Buy Me A Coffee"/>
          </a>
        </div>

        <link rel="canonical" href={`https://risoli.dev${router.pathname}`} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Marcelo Risoli's blog</title>
      </Head>
      <style jsx>{`
        .widget {
          position: absolute;
          bottom: 32px;
          right: 32px;
        }
        .widget img {
          height: 60px;
          width: 60px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
