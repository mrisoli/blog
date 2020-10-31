import Page from './main'

const Post = ({children}) => (
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

export default Post
