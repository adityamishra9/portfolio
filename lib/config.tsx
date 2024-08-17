import {
  AboutSectionFeat,
  ArchLinux,
  Blender,
  chatGPT,
  framer,
  ftimg,
  HomeScreen,
  initialPortfolio,
  Insomnia,
  Nextjs,
  notion,
  obsidian,
  PostgresSql,
  Saas,
  spotify,
  Supabase,
  ToolboxPage,
  Tor,
  Ubuntu,
  valo,
  vscode,
  warp,
  yashSite,
} from "@/public/images";
import { Github, Linkedin, Twitter } from "lucide-react";

export const SiteConfig = {
  site: {
    name: "Aditya Mishra",
    description: "Welcome to my corner of internet!",
  },
  user: {
    firstName: "Aditya",
    lastName: "Mishra",
    email: "adityamishra@ssipmt.com",
    username: "adityamishra9",
    socials: {
      githubUserId: "adityamishra9",
      linkedInUserId: "adityamishra9",
    },
    schedulerLink: "https://calendar.app.google/758iN1KDNaNpsq498",
  },
  title: "ACME",
  resumeLink:
    "#",
};

export const NavbarItems = [
  {
    title: "Home",
    color: "foreground",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
    color: "foreground",
  },
  {
    title: "Projects",
    color: "foreground",
    link: "/projects",
  },
  {
    title: "Resume",
    link: SiteConfig.resumeLink,
  },
];

export const menuItems = [
  "Home",
  "About",
  "resume",
  "Toolbox",
  "Projects",
  "Changelog",
  "Connections",
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Git",
  "GitHub",
  "Figma",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "TailwindCSS",
];

export const HeroTitleData = [
  {
    route: "/",
    title: [
      `Hey, I'm ${SiteConfig.user.firstName}!`,
      "Welcome to my corner of the internet!",
    ],
  },
  {
    route: "/about",
    title: [
      `Good ${new Date().getHours() > 12 ? "morning" : "evening"}!`,
      `I'm ${SiteConfig.user.firstName}, an experienced frontend developer.`,
    ],
  },
  {
    route: "/projects",
    title: [`A collection of my`, `favorite works`],
  },
  {
    route: "/toolbox",
    title: [`Hardware and software`, `I use on a daily basis.`],
  },
  {
    route: "/changelog",
    title: [`Changelog`, `Here's whats new!`],
  },
  {
    route: "/connections",
    title: [
      `Connections.`,
      `Here are some remarkable individuals I have and I would like to meet in person`,
    ],
  },
];

export const GithubYears = [2024, 2023, 2022];

export const footerOptions = [
  {
    title: "General",
    routes: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "About",
        route: "/about",
      },
      {
        name: "Projects",
        route: "/projects",
      },
    ],
  },
  {
    title: "Specifics",
    routes: [
      {
        name: "Toolbox",
        route: "/toolbox",
      },
      {
        name: "Products",
        route: "/products",
      },
    ],
  },
  {
    title: "Extra",
    routes: [
      {
        name: "ChangeLog",
        route: "/changelog",
      },
      {
        name: "Connections",
        route: "/connections",
      },
      {
        name: "Resume",
        route: SiteConfig.resumeLink,
      },
    ],
  },
];

export const socialLinks = [
  {
    title: "Github",
    icon: <Github />,
    url: "https://github.com/adityamishra9",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/adityamishra9/",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    url: "https://x.com/vo_id8",
  },
];

export const hardware = [
  {
    title: "Laptop",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    company: "Lenovo",
  },
  {
    title: "Mobile Phone",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    company: "Samsung",
  },
  {
    title: "Mouse",
    description: "A 60 1080x1920p monitor that I use for work and gaming.",
    company: "Dell",
  },
  {
    title: "Keyboard",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    company: "HP",
  },
  {
    title: "Processor",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    company: "intel",
  },
  {
    title: "Zuckerberg",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    company: "Microsoft",
  },
];

