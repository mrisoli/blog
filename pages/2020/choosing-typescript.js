import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'
import {H2} from '../../components/post/heading'

const Article = () => (
  <Post>
    <Header
      title="Choosing Typescript"
      date="September 9, 2020"
    />

    <P>
      Introduction, interview anecdote
      Sometime ago while going through a technical interview I was asked about several topics, including preferences over typed versus untyped languages(without much detail of statically-typed, duck-typed or any specific typing system), I have no strong preference but I spoke of using Typescript over Javascript since it was a frontend interview and how I had an impression of that helping with testing, the interviewers agreed and one of them replied claiming "static typing reduces on average 35% the need for unit tests". I didn't entertain that discussion further because it wasn't my focus, but that statement caught my attention.
    </P>

    <P>
      I did not progress further after that interview, I received some shallow feedback which talked about some of my answers from the conversation which I had mixed feelings about. It was ultimately the interviewers impressions of that conversation that led to a decision to not move forward with my application. That interview included a lot of information on the company's tech stack and architecture as well as I got to know some of the interviewers biases and preferences towards things such as static typing and microservices. It felt like a very buzzword-y conversation and they had strong opinions on what seems the latest trends in programming.
    </P>

    <P>
      Afterwards I did some further searching into that statement, how important is the relation between static typing and unit tests, its easy to find articles claiming percentages of 15% bug reduction and up, I traced it back to{' '}
      <a href={links[0]} target="_blank">
        this article
      </a>{' '}
      which discusses the flame wars between static vs dynamic typing especifically citing Typescript and Flow. It includes empyrical data and explains the process in which they came up with the numbers and closes without a hard conclusion but leaves to the reader to decide whether adopting a statically typed language over Javascript is worth it.
    </P>

    <P>
      It's a good article, and could be useful for many developers, however it's hardly scientific and I would not make any business decisions based on just that. After that interview I concluded that while it wasn't the only reason I was rejected, these articles effectively weighted against a business decision not just on whether to hire someone but many other aspects of that company's product development, and that's a very dangerous predicate.
    </P>

    <H2>On 'The Typescript Tax'</H2>

    <P>
      Fast forward and I'm starting a new job at another company that does not use Typescript, they are hiring fast and a large number of developers are particurlaly fond of Typescript and spark a discussion whether or not to adopt it. As a company with established processes there's the need to create a proposal and discuss pros and cons and while there were very few people with strong opposition to its adoption, those who were heavy antagonists of using Typescript had some good points, and eventually the famous{' '}
      <a href={links[0]} target="_blank">
        'Typescript tax' article
      </a>{' '}
      popped up, this might be one of the most well written piece against the adoption of Typescript by an experienced developer with over 100k followers on Medium.
    </P>

    <P>
      The article includes a series of charts including Google Trends on Typescript and others that seem to indicate interest and community in Typescript are growing, while having a big prolific community is a big plus for a programming language, I wouldn't take my technical decisions to Google Trends.
    </P>

    <P>
      It is followed by a chart with arbitrary scores for costs and benefits of static typing for an undisclosed number of projects which conclude there's a significant net negative of adopting Typescript, each of those points is addressed in detail and there are several statements in bold, mostly reinforcing the negative aspects. Notably one discussing recruiting where he claims the survey indicates Typescript can cause a 20% reduction in the recruiting pool while that is not a direct consequence, while the same question indicates over 80% positive feeling towards Typescript. There are also assumptions without proper data countering Airbnb's success case of adopting Typescript.
    </P>

    <H2>Technical articles and SEO</H2>

    <P>
      About SEO
    </P>

  </Post>
)

const links = [
  'https://blog.acolyer.org/2017/09/19/to-type-or-not-to-type-quantifying-detectable-bugs-in-javascript/',
]

export default Article
