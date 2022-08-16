
const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Matt",
  middleName: "",
  lastName: "Bodey ",
  message: " Senior software developer with a passion for change ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mattbodey",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mattbodey",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mattbodey/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mattbodey/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: "mattbodey",
  imageSize: 375,
  message:
    "I am a highly motivated individual with excellent problem solving, mentoring, and development skills who enjoys learning and sharing best practices and ideas.",
  resume: require("./assets/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch that number of recently updated projects, or set this field 0 to show none.
//      i.e: reposLength: 0,
// To display specfic projects, add the repository names,
//      i.e specificRepos: ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mattbodey", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("./assets/img/uktv.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("./assets/img/uktv.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "TypeScript", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "Node.js", value: 90 },
    { name: "NoSQL", value: 75 },
    { name: "Serverless AWS", value: 85 },
    { name: "React", value: 65 },
    { name: "Data Structures", value: 65 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 80 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 75 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm not currently looking for work, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mattbodey@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Senior Software Engineer',
      companyName: 'UKTV',
      companylogo: require('./assets/img/uktv.png'),
      date: 'December 2022 – Present',
    },
    {
      role: 'Senior Software Developer',
      companylogo: require('./assets/img/uoy.png'),
      date: 'October 2020 – December 2022',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
