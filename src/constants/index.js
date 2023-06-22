import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  vuejs,
  Next,
  Blockchin,
  go,
  mui,
  wordpress,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  khalijiah,
  Peace,
  lutech,
  threejs,
  skynth,
  status200,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web3",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: Next,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
    {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "GoLang",
    icon: go,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Blockchain",
    icon: Blockchin,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MUI",
    icon: mui,
  },

];

const experiences = [
  {
    title: "Web3 Developer",
    company_name: "Skynth",
    icon: skynth,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "End-to-end Mobile Responsive UI Designing.",
      "Understanding Requirements Learning about new libraries and frameworks.",
      "Write custom code for existing websites.",
      "Maintaining Websites.",
      "Maintaining/ Upgrading Websites.",
      "Developed decentralized applications (DApps) using blockchain technology.",
      "Work Closly on company product.",
      "UI Designing in various Js Frameworks and Libraries i-e ( React, Next )",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Status200",
    icon: status200,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "UI Designing in various Js Frameworks and Libraries.",
      "Integrating the Front-end with the back-end application.",
      "Meeting the deadlines of assigned tasks.",
      "Pixel Perfect UI Designing.",
      "PSD to Html.",
      "Assisting team lead on multiple projects.",
      "Create Email templetes for verious projects.",
      "Worked on company Website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Al-Khalijiah",
    description:
      "The company website is a one-stop destination for users to explore a wide range of services offered. The website provides comprehensive information about each service. Additionally, the platform features a dedicated job portal, allowing individuals to browse and apply for job opportunities within the company. With a user-friendly interface and seamless functionality, users can effortlessly navigate through service details, job listings, and submit job applications.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: khalijiah,
    source_code_link: "https://khalijiah.com/",
  },
  {
    name: "Peacefull Unicorn",
    description:
      "This dynamic web application provides users with the exciting opportunity to search for and purchase unicorns using their Metamask wallets. Seamlessly integrating blockchain technology, the platform ensures secure and transparent transactions, enabling users to acquire their dream unicorns effortlessly. Discover the enchantment of unicorns and experience the convenience of purchasing them with your Metamask wallet through this captivating web application. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
     
      {
        name: "metamask",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
    ],
    image: Peace,
    source_code_link: "https://www.peacefulunicorns.com/",
  },
  {
    name: "LuTech Global",
    description:
      "This blog website serves as a comprehensive platform for users to explore and gain knowledge about cutting-edge technologies including blockchain, metaverse, web3 etc. With an intuitive interface and a wide range of articles, users can stay updated about the latest trends in technologies. The website offers easy navigation, allowing users to browse through different topics of interest. Engaging content and interactive features encourage user engagement.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lutech,
    source_code_link: "https://lutechglobal.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
