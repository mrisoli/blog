import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="Test" date="September 21, 2020" />
    <H2>Header</H2>
    <P>Paragraph</P>
  </Post>
)

export default Article
