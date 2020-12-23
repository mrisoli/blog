import Link from 'next/link'
import {useRouter} from 'next/router'

import {posts} from '../../posts'

import Page from './main'

const Post = ({children}) => {
  const {pathname} = useRouter()
  const postId = pathname.split('/')[2]
  const index = posts.findIndex(post => post.id == postId)
  const prevPost = posts[index + 1]
  const nextPost = posts[index - 1]
  return (
    <Page>
      <main>
        <article>{children}</article>
      </main>
      <footer>
        <div className="nav-link">
          {prevPost && (
            <Link
              href={`/${new Date(prevPost.date).getFullYear()}/${prevPost.id}`}
            >
              <a> ← {prevPost.title}</a>
            </Link>
          )}
        </div>
        <div className="nav-link">
          {nextPost && (
            <Link
              href={`/${new Date(nextPost.date).getFullYear()}/${nextPost.id}`}
            >
              <a>{nextPost.title} →</a>
            </Link>
          )}
        </div>
      </footer>

      <style jsx>{`
        main {
          font-size: 18px;
          margin-bottom: 1.75rem;
          padding: 15px;
        }
        footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }
        .nav-link {
          margin: 0px;
        }
        @media (max-width: 500px) {
          .nav-link {
            padding: 0 1.75rem 0.6rem;
          }
        }
        @media (min-width: 500px) {
          max-width: 42rem;
          margin: auto;
        }
      `}</style>
    </Page>
  )
}

export default Post
