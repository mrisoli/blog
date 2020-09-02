import Head from 'next/head'
import Header from '../header'
import Analytics from '../analytics'
import reset from '../../css/reset'
import typography from '../../css/typography'
import colors from '../../css/colors'

const Layout = ({children}) => {
  return (
    <main>
      <Head>
        <Analytics />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
