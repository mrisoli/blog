import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'
import PreziDesign from '../../components/prezi'
import Typeform from '../../components/typeform'

const Article = () => (
  <>
    <Post>
      <Header title="Hive Sprint test" date="March 31, 2021" />

      <P>
        Test
      </P>

      <H2>Survey</H2>

      <Typeform />

      <H2>Results</H2>

      <PreziDesign />

    </Post>
  </>
)

// const links = []

export default Article
