import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="Office Hours" date="November 20, 2020" />

    <P>
      A few weeks ago a co-worker inspired me by setting up his own office
      hours, basically you can book time with an individual to have one-on-one
      discussions about selected topics, I found the idea interesting and
      decided to set up my own in a trial basis and see if this works out well.
    </P>

    <H2>Office hours info</H2>

    <P>
      If you would like to try it out, I am making myself available starting
      with limited time for 30-60 minutes meetings to discuss anything related
      to tech, startups, code, or anything else you might find relevant, I'll
      also be available to help with programming lessons for beginners if the
      interest arises.
    </P>

    <P>
      You can book a time slot{' '}
      <a href={links[0]} target="_blank">
        here
      </a>{' '}
      if you're interested.
    </P>
  </Post>
)

const links = ['https://calendly.com/mrisoli']

export default Article
