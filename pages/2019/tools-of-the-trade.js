import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import P from '../../components/post/paragraph'
import {H2, H3} from '../../components/post/heading'

const Article = () => (
  <Post>
    <Header title="Tools of the Trade" date="March 27, 2019" />
    <P>
      As I go back to blogging, to write my first post, inspired by{' '}
      <a href={links[0]} target="_blank">
        Wes Bos' usage post
      </a>
      , I would discuss and list the tools I use, either professionally or
      personally, as an avid{' '}
      <a href={links[1]} target="_blank">
        Product Hunt user with over 1,700 products upvoted(and counting)
      </a>
      , I enjoy testing out new products and will keep this list updated as
      things change.
    </P>

    <H2 id="static-site">Static site/Blog</H2>

    <P>
      This blog is built with{' '}
      <a href={links[2]} target="_blank">
        Gatsby.js
      </a>{' '}
      and deployed to{' '}
      <a href={links[3]} target="_blank">
        Netlify
      </a>{' '}
      through its{' '}
      <a href={links[4]} target="_blank">
        GitHub
      </a>{' '}
      integration, it uses the{' '}
      <a href={links[5]} target="_blank">
        Gatsby blog starter
      </a>
      , forked from{' '}
      <a href={links[6]} target="_blank">
        Dan Abramov's blog
      </a>{' '}
      with some small CSS modifications of my own, as well as removing some
      unused features such as translations that I do not expect to utilize any
      time soon. I am especially surprised at how easy it was to setup Netlify
      with Github and a simple blog template, including features like PR
      previews, I have considered moving to{' '}
      <a href={links[7]} target="_blank">
        GitLab
      </a>{' '}
      in the past, but as GitHub functions as close to a developer's social
      network, it feels it's more useful to keep coding entries there.
    </P>

    <P>
      Whenever creating new simple sites and doing exercises I prefer to use{' '}
      <a href={links[8]} target="_blank">
        Next.js
      </a>{' '}
      as a starter, I am a big fan of{' '}
      <a href={links[8]} target="_blank">
        ZEIT's
      </a>{' '}
      products and their simplicity, as well as its simple design, after
      starting so many Next.js projects I decided to create my own{' '}
      <a href={links[8]} target="_blank">
        boilerplate
      </a>{' '}
      to aggregate some of the most use toolings that I couple next.js with.{' '}
    </P>

    <P>
      UPDATE: I've switched this blog to be a next.js app hosted on
      Vercel(formerly ZEIT), purely out of personal preference.
    </P>

    <H3 id="static-site-runner-ups">Runner ups</H3>

    <H3 id="static-site-agains-medium">The case against Medium</H3>

    <P>
      <a href={links[9]} target="_blank">
        I have blogged through Medium
      </a>{' '}
      before, most of it was to try some forms of content writing, and see what
      sticks, while centralizing within a content network makes it easier to
      aggregate views, I found it to encourage simpler, buzzwordy pieces of
      content that most of the time are not valuable. It also goes against the
      initial goals of the web, as Medium also adds bigger popups and footers to
      increase subscription rates and app install counts, it has lost some of
      its initial allure that promised a clean, content-focused website, and, as
      a developer, I found it a good hobby to maintain my own website.
    </P>

    <P>
      I've used{' '}
      <a href={links[10]} target="_blank">
        Hugo
      </a>{' '}
      and{' '}
      <a href={links[11]} target="_blank">
        Jekyll
      </a>{' '}
      a few times, I've found Hugo to be easier to setup even if Jekyll is not
      that far behind, being older Jekyll also has way more options for themes.
      Hugo also seems faster. My choice for Gatsby was mostly based on finding
      it easy to work with the blog starter and the theme.
    </P>

    <P>
      <a href={links[12]} target="_blank">
        Wordpress
      </a>{' '}
      is a better solution for some companies and is a way more complete CMS, as
      I didn't intend to do much more than simple writing, I prefered a static
      site generator since it won't require any hosting and databases and it
      will all be versioned in a hosted VCS. Static sites will also outperform
      Wordpress easily, however, Wordpress has better SEO tooling.
    </P>

    <H2 id="developer-tools">Developer tools</H2>

    <P>
      I've tried{' '}
      <a href={links[13]} target="_blank">
        Hyper Terminal
      </a>{' '}
      but I end up usually coming back to
      <a href={links[14]} target="_blank">
        iTerm2
      </a>
      , as much as it is easier to customize Hyper, I find myself using theme
      defaults, and Hyper is not yet fast enough as it is still an Electron app.
    </P>

    <P>
      I also use{' '}
      <a href={links[15]} target="_blank">
        tmux
      </a>{' '}
      and{' '}
      <a href={links[16]} target="_blank">
        oh-my-zsh
      </a>{' '}
      as terminal tooling, most of my work is in the terminal as I prefer Vim to
      any other editor, I've also started collecting my
      <a href={links[17]} target="_blank">
        dotfiles
      </a>{' '}
      for reuse.
    </P>

    <P>
      I am still not sure about programming fonts, but I am growing fond of
      Iosevka at the moment.
    </P>

    <P>
      I don't do much design, but I've started using
      <a href={links[18]} target="_blank">
        Figma
      </a>{' '}
      for wireframing, it replaces my only killer mac app,
      <a href={links[19]} target="_blank">
        Sketch
      </a>{' '}
      , well enough for me and comes with a generous free plan.
    </P>

    <H3 id="coding-runner-up">Runners up</H3>

    <P>
      While I use nothing but vim for a while now, I usually recommend and I am
      very impressed at how good{' '}
      <a href={links[20]} target="_blank">
        Visual Studio Code
      </a>{' '}
      is.
    </P>

    <H2 id="coding">Coding in</H2>

    <P>
      Most of my work is JavaScript and React these days, preferably Typescript.
      I also enjoy Vue.JS and will be trying the newest, shiny JavaScript
      framework du jour from time to time.
    </P>

    <P>
      I enjoy using{' '}
      <a href={links[21]} target="_blank">
        Project Euler
      </a>{' '}
      to learn about programming languages and stimulate problem solving as a
      hobby, I've solved over
      <a href={links[22]} target="_blank">
        80 of them
      </a>{' '}
      in different languages including Haskell, Elixir, Ruby, Python and Go.
    </P>

    <H3 id="coding-learn">I should learn</H3>

    <P>
      A few programming languages and technologies which I haven't touched much
      yet but I am eager to learn:
      <ul>
        <li>Kotlin</li>
        <li>Swift</li>
        <li>containers and k8s</li>
        <li>GraphQL</li>
        <li>Electron</li>
        <li>React Native</li>
        <li>Tensorflow</li>
      </ul>
    </P>

    <H2 id="productivity">Productivity</H2>

    <P>
      This one is a big for me, I've tried just about every productivity app I
      can find, I am slowly settling on{' '}
      <a href={links[22]} target="_blank">
        Notion
      </a>{' '}
      because of how simple and flexible it is, migrating from Evernote and
      Google Keep, however I still use
      <a href={links[23]} target="_blank">
        Todoist
      </a>{' '}
      for tasks as it is still one of the better tools out there for the job
      including presence in the biggest amount of platforms I've found so far, I
      still think there is room for improvement in all of these, I miss
      keybindings in most productivity software.
    </P>

    <P>
      <a href={links[24]} target="_blank">
        Toby
      </a>{' '}
      is my new tab page on Chrome, it has replaced Pocket for me and works
      better than normal bookmarks.
    </P>

    <H3>Runner ups</H3>

    <P>
      I like
      <a href={links[25]} target="_blank">
        Workflowy
      </a>{' '}
      and{' '}
      <a href={links[26]} target="_blank">
        Dynalist
      </a>{' '}
      , just find Notion to be outperforming them.{' '}
      <a href={links[27]} target="_blank">
        Trello
      </a>{' '}
      is my favorite team project management tool with{' '}
      <a href={links[28]} target="_blank">
        Asana
      </a>{' '}
      a close second.
    </P>

    <H2 id="communication">Communication & Misc</H2>

    <P>
      I've been tracking my computer and mobile usage with{' '}
      <a href={links[29]} target="_blank">
        RescueTime
      </a>{' '}
      and{' '}
      <a href={links[30]} target="_blank">
        WakaTime
      </a>{' '}
      to track coding activity.
    </P>

    <P>
      This has revealed that Instagram is my most commonly used app and is my
      primary social networking activity, you can still find my resume on{' '}
      <a href={links[31]} target="_blank">
        LinkedIn
      </a>{' '}
      though
    </P>

    <P>
      I've also been growing engagement with Twitter, and{' '}
      <a href={links[32]} target="_blank">
        Tweetdeck
      </a>{' '}
      is a must.
    </P>

    <P>
      I also like the idea behind{' '}
      <a href={links[33]} target="_blank">
        Mastodon
      </a>{' '}
      decentralized approach, although I haven't found much within the community
      yet{' '}
    </P>

    <P>
      I am using{' '}
      <a href={links[34]} target="_blank">
        Station
      </a>{' '}
      as a tool to aggregate communication tools, while most communities I
      participate use{' '}
      <a href={links[35]} target="_blank">
        Slack
      </a>
      , I've enjoyed trying out{' '}
      <a href={links[36]} target="_blank">
        Discord
      </a>{' '}
      so far.
    </P>

    <H2 id="news">News & Media</H2>

    <P>
      My primary resources for news are{' '}
      <a href={links[37]} target="_blank">
        Hacker News
      </a>{' '}
      and Reddit. I also enjoy the mechanics behind{' '}
      <a href={links[38]} target="_blank">
        Nuzzel
      </a>
      . I also check{' '}
      <a href={links[39]} target="_blank">
        Product Hunt
      </a>{' '}
      regularly for new Products and tools.
    </P>
  </Post>
)

