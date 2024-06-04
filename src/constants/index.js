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
  nined,
  ninedwebsite,
  gravity,
  nine,
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
    date: "Dec 2022 - 17 July 2023",
    points: [
      "    Crafted compelling designs within diverse JS frameworks, seamlessly fusing front-end with back-end functionality.",
      "Integrating the Front-end with the back-end application.",
      "Meeting the deadlines of assigned tasks.",
      "Pixel Perfect UI Designing.",
      "Developed well-organized training materials for end-users, enabling seamless adoption of new software features.",
      "Assisting team lead on multiple projects.",
      "Create Email templetes for verious projects.",
      "Participated actively in code review sessions, promoting adherence to established coding standards within the team.",
      "Utilized version control tools such as Git for effective collaboration among team members during development cycles."
    ],





  },
  {
    title: "Web Developer",
    company_name: "9D Technologies",
    icon: nine,
    iconBg: "#ffffff",
    date: "17 July 2023 - Present",
    points: [
      "  Assisted in the creation of detailed project specifications, outlining key requirements for successful implementation of objectives.",
      "Integrating the Front-end with the back-end application.",
      "Designed engaging graphics and visual elements that contributed to a cohesive online presence across multiple platforms.",
      "Developed secure authentication systems that protected sensitive user data while providing seamless login experiences.",
      "Implemented accessibility features to ensure compliance with ADA guidelines and improve user experience for all visitors.",
      "Developed and maintained a cross-platform VPN application using ElectronJS, enabling seamless and secure internet connectivity.",
      "Integrated OpenVPN for robust VPN connections, ensuring high levels of security and privacy for users.",
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

  {
    name: "9D-VPN Desktop Application",
    description:
      "Developed a robust and high-performance desktop VPN application designed for Linux users. The app offers a secure and encrypted connection using openVPN, ensuring user privacy and data protection. It features a modern and intuitive user interface built with ReactJS and styled using Tailwind CSS. The application leverages Electron-vite for fast performance and Electron-Builder for seamless packaging and deployment. With ContextAPI, the app manages state efficiently, providing a consistent user experience.",
    tags: [
      {
        name: "Electron-vite",
        color: "blue-text-gradient",
      },
      {
        name: "Electron-Builder",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ContextAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "REST/RESTful APIs",
        color: "blue-text-gradient",
      },
      {
        name: "openVPN",
        color: "green-text-gradient",
      },
      {
        name: "Binaries",
        color: "pink-text-gradient",
      },
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
    ],
    image: nined,
    source_code_link: "",
  },

  {
    name: "9D-VPN Website",
    description:
      "The 9D-VPN Website is a comprehensive platform built with ReactJS and styled using Tailwind CSS, providing a modern, responsive user interface. It employs ContextAPI for efficient state management and REST/RESTful APIs for reliable backend communication. A standout feature is its secure payment processing system powered by Stripe, enabling easy subscription management. The site ensures a seamless user experience across all devices.",
    tags: [
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ContextAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "REST/RESTful APIs",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
    ],
    image: ninedwebsite,
    source_code_link: "https://9dvpn.app/",
  },

  {
    name: "Gravity-VPN Website",
    description:
      "The Gravity-VPN Website is a static site with a marvelous UI and Lottie animations, built with ReactJS and styled using Tailwind CSS. It provides a modern, responsive user interface and ensures a seamless user experience across all devices.",
    tags: [
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gravity,
    source_code_link: "https://gravityvpn.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };
