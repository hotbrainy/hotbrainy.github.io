/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello Everyone👋",
  title2: "Brian Hoge",
  logo_name: "Brian Hoge",
  nickname: "hotbrainy",
  full_name: "Brian Hoge",
  subTitle:
    "Senior Full Stack Engineer, Tactful React expert⚛️, Eligible Blockchain Master and Familiar ChatGPT with OpenAI.🔥 And I ❤️ working for satisfy!",
  funFact: "I like spaghetti🍝, but hate spaghetti code",
  resumeLink:
    "https://drive.google.com/file/d/1UKnSIr1Od678v366bSZ-yqFBsTI1EMFR/view?usp=share_link",
  mail: "mailto:brainhg95@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/hotbrainy",
  linkedin: "https://www.linkedin.com/in/hotbrainy",
  gmail: "brainhg95@gmail.com",
  discord: "https://discord.com/users/1014578460452208733",
  telegram: "https://t.me/hotbrainy",
  skype: "https://join.skype.com/invite/vIgfNu9boLhc",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "💻 Building performance-optimized and user-friendly front end application using ReactJS",
        "💻 Using all aspects of Facebook's design best practices and emerging UI development techniques",
        "💻 Writing high-quality code & implementing unit test and E2E tests for your applications",
        "💻 Creating application backend in Node, Express, typeORM, prisma etc",
        "💻 Integration of third party services such as AWS(EC2, Amplify, S3, Cloudfront), GCP, Azure",
      ],
      softwareSkills: [
        //language
        {
          skillName: "TypeScript",
          name: "logos:typescript-icon",
        },
        {
          skillName: "JavaScript",
          name: "logos:javascript",
        },
        {
          skillName: "Ruby",
          name: "logos:ruby",
        },
        {
          skillName: "Golang",
          name: "logos:go",
        },
        {
          skillName: "Java",
          name: "logos:java",
        },
        {
          skillName: "Python",
          name: "logos:python",
        },
        {
          skillName: "PHP",
          name: "vscode-icons:file-type-php2",
          style: {
            color: "#7377AD",
          },
        },
        //backend
        {
          skillName: "Ruby on Rails",
          name: "logos:rails",
        },
        {
          skillName: "Django",
          name: "logos:django-icon",
        },
        {
          skillName: "NodeJS",
          name: "logos:nodejs-icon",
        },

        {
          skillName: "NestJs",
          name: "logos:nestjs",
        },
        {
          skillName: "Prisma",
          name: "vscode-icons:file-type-light-prisma",
        },
        {
          skillName: "GraphQL",
          name: "logos:graphql",
        },
        {
          skillName: "Spring",
          name: "logos:spring-icon",
        },
        {
          skillName: "React-Spring",
          name: "logos:react-spring",
        },
        {
          skillName: "Laravel",
          name: "logos:laravel",
          style: {
            color: "#f9322c",
          },
        },
        {
          skillName: "Dotnet",
          name: "logos:dotnet",
        },
        //frontend
        {
          skillName: "Webpack 2+",
          name: "logos:webpack",
        },
        {
          skillName: "ReactJS",
          name: "logos:react",
        },
        {
          skillName: "Redux",
          name: "logos:redux",
        },
        {
          skillName: "Vue",
          name: "logos:vue",
        },
        {
          skillName: "Angular",
          name: "logos:angular-icon",
        },
        {
          skillName: "Svelte",
          name: "logos:svelte-icon",
        },
        {
          skillName: "Nx",
          name: "logos:nx",
        },
        {
          skillName: "ChatGPT with OpenAI",
          name: "logos:chatgpt-icon",
        },
        {
          skillName: "Bootstrap 4+",
          name: "logos:bootstrap",
        },
        {
          skillName: "Next.js",
          name: "logos:nextjs-icon",
        },
        {
          skillName: "NuxtJS",
          name: "logos:nuxt-icon",
        },
        {
          skillName: "Sass",
          name: "logos:node-sass",
        },
        {
          skillName: "Less",
          name: "logos:less",
        },
        {
          skillName: "Jest",
          name: "logos:jest",
        },
        {
          skillName: "jQuery",
          name: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        // Cloud Service
        {
          skillName: "Firebase",
          name: "logos:firebase",
        },
        {
          skillName: "Material UI",
          name: "logos:material-ui",
        },
        {
          skillName: "Chakra UI",
          name: "simple-icons:chakraui",
        },
        {
          skillName: "Tailwind CSS",
          name: "logos:tailwindcss-icon",
        },
        {
          skillName: "Ant Design",
          name: "logos:ant-design",
        },

        // Database
        {
          skillName: "OracleDB",
          name: "logos:oracle",
        },
        {
          skillName: "MongoDB",
          name: "bxl:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostgreSQL",
          name: "logos:postgresql",
        },
        {
          skillName: "MySQL",
          name: "logos:mysql-icon",
        },
        {
          skillName: "Redis",
          name: "logos:redis",
        },
        {
          skillName: "Astro",
          name: "logos:astro",
          style: {
            color: "#FFFFFF",
          },
        },
        // Devops
        {
          skillName: "NPM",
          name: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          name: "logos:yarn",
        },
        {
          skillName: "Github",
          name: "logos:github-icon",
        },
        {
          skillName: "Git",
          name: "fa6-brands:git-alt",
          style: { color: "#E94E32" },
        },
        {
          skillName: "GitLab",
          name: "logos:gitlab",
        },
        {
          skillName: "Remix",
          name: "simple-icons:remix",
          style: { color: "#DDD" },
        },
        {
          skillName: "Xampp",
          name: "logos:xampp",
        },
        {
          skillName: "Nginx",
          name: "logos:nginx",
        },
        {
          skillName: "Linux",
          name: "logos:linux-tux",
        },
        {
          skillName: "Ubuntu",
          name: "logos:ubuntu",
        },
      ],
    },
    {
      title: "Blockchain development",
      fileName: "BlockchainImg",
      skills: [
        "⚡ Experience working on NFT marketplace and minting page",
        "⚡ Experience working on Decenteralized Finance and Leverage Protocol",
        "⚡ Experience working on ethereum compatible chain",
        "⚡ Experience working on Cosmos SDK and chains",
        "⚡ Experience participating in DAO",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          name: "logos:ethereum",
        },
        {
          skillName: "Ethereum",
          name: "logos:ethereum-color",
        },
        {
          skillName: "Ether",
          name: "logos:ethers",
        },
        {
          skillName: "Solidity",
          name: "logos:solidity",
        },
        {
          skillName: "Web3.js",
          name: "logos:web3js",
        },
        {
          skillName: "Bitcoin",
          name: "logos:bitcoin",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⛅ Experience working on multiple cloud platforms",
        "⛅ Experience hosting and managing websites",
        "⛅ Experience with Continuous Integration & Continuous Delivery",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          name: "logos:aws",
        },
        {
          skillName: "AWS-S3",
          name: "logos:aws-s3",
        },
        {
          skillName: "AWS-EC2",
          name: "logos:aws-ec2",
        },
        {
          skillName: "AWS-DynamoDB",
          name: "logos:aws-dynamodb",
        },
        {
          skillName: "AWS-Amplify",
          name: "logos:aws-amplify",
        },
        {
          skillName: "AWS-Lambda",
          name: "logos:aws-lambda",
        },
        {
          skillName: "Google Cloud",
          name: "logos:google-cloud",
        },
        {
          skillName: "Netlify",
          name: "logos:netlify",
        },
        {
          skillName: "Heroku",
          name: "logos:heroku-icon",
        },
        {
          skillName: "Firebase",
          name: "logos:firebase",
        },
        {
          skillName: "Docker",
          name: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          name: "logos:kubernetes",
        },
        {
          skillName: "GitHub Actions",
          name: "logos:github-actions",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UNIVERSITY OF TORONTO",
      subtitle: "Bachelor in Computer Science",
      logo_path: "U-of-T-logo.svg",
      alt_name: "UOT",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.concordia.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Triplebyte Certificate",
      subtitle: "Triplebypte",
      logo_path: "triplebyte.png",
      certificate_link:
        "https://triplebyte.com/tb/brian-hoge-2d2jjdh/certificate",
      alt_name: "Triplebyte",
      // color_code: "#2AAFED",
      color_code: "#fff",
    },
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "I love to collaborate.",
  description:
    "I've worked in both public and private sectors and have had the opportunity to work with a variety of team sizes over my career. It has given me insight into the pros and cons of both large and small engineering departments.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
       /*  {
          title: "Lead Software Engineer",
          company: "Aerial Empire Ltd",
          company_url: "https://www.aerialempire.com/",
          logo_path: "aerialempire.webp",
          duration: "2023.01 - PRESENT",
          location: "Remote",
          description: `
          −	Designed, developed, and implemented Python Web app to support business requirements. 
          −	Follows approved life cycle methodologies, creates design documents, and performs program coding and testing.
          −	Resolves technical issues through debugging, research, and investigation
          −	Developed apps using OpenAI Platform Services include ChatGPT, DALL-E 2,          
          `,
          color: "#f071C5",
        }, */
        {
          title: "Fullstack Engineer",
          company: "Civilization",
          company_url: "https://civfund.org/",
          logo_path: "civfund.webp",
          duration: "2021.10 - 2022.11",
          location: "Remote",
          description: `
          −Responsible for building both of frontend and backend and review smart contracts.
          −Assessed and reviewed all pull requests from other team members to make sure QA for deploy.
          −Responded wafer-thin to changing and evolving requirements in all stage.
          −Delivered flexible team work and overcame upset problems in both of frontend and backend
          −Implemented user-friendly interface with responsive in any device 
          `,
          color: "#0071C5",
        },
        {
          title: "Senior Frontend Engineer",
          company: "Riafox",
          company_url: "https://raifox.com/",
          logo_path: "riafox.jpg",
          duration: "2019.02 - 2021.08",
          location: "Remote",
          description: `
          −Rapid comprehension to complex projects, create qualified and accuracy result with working independently. 
          −Synchronized with team members on projects and implemented useful features. 
          −Overcame difficult problems with tactful solutions in projects and kept the deadline on time
          −Created a training outline to capture out systems and packages to be converted into training material.
          −Established of cut-well training system to improve skillset for developers and executed on time.
          `,
          color: "#0071C5",
        },
        {
          title: "Frontend Engineer",
          company: "Nanoheal ",
          company_url: "https://www.nanoheal.com/",
          logo_path: "nanoheal.jfif",
          duration: "2016.11 - 2019.01",
          location: "Remote",
          description: `
          −Worked within an international product team with a product manager, designers, and other developers to create solutions and apps focused on our customers’ needs.
          −Built and designed scalable user interfaces using React.Actively provided feedback to your team and contributed to team process.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Rockettech ",
          company_url: "https://rocketech.it/",
          logo_path: "rockettech.jfif",
          duration: "2014.08 - 2016.10",
          location: "Onsite",
          description: `
          −Designed, developed, and implemented web-based Java applications to support business requirements. 
          −Follows approved life cycle methodologies, creates design documents, and performs program coding and testing.
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships/Participation",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#D83B01",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description: "Google Developer Group Student Volunteer and Member.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Frontend applications. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  calendlySection: {
    user_name: "hotbrainy",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Aerial Empire Time-Lapse",
      url: "https://aerialempiretimelapse.com/",
      logo_path: "aerialempiretimelaplse.png",
      description:
        "360 live site monitoring & time-lapse films, We monitor and market construction sites in high-resolution using bespoke camera technology.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Django",
          iconifyClass: "logos:django",
        },
        {
          name: "Flask",
          iconifyClass: "logos:flask",
        },
        {
          name: "Node.js/Express",
          iconifyClass: "skill-icons:expressjs-dark",
        },
        {
          name: "React.js",
          iconifyClass: "logos:react",
        },
        {
          name: "ChatGPT",
          iconifyClass: "logos:openai",
        },
        {
          name: "GCP",
          iconifyClass: "logos:google-cloud",
        },
      ],
    },
    {
      id: "0",
      name: "Civilization",
      url: "https://app.civfund.org",
      logo_path: "civilization.png",
      description:
        "Civilization is the first Dex Fund App in the world. It supports staking&bonding tokens, NFT marketplace",
      languages: [
        {
          name: "Solidity",
          iconifyClass: "logos:solidity",
        },
        {
          name: "Subgraph",
          iconifyClass: "nonicons:graphql-16",
        },{
          
          name: "AWS",
          iconifyClass: "logos:aws",
        },
        {
          name: "Node.js/Express",
          iconifyClass: "skill-icons:expressjs-dark",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos:graphql",
        },
        {
          name: "Vue.js",
          iconifyClass: "logos:vue",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos:ethereum",
        },
      ],
    },
    {
      id: "1",
      name: "Voltadao",
      url: "https://www.voltadao.finance/",
      logo_path: "voltadao.jfif",
      description: "Several staking projects based on VOLTA and PREP tokens.",
      languages: [
        {
          name: "Blockchain",
          iconifyClass: "eos-icons:blockchain",
        },
        {
          name: "Smart Contract",
          iconifyClass: "carbon:blockchain",
        },
        {
          name: "Solidity",
          iconifyClass: "logos:solidity",
        },
        {
          name: "Subgraph",
          iconifyClass: "nonicons:graphql-16",
        },
        {
          name: "Node.js/Express",
          iconifyClass: "skill-icons:expressjs-dark",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos:graphql",
        },
        {
          name: "Vue.js",
          iconifyClass: "logos:vue",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos:ethereum",
        },
      ],
    },
    {
      id: "1",
      name: "MehhCoin",
      url: "https://mehhcoin.com/",
      logo_path: "download.jfif",
      description: "Alternative of Ethereum 2.0 coin.",
      languages: [
        {
          name: "Cryptocurrencies",
          iconifyClass:
            "streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money",
        },
        {
          name: "Blockchain",
          iconifyClass: "eos-icons:blockchain",
        },
        {
          name: "Smart Contract",
          iconifyClass: "carbon:blockchain",
        },
        {
          name: "Solidity",
          iconifyClass: "logos:solidity",
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
      ],
    },
    {
      id: "3",
      name: "ForestAdmin",
      logo_path: "forestadmin.png",
      url: "https://app.forestadmin.com/",
      description:
        "Easy setup, without any hassle. Save time and money with the internal tool that fits all your needs.",
      languages: [
        {
          name: "Node.js",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Ruby on Rails",
          iconifyClass: "mdi:language-ruby-on-rails",
        },
        {
          name: "CircleCI",
          iconifyClass: "logos:circleci",
        },
        {
          name: "GraphQL/Apollo",
          iconifyClass: "logos:apollostack",
        },
      ],
    },
    {
      id: "2",
      name: "Caballus",
      logo_path: "caballus.png",
      url: "https://ion-caballus.qa.riafox.dev/",
      description: "The Trust Horse Expreience",
      languages: [
        {
          name: "Nest.js",
          iconifyClass: "logos:nestjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "skill-icons:mongodb",
        },
        {
          name: "Ionic",
          iconifyClass: "logos:ionic-icon",
        },
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
        {
          name: "Swagger",
          iconifyClass: "logos:swagger",
        },
        {
          name: "Jest",
          iconifyClass: "logos:jest",
        },
      ],
    },

    {
      id: "4",
      name: "E-Library of University of Sydney",
      logo_path: "usydlib.png",
      url: "https://www.library.sydney.edu.au/",
      description: "Sydney’s university E-Library",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring-icon",
        },
        {
          name: "Node.js",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "Laravel",
          iconifyClass: "logos:laravel",
        },
      ],
    },
    {
      id: "5",
      name: "BetaSmartz",
      logo_path: "betasmartz.png",
      url: "https://demo.betasmartz.com/",
      description: "Experience next generation digital investment management",
      languages: [
        {
          name: "Node.js",
          iconifyClass: "logos:nodejs-icon",
        },
        {
          name: "Apollo/GraphQL",
          iconifyClass: "logos:graphql",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Typescript",
          iconifyClass: "logos:typescript-icon",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "ReduxSaga",
          iconifyClass: "logos:redux-saga",
        },
      ],
    },
    {
      id: "6",
      name: "Neko No Mori",
      logo_path: "neko.png",
      url: "https://nekonomori.io/",
      description:
        "Neko no Mori is a legendary forest in the spirit world inhabited by Neko and other spirits.",
      languages: [
        {
          name: "Vue",
          iconifyClass: "logos:vue",
        },
        {
          name: "Typescript",
          iconifyClass: "logos:typescript-icon",
        },
        {
          name: "TailwindCSS",
          iconifyClass: "logos:tailwindcss-icon",
        },
        {
          name: "NFT",
          iconifyClass: "ri:nft-fill",
        },
        {
          name: "Solidity",
          iconifyClass: "logos:solidity",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