const links = [
  'https://wesbos.com/uses/',
  'https://www.producthunt.com/@mgrisoli',
  'https://gatsbyjs.com',
  'https://netlify.com',
  'https://github.com/mrisoli/blog',
  'https://github.com/gatsbyjs/gatsby-starter-blog',
  'https://github.com/gaearon/overreacted.io',
  'https://gitlab.com/',
  'https://nextjs.org/',
  'https://zeit.co/',
  'https://github.com/mrisoli/nextjs-boilerplate',
  'https://medium.com/@celorisoli',
  'https://gohugo.io/',
  'https://jekyllrb.com/',
  'https://wordpress.org/',
  'https://hyper.is/',
  'https://www.iterm2.com/',
  'https://github.com/tmux/tmux',
  'https://github.com/robbyrussell/oh-my-zsh',
  'https://github.com/mrisoli/dotfiles',
  'https://www.figma.com/',
  'https://www.sketch.com/',
  'https://code.visualstudio.com/',
  'https://projecteuler.net/',
  'https://github.com/mrisoli/eulerian',
  'https://www.notion.so/',
  'https://todoist.com/',
  'http://www.gettoby.com/',
  'https://workflowy.com/',
  'https://dynalist.io/',
  'https://trello.com/',
  'https://asana.com/',
  'https://www.rescuetime.com/',
  'https://wakatime.com/',
  'https://www.linkedin.com/in/marcelorisoli/',
  'https://tweetdeck.twitter.com/',
  'https://joinmastodon.org/',
  'https://getstation.com/',
  'https://slack.com/',
  'https://discordapp.com/',
  'https://news.ycombinator.com/news',
  'https://nuzzel.com/',
  'https://www.producthunt.com/',
]

export default Article
