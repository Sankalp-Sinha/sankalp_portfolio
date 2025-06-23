// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
// import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
// import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import convexLogo from './assets/tech_logo/convex.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
import iiitLogo from './assets/education_logo/iiit_bhagalpur_logo.png';
import davLogo from './assets/education_logo/dav_gandhinagar_logo.png';
import smsLogo from './assets/education_logo/sms_logo.png';
import pycLogo from './assets/company_logo/pyc_logo.png'

// Project Section Logo's
import codesync_logo from './assets/work_logo/codesync_logo.png';
import streamify_logo from './assets/work_logo/streamify_logo.png';
import search_Logo from './assets/work_logo/search_engine.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'Convex', logo: convexLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name:'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: iiitLogo,
      role: "Fullstack Developer",
      company: "IIIT Bhagalpur",
      date: "Feb 2025 - Present",
      desc : "Developed a responsive and efficient Training and Placement Cell website for IIIT Bhagalpur using React.js and Tailwind CSS to streamline student-recruiter interactions and placement workflows. The platform centralized data, improved coordination, and boosted operational efficiency. This project enhanced my full-stack development skills and demonstrated my ability to deliver impactful, real-world solutions in a collaborative environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        // "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 1,
      img: iiitLogo,
      school: "IIIT Bhagalpur, Bihar",
      date: "July 2023 - July 2027",
      grade: "8.96 CGPA",
      desc: "I am currently pursuing my Bachelor’s degree in Computer Science and Engineering (B.Tech) at IIIT Bhagalpur. My academic journey has equipped me with a solid foundation in core subjects like Data Structures, Algorithms, Operating Systems, and Database Management. I’ve also delved into modern technologies such as Web Development, Machine Learning, and Deep Learning. My time at IIIT Bhagalpur has allowed me to work on impactful projects that bridge theory with real-world applications.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: davLogo,
      school: "DAV Gandhinagar, Ranchi",
      date: "April 2023",
      grade: "92%",
      desc: "I completed my class 12 education from DAV Gandhinagar School, Ranchi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: smsLogo,
      school: "St. Michael's School, Ranchi",
      date: "April 2021",
      grade: "96%",
      desc: "I completed my class 10 education from St. Michael's School, Ranchi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CodeSync",
      description:
        "CodeSync is an advanced interview collaboration platform that integrates Stream-powered video calls, a Monaco code editor, and real-time data synchronization using Convex, reducing latency by 50%. With Clerk-based authentication and a responsive UI built with Shadcn, it enhances security and user engagement by 30%. CodeSync streamlines remote technical interviews by improving coding efficiency and minimizing setup time by 40%, making it a reliable tool for modern hiring workflows.",
      image: codesync_logo,
      tags: ["NextJS", "Convex", "Stream", "Clerk", "Monaco", "Shadcn"],
      github: "https://github.com/Sankalp-Sinha/interview_platform",
      webapp: "https://steady-tuna-27.accounts.dev/sign-in?redirect_url=https%3A%2F%2Finterview-platform-ruddy.vercel.app%2F",
    },
    {
      id: 1,
      title: "Streamify",
      description:
        "Streamify is a real-time video calling and messaging platform built using MongoDB, Express.js, React.js, Node.js, and TailwindCSS. It features low-latency 1:1 video calls, real-time messaging, and secure login/signup with JWT. By integrating over 10 UI components, Streamify offers a seamless user experience, boosting engagement by 70%. Optimized API performance ensures 30% faster load times, making it a reliable and efficient communication tool.",
      image: streamify_logo,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
      github: "https://github.com/Sankalp-Sinha/streamify",
      webapp: "https://streamify-r1x3.onrender.com/login",
    },
    {
      id: 2,
      title: "Search Engine",
      description:
        "Search Engine is a chatbot-based project where users can ask questions and receive instant, accurate responses. Built using LangChain, Groq API, and Streamlit, it combines fast language model inference with a simple UI. The system enables smooth, real-time interactions for intelligent question-answering and natural language understanding.",
      image: search_Logo,
      tags: ["Streamlit", "API", "LangChain", "Groq"],
      github: "https://github.com/Sankalp-Sinha/search_engine_llm",
      webapp: "https://searchenginellm-djsyqkhfwib8zbb4gqz6cb.streamlit.app/",
    },
  ];


    export const por = [
    {
      id: 0,
      img: iiitLogo,
      role: "Training and Placement Coordinator",
      company: "IIIT Bhagalpur",
      date: "Feb 2025 - Present",
      desc : "Serving as the Training and Placement Cell Coordinator at IIIT Bhagalpur, leading student placement activities, industry outreach, and recruiter engagement. Coordinated between companies and students, organized drives, and ensured smooth onboarding processes. This role strengthened my leadership, communication, and organizational abilities, and showcased my commitment to enabling career success for my peers through structured planning.",
      skills: [
        "Leadership",
        "Effective Communication",
        "Team Coordination",
        "Problem Solving",
        "Corporate Outreach",
      ],
    },

    {
      id: 1,
      img: pycLogo,
      role: "PyC Mentor",
      company: "IIIT Bhagalpur",
      date: "Aug 2024 - Present",
      desc : "Served as a PyC Mentor at IIIT Bhagalpur, guiding first-year students in competitive programming and problem-solving. Hosted coding contests, conducted doubt-clearing sessions, and fostered a collaborative learning environment. This role enhanced my mentorship, communication, and technical skills while allowing me to contribute to the growth of a strong coding culture within the institute.",
      skills: [
        "Mentoring",
        "Code Debugging",
        "Public Speaking",
        "Time Management",
        "Corporate Outreach",
      ],
    },
  ];  