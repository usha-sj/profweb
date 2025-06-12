import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Usha Sophea Janardhan",
  logo: "/logo.png", // to replace with own avatar
  email: "ushashasj@gmail.com", // to replace with email forwarding
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/ushasj",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ushasj/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:ushashasj@gmail.com", //to replace with email forwarding
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Usha Sophea Janardhan",
    description:
      "CS & Economics student merging tech, data and product thinking to solve real problems.",
    image: identity.logo,
  },
  role: "Student & Software Engineer",
  description:
    "I'm Usha, a CS & Economics student at UofT passionate about building smart, scalable systems that bridge code, data, and human needs.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Usha Sophea Janardhan",
    description:
      "CS & Economics student merging tech, data and product thinking to solve real problems.",
    image: identity.logo,
  },
  subtitle: "A little bit on me.",
  about: {
    description: `I'm Usha, a Computer Science and Economics student at the University of Toronto, passionate about building systems that are as thoughtful as they are scalable.
        <br/><br/>
        My work spans software development, machine learning, and community leadership, from designing intuitive interfaces to engineering backend systems and leading student tech initiatives. I enjoy connecting ideas across disciplines and using code as a tool for clarity, efficiency, and innovation.
        <br/><br/>
        Driven by curiosity and a strong sense of purpose, I’m always looking for meaningful problems to solve, and new ways to grow while doing it.`, // Markdown is supported
    image_l: {
      url: "/about.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/blog1.png",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked across research, development, and community-building using technologies like Python, JavaScript, and SQL to create tools that are practical, data-driven, and user-centered.`, // Markdown is supported
    items: [
    {
      title: "Research Assistant & Software Developer",
      company: {
        name: "Munk School of Global Affairs",
        image: "/logo-munk.png", // replace with your image in /public
        url: "https://munkschool.utoronto.ca",
      },
      date: "May 2024 – Present",
    },
    {
      title: "Research Assistant",
      company: {
        name: "Institute for the Study of University Pedagogy",
        image: "/logo-isup.png",
        url: "https://www.utm.utoronto.ca/isup/",
      },
      date: "May 2023 – August 2023",
    },
    {
      title: "Software Development Engineer Intern",
      company: {
        name: "Kumandra by KOOMPI",
        image: "/logo-koompi.png",
        url: "https://koompi.com/",
      },
      date: "July 2023 - December 2023",
    },
  ],
},
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Usha Sophea Janardhan",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Portfolio Optimizer",
      description: "In progress! (I'm trying to learn AWS rn.)",
      image: "/p5.gif",
      year: "2025",
      url: "",
    },
    {
      title: "3v3 Robot Soccer - UTM Robotics",
      description: "Built and optimized control algorithms for Kobuki robots using Raspberry Pis and sockets, boosting movement precision by 20%. Led real-time comms and gameplay logic for 3v3 soccer with Python and ROS.",
      image: "/p4.png",
      year: "2024",
      url: "https://github.com/nitic04/Kobuki-Project",
    },
    {
      title: "PhishNet - DeerHacks '24",
      description: "Scans uploaded emails to assess sender trustworthiness, link safety, and known scams. Designed the logo, UI, and collaborated in a 2-person team on development.",
      image: "/p3.webp",
      year: "2024",
      url: "https://devpost.com/software/phishnet-ejy6n3",
    },
    {
      title: "Rentals4Real - 🏆 Best Domain Name @ DeerHacks '23",
      description: "Pitched and designed a student-focused rental search platform. Led branding, built the front-end, and co-created the submission video with a 4-person team.",
      image: "/p2.avif",
      year: "2023",
      url: "https://devpost.com/software/r4r-rentals-4-real",
    },
    {
      title: "Weteka by KOOMPI",
      description: "Provided UI/UX testing & feedback, redesigned site navigation in English, and translated it to Khmer as the youngest (and only high school) team member.",
      image: "/p1.webp",
      year: "2021",
      url: "https://weteka.org/kh",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Usha Sophea Janardhan",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
