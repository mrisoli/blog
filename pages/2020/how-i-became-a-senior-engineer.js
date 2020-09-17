import Post from '../../components/layouts/post'
import Header from '../../components/post/header'
import H2 from '../../components/post/heading'
import P from '../../components/post/paragraph'

const Article = () => (
  <Post>
    <Header title="How I became a senior engineer" date="September 16, 2020" />

    <P>
      I've seen a few posts like these from other developers recently, so I
      thought it could be a good idea to do a write-up about how my career has
      gotten up to this point, it might be useful for prospective recruiters as
      well as aspiring developers interested in knowing about career
      progression.
    </P>

    <H2>Education</H2>

    <P>
      I graduated from high school in 2007 and started university in 2008, I
      majored in computer science, for a brief period I considered majoring in
      History. Many of my peers in university had some experience programming, I
      had only done a simple HTML course at age 11-12 that gave me the knowledge
      to build simple static websites hosted on FTP servers.
    </P>

    <P>
      Most of the programming content in university was taught in Java and some
      C++ with exceptions of things like Assembly for architecture classes. If a
      class didn't require assignments to be handed in a specific language I'd
      try learning something in the process and that's how I first touched PHP,
      Ruby and JavaScript.
    </P>

    <P>
      During university I also participated as a research assistant in a project
      about DSLs for code generation with UML diagrams, most of my work
      consisted in doing some learning to catch up to the project goals, the
      project was cut short when the professor responsible for it left as he got
      an offer to join Google.
    </P>

    <P>
      Still during university I needed more extracurriculars to graduate, so I
      got an internship in the department of Mechanical Engineering as a PHP
      developer, my job consisted mostly of updating the website uploading
      students' dissertation files and schedules, there was no CMS for the staff
      to do so, I left just before graduating, there wasn't much of an interview
      here.
    </P>

    <H2>Stint in entrepreneurship</H2>

    <P>
      I graduated in 2012 with little experience and a not very promising job
      market and economy, a group of university colleagues were starting a
      company and I joined them and we formed a group of 5 computer science
      students. We discussed several projects and decided to work on our idea of
      a travel-focused social network to help connect fellow travelers and help
      people book their vacation needs.
    </P>

    <P>
      I pushed us to utilize Ruby on Rails to develop our project as it seemed
      interesting technology geared towards productivity, none of us had much
      experience with it or anything else for that matter. Besides me everyone
      else was still studying and a couple of them had internships as well. We
      applied to FUMSOFT's incubation partnership with our university and got in
      with what was then called the Logbook project, we stayed at the program
      for about a year before terminating the venture and we each parted on our
      separate ways.
    </P>

    <P>
      The incubator was nice that it provided us with several learnings and
      courses from partnerships and lots of networking opportunities. It was
      also fun having to prepare a proper startup pitch.
    </P>

    <H2>First job</H2>

    <P>
      My first 'real' job was in a company that made software for the government
      agencies, I joined after being referred by a university colleague and
      former co-founder, there wasn't much of an interview and it was soft
      skills only. They made mostly CRM-style applications with a modified
      version of SmartGWT, which itself is a custom version of GWT which is a
      toolkit for AJAX in Java that lost in popularity to jQuery.
    </P>

    <P>
      This was not one of the best places to work and our tools were very custom
      and offered me little else in terms of technology to put on my CV, we were
      a new office created that would usually fix or deliver the projects that
      were delayed by a third party. I worked in several projects both big and
      small.
    </P>

    <P>
      Notably, one of the projects I worked on was the company's only non-Java
      project, it was a C#/.NET project outsourced to a contractor who didn't
      deliver, at first there were several of us to fulfill a deadline, after
      the first delivery it was mostly just me working alone with some off and
      on help by others, I stayed there 9 months before I got a job offer
      somewhere else.
    </P>

    <H2>First job change</H2>

    <P>
      I was reached out of the blue by someone who found my résumé online, I did
      a quick chat with them then they sent me to their outsourced partner for a
      more technical interview, I accepted their offer.
    </P>

    <P>
      It was a group of 4 people who each owned their separate business and was
      starting a new venture with a web application despite having little to no
      technical knowledge, initially they were outsourcing development to an
      agency and I was their first hire to start in-house development. The app
      was a Ruby on Rails app which was a platform to enable entrepreneurs to
      apply for grants destined to charity projects and similar things, that
      they could then create reports to display their projects execution and
      allow citizens to verify it.
    </P>

    <P>
      As their first developer I first joined the agency for a month for some
      training and hand off, after which I went back to their main office where
      I worked by myself, there was also an intern who was in charge of mostly
      office tasks such as paying bills.
    </P>

    <P>
      I struggled a lot working by myself and had little besides StackOverflow
      to fall back to as a junior developer, and I ultimately fell short of
      their expectations, eventually they brought in a more experienced
      developer who joined as CTO and partner, after which I was let go after
      roughly 7 months at the company.
    </P>

    <H2>Between jobs</H2>

    <P>
      This was the last time I was between jobs, I sent my CV around town and
      had a few interviews, I didn't get very promising results. One of them was
      a startup that did systems for school student management and instead of an
      interview they gave me a freelance job to integrate their node.js server
      to the C# turnstile system of a prospective client, I delivered the
      project and waited for feedback, they were satisfied and offered me a job
      which I turned down due to other offers, the deal with the customer fell
      through and they never paid me.
    </P>

    <P>
      I also had another offer in a startup that created children's interactive
      books on iPad, they had their own editor on top of QT Creator which
      allowed for designers to create books without code, a large mining company
      approached them wanting to use the software to create interactive employee
      training apps, instead of joining they offered me a one-month paid
      contractor job which in the end they would evaluate to offer me a full
      time position, most of the code was in Java.
    </P>

    <P>
      Midway through the one-month period I received a promising offer from
      another startup and informed them, they didn't negotiate but were
      considering to put an offer. Since I wouldn't stay long I stayed out of
      their main projects and tried helping out with a forgotten project of
      allowing non-developers to publish the books created with their software
      as apps in the Apple app store, I didn't know about tooling like Fastlane
      back then, I did a POC using Jenkins running on Mac Hardware to be able to
      sign and provision apps to submit them to the App Store.
    </P>

    <H2>Working in a growing startup</H2>

    <P>
      I applied for a junior rails developer job at a content marketing startup
    </P>
    <P>
      I joined as a junior rails developer a growing startup with roughly 70
      people at the time, despite this many people we were a small team of 5
      developers only as most people were either in sales or operations, the
      company grew fast but our department didn't grow at the same speed, we
      developed a Ruby on Rails app which was a platform to link their customers
      with freelance content writers amongst other services.
    </P>

    <P>
      Throughout my time there as the company grew we added several features,
      including content idea planning, a full scheduling system, freelance idea
      suggestion systems, I refactored the entire freelance payout system, I was
      eventually promoted to mid-level, by the time I left the team had double
      in size and the company almost tripled, by then I was already one of the
      oldest members of the team and contributed widely in onboarding new hires
      on our codebase.
    </P>

    <P>
      This was a great place to work, not only did we grew fast and learned from
      each other, they advocated for content marketing and incentivized their
      employees to learn about it, it motivated me on one of my first stints in
      writing and I learned a lot about things not just related to software
      development, I left after 1.5 years as I got a great opportunity abroad.
    </P>

    <H2>Moving abroad</H2>

    <P>
      I was later contacted by a recruiter from an European startup about
      interviewing, I took the chance, since my interviews never tested
      technical knowledge much I didn't know what to expect, I was given an
      assignment to do a task on a Rails/MongoDB app, I had never touched
      MongoDB until then, I bombed that interview so badly that the interviewers
      were awkward in giving me feedback, this was upsetting so I spent the next
      few months improving my tech interviewing skills.
    </P>

    <P>
      Eventually in one of many applications I interviewed for a company in
      Budapest, after doing a home assignment which didn't require any specific
      languages or frameworks there was also some pairing/whiteboard questions
      over a video call, after which I was invited to do an onsite interview
      with an all expenses paid trip to Hungary.
    </P>

    <P>
      I had initially applied for a full stack position, the company had mostly
      Python/Django microservices and React in the front-end, when I got there
      however there was a mix-up on dates and the team I was supposed to
      interview for wasn't available, I was given the choice of postponing my
      interview or interviewing with another team that dealt mostly with a large
      React application, I didn't know much React back then, but I took the
      challenge.
    </P>

    <P>
      It was quite a unique interview process where I worked with the team for
      three days in a simulated task, at the end of three days I received a job
      offer on the spot which I accepted, they also handled all relocation
      expenses and immigration concerns.
    </P>

    <P>
      At the time I joined they were in the final stages of a full rewrite as
      the tech stack for their previous version was rendered obsolete, I worked
      on small features just before the launch, and then on larger projects, I
      also worked with integrating our software with the software of a company
      we acquired which proved to be a lot of fun, for the most part I worked on
      several features including notably a spell check engine.
    </P>

    <P>
      Despite working almost always with a front-end application I held the
      title of Full Stack Engineer, here I also trained to interview but only
      interviewed two people in the end.
    </P>

    <P>
      It was the first company I worked for that had regular hackathons where we
      could come up with projects to build on the company stack, these were some
      of my most fun projects, and I even managed to win a prize in one of them!
    </P>

    <H2>More moves</H2>

    <P>
      After 2.5 years I decided to move and found a job in a fintech company in
      Stockholm undergoing an acquisition, the interview process was quite
      straightforward, I had a couple of soft skills interviews with a pair
      programming session over video call, lastly, they invited me over to the
      office for one final interview.
    </P>

    <P>
      Funnily enough I never knew what title I held at the company, whether I
      had a senior position was not wasn't explicit in the contract, however the
      converted levels to the acquiring company were in the senior bracket.
    </P>

    <P>
      As a front-end engineer I worked on creating dashboards and reports for
      our customers, these were mostly rewrites as we were migrating an old Ruby
      on Rails application to React.
    </P>

    <H2>Current Situation</H2>

    <P>
      After not fitting in much in Stockholm I applied for jobs to move once
      again, and I ended up accepting a position as a Senior Front-End Engineer
      in Barcelona. I moved here in the beginning of 2020 and have been here
      since, I currently work with React applications for our users to verify
      collected data reports.
    </P>

    <H2>Looking back</H2>

    <P>
      If I could change one thing, rewriting this made me realize that in the
      early years of my career without much guidance or mentorship from other
      senior engineers, once I actually had others to follow I felt my growth
      accelerated
    </P>

    <P>
      I didn't have a stellar career start but I am satisfied with where I am
      now, clocking in just about 8 years in my career I expect to contribute to
      the growth of others as well.
    </P>

    <P>
      I also enjoy being part of growing startups and like the idea of
      entrepreneurship, I don't know if I'll ever go back to trying to do my own
      thing but I definitely do not discard it!
    </P>
  </Post>
)

export default Article
