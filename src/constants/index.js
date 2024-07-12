import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "AI Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Robsol",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developing and maintaining AI applications.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "The Plug",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "2022",
      points: [
        "Developing and maintaining fullstack websites singlehandedly",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Amos proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Amos does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      
    },
    {
      testimonial:
        "After Amos optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      
    },
  ];
  
  const projects = [
    {
      name: "Krypt",
      description:
        "Web-based platform that allows users to send crypto(ethereum) anywhere in in the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/molisemahasele/krypt",
    },
    {
      name: "The Plug",
      description:
        "Web-based that allows people to buy online using an African based payment gateway called M-Pesa.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: theplug,
      source_code_link: "https://livetheplug.com",
    },
    {
      name: "Uloan",
      description:
        "Web-based platform that allows money lenders to manage borrowers and track borrower's credit's credit score",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: uloan,
      source_code_link: "https://uloan.pro",
    },
    {
      name: "Books4u",
      description:
        "Web-based platform that allows entreprenuers to manage their records such expenses, incomes, liabilities and assets and also generate income statements and balance sheets at the click of a button. They can also manage use data analytics and KPIs to track perfomance.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "SQL-Alchemy",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
      ],
      image: books,
      source_code_link: "https://books4u.pro",
    },
    {
      name: "Video Chat",
      description:
        "Web application that enables users to chat instantly using video.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "WebRTC",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/molisemahasele/webrtc_chat",
    },
    {
      name: "Instagram clone",
      description:
        "Fullstack clone of instagram",
      tags: [
        {
          name: "Bootstrap 5",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Jquery",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/molisemahasele/instagram_clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
