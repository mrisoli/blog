import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header
      title="Making Technical Decisions on the Internet"
      date="September 7, 2020"
    />

    <P>Content goes here</P>
  </Post>
)

export default Article
