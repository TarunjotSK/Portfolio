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
    ibm,
    dhari,
    iimswiss,
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
      title: " Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer (SDE 1)",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#383E56",
      date: "October 2020 - June 2022",
      points: [
        "Directed the North American cluster operations, spearheading the onboarding of automated processes, which resulted in securing business worth over USD 250k and a significant reduction in manual backend tasks by 200+ hours per week.",
        "Led cross-functional teams in the agile development and timely delivery of REST APIs and software applications, meeting critical project benchmarks while realizing a cost saving of USD 200k.",
        "Integrated Continuous Integration and Continuous Development practices into the CI/CD pipeline, reducing deployment times by 25%.",
        "Optimized cloud-based infrastructure using AWS Lambda, EC2, and Azure Functions, reducing operational costs by leveraging serverless computing and cloud-native services by USD 50k monthly.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Dhari",
      icon: dhari,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - March 2023",
      points: [
        "Constructed and maintained an e-commerce website operating Java Spring Boot, React, and SQL as a database.",
          "Led implementation of Agile Scrum methodology, resulting in a 20% increase in project completion rate and on-time delivery while ensuring adherence to the SDLC process.",
          "Utilized Kafka for handling real-time streaming data and message queuing for distributed systems, ensuring smooth realtime data processing with improved service availability.",
          "Implemented advanced search features with Elastic Search to enable high-performance and efficient data retrieval across large datasets, reducing search query time by 20%.",
      ],
    },
    {
      title: "Software Developer (SDE 2)",
      company_name: "IIMSWISS",
      icon: iimswiss,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Engineered and deployed APIs using Spring Boot, streamlining B2B data exchange and improving operational efficiency by 15%.",
        "Engineered Docker and Kubernetes containerization strategies, optimizing application processes and advancing system portability and scalability, reducing deployment time by 24%.",
        "Streamlined continuous integration/continuous delivery (CI/CD) pipelines with Jenkins, Gradle, and GitLab CI, automating build, test, and deployment processes, which reduced release times by 30%.",
        "Engineered efficient frontend interfaces using Angular, React, and JavaScript, focusing on responsive UI/UX design, improving user engagement and satisfaction metrics by 25%",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tarun proved me wrong.",
      name: "Snigdha",
      designation: "Senior Developer",
      company: "CISCO",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tarun does.",
      name: "Twinkle",
      designation: "Senior Manager",
      company: "DHARI",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "After Tarun optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Daniel",
      designation: "CTO",
      company: "Nimbus",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movieza",
      description:
        "Web-based platform that allows users to watch trailer, post comments and see others comments on a movie.",
      tags: [
        {
          name: "java-spring-boot",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongdb",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/TarunjotSK/Movieza",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };