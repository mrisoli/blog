import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../header'
import reset from '../../css/reset'
import typography from '../../css/typography'
import colors from '../../css/colors'

const Layout = ({children }) => {
  const router = useRouter()
  return (
    <main>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-86504769-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-86504769-1');
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal Blog by Marcelo Risoli. I talk tech" />
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
        <link rel="canonical" href={`https://risoli.dev${router.pathname}`} />
        <title>Marcelo Risoli's blog</title>
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header />

      {children}
    </main>
  )
}

export default Layout
