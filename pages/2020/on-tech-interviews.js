import Link from 'next/link'
import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="On tech interviews" date="October 30, 2020" />

    <P>
      After doing a lot of interviews during{' '}
      <Link href={links[0]}>two job changes in the last two years</Link> I
      picked up a thing or two about interviewing, collectively between sending
      résumés, having calls, coding exercises and technical interviews, as well
      as interviewing people myself, I racked up over 100 'interview stages',
      and I have been approached by many people about tips on interviewing, this
      post summarizes most of the things I talk about.
    </P>

    <P>
      There are plenty of articles out there bashing technical interviews for
      being excessively complicated at often including unrelated exercises to
      the skills the job position you are applying for. Make no mistake,
      interviewing is it's own skill, and since changing jobs is one of the
      fastest way to increase your earnings, it can be a skill worth millions of
      dollars as evidenced by many businesses addressing the need to interview
      prep.
    </P>

    <H2 id="initial-call">Initial call</H2>

    <P>
      Usually the first step after getting your CV noticed is to schedule a call
      with a recruiter, it lasts roughly 30 minutes and it's unlikely that there
      will be technical questions asked unless stated previously.
    </P>

    <P>
      During the initial call the recruiter will probably give further
      information about the position and the company, they might also ask you
      for an introduction and discuss motivation, knowledge and expectations
    </P>

    <P>
      This might be a good time to get your first questions in, screen about
      salary expectations, how long would it take to get feedback on each stage,
      and other general company information you are concerned about, if it's a
      startup, information on growth, financial health and recent developments
      can be very important.
    </P>

    <P>
      As a rule of thumb you should always have questions prepared at every step
      of the interview, it allows you to gather more information and it shows
      interest. It is also useful to read the job posting again a few hours
      before each interview to avoid unnecessary questions.
    </P>

    <H2>Coding challenges</H2>

    <P>
      Many companies will present some coding challenge to a candidate to test
      coding ability before taking more time to interview them, usually with a
      platform like{' '}
      <a href={links[1]} target="_blank">
        Codility
      </a>{' '}
      or{' '}
      <a href={links[2]} target="_blank">
        HackerRank
      </a>
      . Most of the times these tests will be some simple logic/algorithm
      challenge and won't involve much complexity, usually with a long form text
      with examples for input and expected output that serve as test cases,
      often they can be automatically graded and won't be reviewed by a human
      interviewer.
    </P>

    <P>
      These tests will usually have some restrictions on what programming
      language or environment you can code in, sometimes you just need to
      complete some snippet while others you might have to parse input from
      STDIN, they are often timed, from 1-3 hours depending on complexity, most
      HackerRank tests include three problems of varying difficulty and some
      companies might require you to solve only 2 out of 3.
    </P>

    <P>
      Always opt to do them in languages that are used by the company or
      referenced in the job description, otherwise choose the languages you're
      most comfortable with but that should be widely used in the industry, such
      as Python or JavaScript. Since they are timed I recommend finding an
      isolated space where you can do them without interruptions, always do a
      practice run with the platform of choice to make sure it will perform well
      enough when you're doing the actual test, also, some of these record the
      status of the screen continuously so it's better to write code directly in
      the browser than in your editor then copy pasting it.
    </P>

    <H2>Take home assignments</H2>

    <P>
      Similar to coding challenges, take home assignments are handed as a way to
      scan candidates before dedicating more interviewer time, however they are
      usually expected to be done in days or even a week, they usually consist
      of a practical task which includes building a working application
      including tests, some companies will still request you to timebox up to a
      few hours and see how far you can go with it.
    </P>

    <P>
      These are great to showcase different types of knowledge in application
      development, from writing tests, to focus on user interface and usability,
      coding standards and organization, there are many ways reviewers can
      evaluate your code, often there will be restrictions on what languages or
      frameworks you can use, and once again, in case there isn't prefer to use
      something the company utilises or that is widely known instead of some
      obscure tech, I've seen many candidates trying to use different tools to
      try and trick reviewers who are not as likely to understand the code.
    </P>

    <P>
      One important thing to note here is that it's not just code that counts,
      reviewers might not notice but you can stand out by writing good and
      detailed commit messages, a detailed README with clear instructions how to
      run the application and its features, and informative comments that help
      navigate the code, even deploying the application somewhere to be quickly
      tested is a plus.
    </P>

    <H2>Whiteboarding</H2>

    <P>
      Whiteboarding is one of the most feared types of interview by developers,
      it involves writing code in a whiteboard with a pen instead of using an
      editor or an IDE, problems are usually of algorithmic nature and are
      dictated by the interviewer at the beginning of the interview and timed
      between 30 minutes to an hour.
    </P>

    <P>
      Lots of people get very nervous when doing these types of interviews, the
      best way to be prepared is to just practice on pen and paper yourself,
      some people will even practice on a real whiteboard but I think that's not
      necessary, it might make you better at using the space available, however.
    </P>

    <P>
      A big mistake many developers will commit is to start writing on the board
      right away to save time, what you should do instead is repeat the problem
      out loud in your own words to communicate with your interviewer and to ask
      questions before jumping in, most of these interviews expect you to dig
      around the problem to understand edge cases, limitations or solution sets.
    </P>

    <P>
      It is also important to choose a widely known programming language, Python
      is a good choice because it requires you to write less, it helps picking a
      language most developers know because interviewers can jump in and ask
      details about constructs as well as suggest potential fixes on the go.
    </P>

    <P>
      The best whiteboard interviews I've had are the ones that start with a
      simple premise so you can get some code on the board and increase in
      complexity as the interviewers add further exercises to the problem,
      expecting you to adjust your code as needed. This way you'll be judged on
      how far you've gotten and you don't necessarily have to have solved
      everything.
    </P>

    <P>
      The biggest companies like Google, Amazon and Facebook are famous for
      these types of interviews, many of them already allow you to type your
      solutions in a simple editor instead of a whiteboard, in any case, if you
      still face a whiteboard, some people recommend you to bring your own pens
      to not have to waste time having to finding working ones at the interview
      site.
    </P>

    <H2>Systems Design</H2>

    <P>
      I feel systems design is one of the most difficult types of interview out
      there, as they are usually quite open ended and varying in complexity.
      They are often overlooked as most people focus on getting their algorithms
      right, I only found a few YouTube videos and a handful of articles as
      study material for systems design.
    </P>

    <P>
      In systems design interviews you'll be asked to draw on a whiteboard the
      components of a hypothetical system that is often inspired by a real life
      service like Twitter or OpenTable, these components can range from
      interface design, database design, interactions between services and third
      parties, asynchronous operations and consistency, and many other traits.
    </P>

    <P>
      Just like an algorithms whiteboard interview, it's important to keep it as
      a conversation, often bouncing ideas and questions from the interviewers
      to discuss possible solutions and understand what they are looking for,
      there is usually not a single definitive answer.
    </P>

    <P>
      Most systems design questions in web applications will often involve
      understanding scalability for up to millions of users, so brush up on your
      understanding of horizontal and vertical scalability, load balancers,
      async operations, database design and replication.
    </P>

    <H2>Technical interviews</H2>

    <P>
      I've seen varying types of technical interview, often asking about
      knowledge in different types of concepts like testing or microservices, or
      knowledge of specific technologies like language internals, for instance,
      describing the JavaScript event loop.
    </P>

    <P>
      You might also get asked about your own experiences with these different
      technologies, you might as well come prepared with anecdotes described in
      the{' '}
      <a href={links[3]} target="_blank">
        STAR model
      </a>
      , which is a good way to be able to showcase what you've done so far that
      might be relevant to your interviewers.
    </P>

    <H2>General tips & Resources</H2>

    <P>
      Always get feedback from your interviewers, especially if you didn't get
      an offer, so you can improve in the future. If you are applying for
      multiple roles it might be useful to keep a spreadsheet with all your
      applications where you can gather all feedback
    </P>

    <P>
      Asking your interviewers for a time frame when you might hear back is a
      good way to reduce anxiety, so you can ping them if they don't respond
      within the agreed time frame.
    </P>

    <P>
      Always ask questions at every single stage of the interview, do your
      homework on the company to be able ask more relevant questions.
    </P>

    <P>
      Some people like to do practice or mock interviews and there are service
      which you can use for that, however, the best practice is to get real
      interviews with real stakes and get some experience.
    </P>

    <P>
      <a href={links[4]} target="_blank">
        Cracking the Coding Interview
      </a>{' '}
      is probably the most well known book out there to practice algorithm
      questions, it is one of the best too, it is succinct and complete with all
      you need to know about algorithms and data structures for interview, you
      should also do some practice problems in one of the many coding challenge
      websites out there, my favorites are{' '}
      <a href={links[2]} target="_blank">
        HackerRank
      </a>{' '}
      and{' '}
      <a href={links[5]} target="_blank">
        LeetCode
      </a>
      .
    </P>

    <P>
      I will try to keep this post updated the more I become knowledgeable about
      the topic, for now, I hope you enjoyed it, and good luck in your
      interviews! If you found this post useful I would love to hear feedback
      about it, you can reach me on twitter{' '}
      <a href={links[6]} target="_blank">
        @mgrisoli
      </a>
      .
    </P>
  </Post>
)

const links = [
  'an-unlikely-update',
  'https://www.codility.com/',
  'https://www.hackerrank.com/',
  'https://en.wikipedia.org/wiki/Situation,_task,_action,_result',
  'http://www.crackingthecodinginterview.com/',
  'https://leetcode.com/',
  'https://twitter.com/mgrisoli',
]

export default Article
