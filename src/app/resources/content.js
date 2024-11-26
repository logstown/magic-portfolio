import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Logan",
  lastName: "Joecks",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Front-end Web Developer",
  avatar: "/images/avatar.jpg",
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/logstown",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/loganjoecks",
  },
  {
    name: 'Stack Overflow',
    icon: 'stackOverflow',
    link: 'https://stackoverflow.com/users/1815150/logan'
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/logstaa",
  },
  {
    name: 'Reddit',
    icon: 'reddit',
    link: 'https://www.reddit.com/user/memestheword/'
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ljoecks@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Developer</>,
  subline: (
    <>
      I'm Logan, a senior web developer at <InlineCode>Ryan LLC</InlineCode>, where I write
      <br /> front-end code. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello! I'm a Boston-based web developer with a passion for building what I want to see in the world.
        Enterprise web-app developer by day, personal project rockstar by night.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ryan LLC",
        timeframe: "2014 - Present",
        role: "Senior Front-end Developer",
        achievements: [
          <>
            Develop UI of enterprise-level property tax SaaS
          </>,
          <>Initially hired as sole front-end developer. Scaffolded UI in AngularJS, then partially upgraded to Angular 2+ creating a hybrid.</>,
          <>Contributed to home-grown UI framework (ACE)</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Orsyp Software (now Automic)",
        timeframe: "2013 - 2014",
        role: "Front-end Developer",
        achievements: [
          <>
            Sole front-end developer of a web-app called uX. Despite its nondescript title, uX was actually a powerful,
            enterprise-level, SaaS web app that sought to correlate business and IT metrics, allowing high level executives to
            draw conclusions as to how their IT performance was affecting their revenue and vice versa.
          </>,
          <>Made heavy use of AngularJS and D3.js, as well as a host of other UI javascript libraries</>,
        ],
        images: [
          {
            src: "/images/work/orsyp-1.png",
            alt: "uX Landing page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/orsyp-2.png",
            alt: "uX Graph",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/orsyp-3.png",
            alt: "uX Graph",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/orsyp-4.png",
            alt: "uX Calendars",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Vision Consulting LLC",
        timeframe: "2010 - 2013",
        role: "Programmer",
        achievements: [
          <>Developed extracts and NPR reports for various clients using NPR report-writer (proprietary Meditech software)</>,
          <>Wrote SQL to query Meditech data repository for SSRS development</>,
          <>Regular weekly travel to and from national headquarters in Nashville, TN (2010--2011) </>,
        ],
        images: [],
      },
      {
        company: "Partners HealthCare",
        timeframe: "2009 - 2010",
        role: "Programmer Analyst",
        achievements: [
          <>
            Experience in software development life cycle from analysis and design to coding and testing for the Admitting
            Outpatient application (ADO) for Brigham and Women`s Hospital.
          </>,
          <>Provided 24-hour on-call support for ADO over week-long periods and fixed priority technical issues</>,
        ],
        images: [],
      },
      {
        company: "Meditech",
        timeframe: "2005 - 2008",
        role: "Development Programmer",
        achievements: [
          <>Experience in software development life cycle for the Imaging and Therapeutic Services (ITS) module</>,
          <>Developed projects for requested enhancements and fixed issues</>,
          <>Created technical specifications and wrote code based on specifications</>,
        ],
        images: [],
      },
    ],
  },
  additional: {
    display: true,
    title: "Additional",
    items: [
      {
        name: "Appalachian Trail Thru-hike",
        timeframe: "March - Sept 2008",
        achievements: [
          <>Hiked 2176 miles from Georgia to Maine</>,
          <>
            Blog:{" "}
            <Link href="https://ga2me.blogspot.com" target="0">
              ga2me.blogspot.com
            </Link>
          </>,
        ],
        blog: "https://ga2me.blogspot.com",
        images: [
          {
            src: "/images/additional/at.JPG",
            alt: "Appalachian Trail Hike",
            width: 3,
            height: 4,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of New Hampshire",
        description: <>B.A. Mathematics. English minor. Additional coursework in computer science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
    {
        title: 'HTML/CSS/Typescript',
        description: <>The basics</>,
        images: []
    },
      {
        title: "Angular/AngularJS",
        description: <>From enterprise applications to personal projects</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Prisma + TailwindCSS</>,
        images: [],
      },
      {
        title: 'D3.js',
        description: <>Powerful visualization library</>,
        images: []
      },
      {
        title: "Firebase",
        description: <>Realtime DB and Firestore</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
