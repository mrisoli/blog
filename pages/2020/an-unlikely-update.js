import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="An Unlikely Update" date="September 6, 2020" />

    <P>
      About a year and half ago I started this blog, I initially intended to
      write sporadically, maybe once a month, I ended up writing no more than
      the single initial blog post and then pretty much abandoned it.
    </P>

    <P>
      There's a reason for that, a lot has changed, when I wrote the original
      blog post I was living in Budapest in the midst of a job change, I would
      move to Stockholm where I stayed for about 9 months, while Stockholm is an
      exciting city with lots to offer I never felt quite at home, so I ended up
      finding another job and moving to Barcelona and joining{' '}
      <a href={links[0]} target="_blank">
        Typeform
      </a>{' '}
      as a Senior Frontend Engineer earlier this year.
    </P>

    <P>
      This all happened just before COVID-19 spread around the world and
      lockdowns started happening, while my first month in Barcelona was
      exciting and promising it was followed by a strict lockdown and I, like
      many others, have been working remote ever since.
    </P>

    <P>
      While in isolation and remote I've discovered tons of digital content and
      they seem to be proliferating as many people are turning their side
      hustles into businesses with the likes of{' '}
      <a href={links[1]} target="_blank">
        Gumroad
      </a>{' '}
      and{' '}
      <a href={links[2]} target="_blank">
        Leanpub
      </a>
      . I've considered creating something myself, after going through two job
      searches in less than a year I've picked up some knowledge about tech
      interviews which could come in handy for others, however, as of now, I
      have no decided plans to create anything.
    </P>

    <P>
      Also as a minor project I moved this blog from using Gatsby to a more simpler, blog with Next.js ripping off{' '}
      <a href={links[3]} target="_blank">
        rauchg.com
      </a>'s design with some minor modifications and trying out Vercel's hosting and deployment for next.js Websites, I'm happy with the result so far.
    </P>

    <P>
      I still want to come up with some side projects, either some form of
      digital content like an ebook or a newsletter. I've been toying around
      with no code tools and flirting with the idea of working remote as a
      digital nomad, I still don't promote this blog so I am writing randomly
      just whatever comes to my mind, I might still write some posts in the near
      future see if anything becomes discoverable in search engines, if you
      happened to find yourself reading this, keep an eye for updates and more
      informative posts!
    </P>
  </Post>
)

const links = [
  'https://www.typeform.com/',
  'https://gumroad.com/',
  'https://leanpub.com/',
  'https://rauchg.com/',
]
export default Article
