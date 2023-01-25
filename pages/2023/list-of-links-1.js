import Link from 'next/link'
import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <>
    <Post>
      <Header title="List of links" date="January 25, 2023" />
      <P>
        I've long been a fan of content curation, I believe there's a big future
        for it in the web, as an avid researcher and procrastinator of different
        things online, I've decided to collect some of my interesting findings
        and present here as (probably unfrequent) updates.
      </P>
      <H2>Apps & Products</H2>
      <ul>
        <li>
          <b>
            <Link href={links[0]}>Moodistory</Link>
          </b>{' '}
          - I've dug around for productivity and mood tracker apps to start the
          year, while I ended up with a different solution, I really liked the
          design of Moodistory, it uses some of the more basic designs of mobile
          UX really well unlike most modern apps.
        </li>
        <li>
          <b>
            <Link href={links[1]}>Everyday.app</Link>
          </b>{' '}
          - A habit tracker made by an Indie developer, really well designed and
          gets frequent updates.
        </li>
      </ul>
      <H2>Articles</H2>
      <ul>
        <li>
          <b>
            <Link href={links[2]}>NYC Slice</Link>
          </b>{' '}
          - I love these informal dives into statistical information of mundane
          things, in this case the prices of NYC slices, there is some really
          interesting data visualization and insights here.
        </li>
        <li>
          <b>
            <Link href={links[3]}>The Cab Ride I'll Never forget</Link>
          </b>{' '}
          - This was a touching tale of a different time, it leaves you wanting
          more and it's really well written, it's rare to find stories like this
          in the web these days.
        </li>
        <li>
          <b>
            <Link href={links[4]}>How the Blog Broke the Web</Link>
          </b>{' '}
          - I am a big fan of the tales of the history of the web, it's useful
          to understand how we got where we are, and maybe have insights as to
          where we are going, before social media, the blog revolutionized the
          web.
        </li>
      </ul>
      <H2>Videos</H2>
      <ul>
        <li>
          <b>
            <Link href={links[5]}>The PROBLEM with Minimalism</Link>
          </b>{' '}
          - I was big on minimalism for a while, I looked for simple and
          combining solutions, usually to try to reduce the volume of things I
          carried around with me, but this video dives deep well into what went
          wrong with minimalism culture, Future Proof channel in general has
          great videos on modern staples and usually touches environmentall
          impact.
        </li>
        <li>
          <b>
            <Link href={links[6]}>The (secret?) recipe behind our videos</Link>
          </b>{' '}
          - A video about the editing and creation process of Slidebean's
          videos, which are of extremely high quality, I highly advise going
          around their channel for their other videos, especially the Paypal
          story, sometimes I think Slidebean has a better future as video
          production than from its products.
        </li>
      </ul>
      <H2>Repos & Open Source</H2>
      <ul>
        <li>
          <b>
            <Link href={links[7]}>uselotus/lotus</Link>
          </b>{' '}
          - A toolchain for different pricing techniques, an often overlooked
          part of SaaS.
        </li>
        <li>
          <b>
            <Link href={links[8]}>catppuccin</Link>
          </b>{' '}
          - A collection of color themes and pallettes for a really nice pastel
          theme.
        </li>
        <li>
          <b>
            <Link href={links[9]}>mrisoli/brega-stack</Link>
          </b>{' '}
          - This is a repo I created myself(shameless plug), a Remix stack based
          upon other stacks.
        </li>
      </ul>
    </Post>
  </>
)

const links = [
  'https://moodistory.com/',
  'https://everyday.app/',
  'https://elkue.com/nyc-slice/',
  'https://kentnerburn.com/the-cab-ride-ill-never-forget/',
  'https://stackingthebricks.com/how-blogs-broke-the-web/',
  'https://www.youtube.com/watch?v=3INFBvKbLvs', // problem with minimalism
  'https://www.youtube.com/watch?v=U7DCiPy1xXg', // slidebean video production
  'https://github.com/uselotus/lotus',
  'https://github.com/catppuccin',
  'https://github.com/mrisoli/brega-stack',
]

export default Article
