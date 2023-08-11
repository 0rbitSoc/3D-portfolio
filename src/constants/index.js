import {
    mobile,
    backend,
    creator,
    web,
    deno,
    jenkins,
    next,
    react,
    rust,
    solidity,
    typescript,
    tailwind,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    auraai,
    aurahomepage,
    spot,
    threejs,
    eleventy,
  } from "../assets/index";

  const navLink = [
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
      title: "AI/ML developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "NextJS",
      icon: next,
    },
    {
      name: "DenoJS",
      icon: deno,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Solidity",
      icon: solidity,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "11ty",
      icon: eleventy,
    },
  ];

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Spot",
      description:
        "Web-based platform that allows users to search, play and save songs available on platform. Users can also upload their own songs and share it with community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: spot,
      source_code_link: "https://github.com/0rbitSoc/spot",
    },
    {
      name: "Aura Home",
      description:
        "Home page of web app Aura.ai made with docusaurus which is a simple and static website. Have fully functional blog feature and toggle light and dark mode.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "docusaurus",
          color: "green-text-gradient",
        },
        {
          name: "markdown",
          color: "pink-text-gradient",
        },
      ],
      image: aurahomepage,
      source_code_link: "https://github.com/0rbitSoc/aura.ai",
    },
    {
      name: "Aura.ai",
      description:
        "An advanced AI chatbot creation app where you can create customised AI chatbots and share them with the world! Includes world class features like AI meory storage, AI chat and much more!  ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "clerk",
          color: "violet-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: auraai,
      source_code_link: "https://github.com/0rbitSoc/aura",
    },
  ];

  export { navLink, services, technologies, experiences, testimonials, projects, };
