import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2  from '../../components/post/heading'
import P from '../../components/post/paragraph'
import PreziDesign from '../../components/prezi'
import Typeform from '../../components/typeform'

const Article = () => (
  <>
    <Post>
      <Header title="Quick no-code mashup" date="April 23, 2021" />

      <H2>Hackathons</H2>

      <P>
        At my current job we get to do these hackathon sprints where we can kind
        of experiment with different things, I've had similar versions of this
        at different company, some really fun projects come out of it, the
        latest one specifically we dedicated our time to produce content.
      </P>

      <P>
        While I was already writing a little bit, I took the opportunity to come
        up with different ideas and concepts to follow up, I decided to try a
        little no-code hack based on a previous project. To combine respondent
        data from forms and generate interesting and complex data visualization
        widgets. My initial idea was to create some data visualization from
        scratch with JavaScript.
      </P>

      <P>
        Then I realized I could leverage tools from a previous employer to hack
        a quick prototype without writing any code, so it would be an
        interesting way to glue together two products I love and have worked on
        previously, I would use Typeform to gather responses for a simple survey
        and Prezi/Infogram to display results in a creative way.
      </P>

      <H2>Demo time</H2>

      <P>
        First, we create a simple Typeform and embed, you can create your own
        response here:
      </P>

      <Typeform />

      <P>
        Next, by using Typeform's integration with Google Sheets, I can have a
        up to date spreadsheet of responses
      </P>

      <P>
        Now to display that data we use Prezi/Infogram to create infographics
        where we do a simple correlation between countries and color choice, and
        I can have a live updated infographic:
      </P>

      <PreziDesign />

      <H2>Conclusion</H2>

      <P>
        This was my first no-code "project", it was pretty easy and quick to
        make, it does require maybe some fiddling with and cleanup to be able to
        match datasets(such as country names between the map infographic and the
        respondent options), in the future I would like to have the infographic
        to be able to poll and transform live data from an API which does
        require a little bit of code to write, but this was a good start.
      </P>
    </Post>
  </>
)

export default Article
