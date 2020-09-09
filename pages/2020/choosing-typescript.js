import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header
      title="Choosing Typescript"
      date="September 9, 2020"
    />

    <P>Content goes here</P>
  </Post>
)

export default Article