export const toolboxData = [
  {
    name: "obisidan",
    link: "https://obsidian.md/",
    icon: obsidian,
  },
  {
    name: "vscode",
    link: "https://code.visualstudio.com/",
    icon: vscode,
  },
  {
    name: "spotify",
    link: "https://open.spotify.com/",
    icon: spotify,
  },
  {
    name: "framer",
    link: "https://www.framer.com/",
    icon: framer,
  },
  {
    name: "Notion",
    link: "https://notion.so/",
    icon: notion,
  },
  {
    name: "Warp",
    link: "https://warp.dev/",
    icon: warp,
  },
  {
    name: "Arch Linux",
    link: "https://archlinux.org/",
    icon: ArchLinux,
  },
  {
    name: "Ubuntu",
    link: "https://ubuntu.com/",
    icon: Ubuntu,
  },
  {
    name: "Tor",
    link: "https://www.torproject.org/",
    icon: Tor,
  },
  {
    name: "Blender",
    link: "https://www.blender.org/",
    icon: Blender,
  },
  {
    name: "Valorant",
    link: "https://playvalorant.com/",
    icon: valo,
  },
  {
    name: "Supabase",
    link: "https://supabase.com/",
    icon: Supabase,
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: Nextjs,
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: PostgresSql,
  },
  {
    name: "Insomnia",
    link: "https://insomnia.rest/",
    icon: Insomnia,
  },
  {
    name: "chatGPT",
    link: "https://chat.openai.com/",
    icon: chatGPT,
  },
];

export const changelog = [
  {
    title: "New Footer!",
    description: [`I implemented the new footer today! `],
    date: "August 10, 2024",
    img: ftimg,
    chips: ["Design"],
  },
  {
    title: "Toolbox Page Revamp",
    description: [
      `My new Toolbox page is ready to go! `,
      `I'm proud of the this redesigned page, which showcases softwares and hardwares I've used in tech.`,
    ],
    date: "August 8, 2024",
    img: ToolboxPage,
    chips: ["Feature", "Enhancement", "Design"],
  },
  {
    title: "Adding About Section",
    description: [
      `The about section has been equipped with individually animated and responsive cards, each of which features and connects the viewer to details about me.`,
    ],
    date: "August 5, 2024",
    img: AboutSectionFeat,
    chips: ["Feature", "Enhancement", "Design"],
  },
  {
    title: "Portfolio Website Launch",
    description: [
      `Here's the launch of my Portfolio Page`,
      `This page features details about me, viz, the projects I have made, people I have and would like to meet and also the softwares and hardwares I use.`,
    ],
    date: "August 1, 2024",
    img: HomeScreen,
    chips: ["Design"],
  },
];

export const chipsColor: any = {
  Feature: "#5ED49A",
  Design: "#FBBF35",
  Enhancement: "#818CF8",
  Bugfix: "#EF5CA6",
};

export const tools = [
  { src: obsidian, angle: 0 },
  { src: vscode, angle: 90 },
  { src: notion, angle: 180 },
  { src: warp, angle: 270 },
];

export const projects = [
  {
    src: ["/images/HomeScreen.png", "/images/aboutsection.png"],
    link: "https://building.yashpede.in/",
    title: "Portfolio Page",
    description:
      "A page that describes my projects, connections, software and hardware I use",
  },
  {
    src: ["/images/yashSite.png", "/images/dp.jpeg"],
    link: "https://www.protfolio.yashpede.in/",
    title: "Portfolio Page 2",
    description:
      "A page that describes my projects, connections and much more about me",
  },
];

export const minorProjects = [
  {
    src: yashSite,
    link: "https://www.protfolio.yashpede.in/",
    title: "Portfolio Page",
    description:
      "Explore the my portfolio with this captivating 3D simulation of the my workstation using Three.js.",
  },
  {
    src: initialPortfolio,
    link: "https://www.initialportfolio.yashpede.in/",
    title: "Minimal Portfolio",
    description:
      "A portfolio website for a web developer.",
  },
  {
    src: Saas,
    link: "https://www.shrewit.shop/",
    title: "AI NoteTaking SaaS - Web Application",
    description:
      "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  },
];