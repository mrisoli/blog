import Header from '../header'
import reset from '../../css/reset'
import typography from '../../css/typography'
import colors from '../../css/colors'

const Layout = ({children }) => {
  return (
    <main>
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
