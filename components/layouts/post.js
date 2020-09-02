import Page from './main'

export default ({children}) => (
  <Page>
    <main>
      <article>{children}</article>
    </main>

    <style jsx>{`
      main {
        padding: 15px;
        font-size: 18px;
      }
      @media (min-width: 500px) {
        max-width: 42rem;
        margin: auto;
      }
    `}</style>
  </Page>
)
