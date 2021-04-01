import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2, {H3} from '../../components/post/heading'
import P from '../../components/post/paragraph'
import PreziDesign from '../../components/prezi'
import Typeform from '../../components/typeform'

const Article = () => (
  <>
    <Post>
      <Header title="Hive Sprint test" date="March 31, 2021" />

      <P>
        Intro(Prezi/Infogram to TF, Hive Sprint project, data viz, results)
      </P>

      <H2>How to</H2>

      <P>
        Create TF, hook up TF to google sheets, create aggregate table
      </P>

      <P>
        Create Infogram, hook up infogram to aggregate sheet.
      </P>

      <H2>Demo</H2>

      <H3>Survey</H3>

      <Typeform />

      <H3>Infographic</H3>

      <PreziDesign />

      <H2>Conclusion & Follow up</H2>

      <P>
        Should be native in TF, make own D3 data viz, complex associations.
      </P>

    </Post>
  </>
)

// const links = []

export default Article
