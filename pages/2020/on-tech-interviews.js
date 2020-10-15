import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="On tech interviews" date="October 16, 2020" />

    <P>Did a lot of interviews in the last two years</P>
    <P>Know a thing or two</P>
    <P>Interview is a skill</P>

    <H2>Initial call</H2>

    <P>Almost no technical questions</P>
    <P>Ask about interview process, feedback loop, wide company information, position specific information</P>

    <H2>Coding challenges</H2>

    <P>Filter candidates before tech interviews</P>
    <P>Use lots of resources, prepare yourself ahead of time, ensure everything is working</P>

    <H2>Take home assignments</H2>

    <P>Pay attention to coding standards, don't be sloppy</P>
    <P>Commit messages, README's and non code counts</P>

    <H2>Whiteboarding</H2>

    <P>Come prepared, choose your language wisely</P>

    <P>Ask lots of questions and maintain it a collaborative process, communication is key</P>

    <H2>Systems Design</H2>

    <P>Most difficult and often overlooked</P>
    <P>Keep it a conversation like whiteboarding</P>

    <H2>Technical interviews</H2>

    <P>Still don't understand much, just name drop some tech</P>
    <P>Questions about language internals and concepts</P>

    <H2>General tips & Resources</H2>

    <P>Best practice is to have real interviews</P>
    <P>CTCI, hackerrank, leetcode, topcoder, codechef</P>

  </Post>
)

export default Article
