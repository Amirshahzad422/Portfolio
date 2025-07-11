// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Amir",
  middleName: "",
  lastName: "Shahzad",
  message: " Building smart software solutions and inspiring through public speaking. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Amirshahzad422",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/amir-shahzad-5a250029b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/422AmirShahzad?t=RjMhImV8yaqsEvZuK_XYrg&s=09",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/engineer_amir_shahzad?igsh=MW80YzV3aG5pNzV5cA==",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/amir.shahzad.462980?mibextid=ZbWKwL",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Amirshahzad.jpeg"),
  imageSize: 320,
  message:
    "My name is Amir Shahzad. I'm a student of Software Engineering with a strong passion for building smart, meaningful software solutions. Alongside my technical journey, I'm also a public speaker, driven by the desire to make a positive impact through both code and communication. I believe technology should make life easier, and I aim to contribute to that vision by creating accessible and efficient tools. In my free time, I love exploring new ideas, learning modern tech, and working on projects that solve real-world problems.",
  resume: "https://docs.google.com/document/d/1I-RI2o7bhmgE8JduAIm1f5YTb4CSlLRVcQaUKOKyVt4/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Amirshahzad422", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Amirshahzad.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Amirshahzad.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "Next.js", value: 80 },
    { name: "Tailwind CSS", value: 85 },
    { name: "Python", value: 88 },
    { name: "Node.js", value: 82 },
    { name: "C/C++", value: 75 },
    { name: "Appwrite", value: 70 },
    { name: "HTML/CSS", value: 90 },
    { name: "Git/GitHub", value: 85 },
    { name: "MongoDB", value: 75 },
    { name: "Express.js", value: 80 },
  ],
  softSkills: [
    { name: "Public Speaking", value: 90 },
    { name: "Problem Solving", value: 88 },
    { name: "Leadership", value: 85 },
    { name: "Communication", value: 92 },
    { name: "Teamwork", value: 87 },
    { name: "Adaptability", value: 85 },
    { name: "Critical Thinking", value: 88 },
    { name: "Time Management", value: 82 },
    { name: "Creativity", value: 90 },
    { name: "Learning Agility", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering opportunities and collaboration on exciting projects! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "amirshahzad38402@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
