import Link from 'next/link'
import json from '../posts'

const PostList = () => {
  return (
    <ul>
      {json.posts.map(post => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={`${new Date(post.date).getFullYear()}/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        ul li {
          padding: 10px 15px;
        }
        ul li span {
          color: var(--ui-item-color);
          display: block;
          font-size: 13px;
        }
        ul li a {
          font-weight: bold;
          color: var(--link-color);
          text-decoration: none;
        }
        @media (any-hover: hover) {
          ul li a:hover {
            background-color: var(--ui-item-color-hover);
          }
          ul li a:active {
            background-color: var(--ui-item-color-active);
          }
        }
        @media (min-width: 500px) {
          ul {
            padding: 20px 0;
            max-width: 42rem;
            margin: auto;
          }
          ul li {
            padding-left: 0;
          }
          ul li a {
            padding: 10px 15px;
            transition: 150ms background-color ease-in;
          }
          ul li span {
            display: inline-block;
            width: 160px;
            padding-right: 10px;
            text-align: right;
            font-size: inherit;
          }
        }
      `}</style>
    </ul>
  )
}

export default PostList
