import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'
import {H2} from '../../components/post/heading'

const Article = () => (
  <Post>
    <Header title="Choosing Typescript" date="September 10, 2020" />

    <P>
      Introduction, interview anecdote Sometime ago while going through a
      technical interview I was asked about several topics, including
      preferences over typed versus untyped languages(without much detail of
      statically-typed, duck-typed or any specific typing system), I have no
      strong preference but I spoke of using Typescript over JavaScript since it
      was a front-end interview and how I had an impression of that helping with
      testing, the interviewers agreed and one of them replied claiming "static
      typing reduces on average 35% the need for unit tests". I didn't entertain
      that discussion further because it wasn't my focus, but that statement
      caught my attention.
    </P>

    <P>
      I did not progress further after that interview, I received some shallow
      feedback which talked about some of my answers from the conversation which
      I had mixed feelings about. It was ultimately the interviewers impressions
      of that conversation that led to a decision to not move forward with my
      application. That interview included a lot of information on the company's
      tech stack and architecture as well as I got to know some of the
      interviewers biases and preferences towards things such as static typing
      and microservices. It felt like a very buzzword-y conversation and they
      had strong opinions on what seems the latest trends in programming.
    </P>

    <P>
      Afterwards I did some further searching into that statement, how important
      is the relation between static typing and unit tests, its easy to find
      articles claiming percentages of 15% bug reduction and up, I traced it
      back to{' '}
      <a href={links[0]} target="_blank">
        this article
      </a>{' '}
      which discusses the flame wars between static vs dynamic typing
      specifically citing Typescript and Flow. It includes empirical data and
      explains the process in which they came up with the numbers and closes
      without a hard conclusion but leaves to the reader to decide whether
      adopting a statically typed language over JavaScript is worth it.
    </P>

    <P>
      It's a good article, and could be useful for many developers, however it's
      hardly scientific and I would not make any business decisions based on
      just that. After that interview I concluded that while it wasn't the only
      reason I was rejected, these articles effectively weighted against a
      business decision not just on whether to hire someone but many other
      aspects of that company's product development, and that's a very dangerous
      predicate.
    </P>

    <H2>On 'The Typescript Tax'</H2>

    <P>
      Fast forward and I'm starting a new job at another company that does not
      use Typescript, they are hiring fast and a large number of developers are
      particularly fond of Typescript and spark a discussion whether or not to
      adopt it. As a company with established processes there's the need to
      create a proposal and discuss pros and cons and while there were very few
      people with strong opposition to its adoption, those who were heavy
      antagonists of using Typescript had some good points, and eventually the
      famous{' '}
      <a href={links[1]} target="_blank">
        'Typescript tax' article
      </a>{' '}
      popped up, this might be one of the most well written piece against the
      adoption of Typescript by an experienced developer with over 100k
      followers on Medium.
    </P>

    <P>
      The article includes a series of charts including Google Trends on
      Typescript and others that seem to indicate interest and community in
      Typescript are growing, while having a big prolific community is a big
      plus for a programming language, I wouldn't take my technical decisions to
      Google Trends.
    </P>

    <P>
      It is followed by a chart with arbitrary scores for costs and benefits of
      static typing for an undisclosed number of projects which conclude there's
      a significant net negative of adopting Typescript, each of those points is
      addressed in detail and there are several statements in bold, mostly
      reinforcing the negative aspects. Notably one discussing recruiting where
      he claims the survey indicates Typescript can cause a 20% reduction in the
      recruiting pool while that is not a direct consequence, while the same
      question indicates over 80% positive feeling towards Typescript. There are
      also assumptions without proper data countering AirBnB's success case of
      adopting Typescript.
    </P>

    <H2>Technical articles and SEO</H2>

    <P>
      Now, unlike most articles on the web, the above mentioned article actually
      contains many links and sources to support its position even if it reaches
      its conclusion if a dubious bias, it reaches its objective which is not to
      educate the average developer in a proper choice, but to generate clicks,
      views and likes. Alongside the article you will find links to products
      marketed by the author, the article also includes links to some of the
      author's other posts including a post about decentralized applications
      which I found somewhat unrelated.
    </P>

    <P>
      The reason for that is obvious, a long well written article with extensive
      content is part of an SEO strategy, it's just controversial enough to
      generate buzz and virality, increasing the author's audience reach which
      ultimately drives sales of his products up. An article about the impact of
      choosing a language is likely to rank high for searches coming from people
      with intention to make technical decisions about their tech stack, which
      probably fits the target audience for the developer related products
      advertised.
    </P>

    <P>
      Now, there's still useful information in articles like these, it is up to
      the reader to figure out how to utilize such information. It is however
      concerning how there's a flood of shallow content geared towards queries
      such as 'Typescript pros and cons' or 'Typescript vs JavaScript' which
      ultimately cause significant decisions to be made in companies for the
      sake of SEO. Since Google's update to its algorithms to prioritize long
      form content, even simple queries about small technical questions such as
      library references documentation will have lengthened but otherwise thin
      articles ranking above canonical information or useful StackOverflow
      threads.
    </P>

    <P>
      I don't have a final conclusion for this except it ends up with me
      avoiding articles written in sites like Medium or{' '}
      <a href={links[0]} target="_blank">
        dev.to
      </a>
      , as most articles in these platforms are geared towards leveraging their
      large audience for SEO to build authority with simple and viral content.
      I'd take any article written with SEO principles as a first concern with a
      grain of salt.
    </P>
  </Post>
)

const links = [
  'https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript/',
  'https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b',
  'https://dev.to/',
]

export default Article
