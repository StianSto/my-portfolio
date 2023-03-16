// PROJECT TEMPLATE
// add the project details in the template and add it project to the array at the bottom of the this file to display it on the site. try to have a description between 200-250 characters. dont forget to add images of both pc and mobile in assets/images

// const myProject = {
//   title: "my new project",
//   descr: "this will be a short message of what the site is",
//   link: "https://www.linktomysite.com",
//   githubLink: "https://github.com/StianSto/myProject",
//   images: {
//     pc: "../../assets/images/myProject_macbook.png",
//     phone: "../../assets/images/myProject_phone.png",
//   },
// };

const csm = {
  title: "Community Science Museum",
  descr:
    "CSM is a (fictional) local science museum meant for children interested in science and learning how the world works. The website seeks to intrigue children to learn more and opens up for visiting the museum. the design is colorful, but not childish.",
  link: "https://condescending-pike-cf9508.netlify.app",
  githubLink:
    "https://github.com/StianSto/Community-Science-Museum__Stian-Stordal",
  images: {
    pc: "/assets/images/csm-scrn_macbook.jpg",
    phone: "/assets/images/csm-scrn_phone.jpg",
  },
};

const rainyDays = {
  title: "Rainy Days",
  descr:
    "One of my first large projects during my time at Noroff. Rainy Days is an e-commerce site specifically designed for ages 30+ who want to go outdoors. was origially written with only HTML and CSS, but has since then been updated with JS.",
  link: "https://rainydays-ss.netlify.app",
  githubLink: "https://github.com/StianSto/CrossCourse-assignment",
  images: {
    pc: "/assets/images/rainydays-scrn_macbook.jpg",
    phone: "/assets/images/rainydays-scrn_phone.jpg",
  },
};

const theDailyBrew = {
  title: "The Daily Brew",
  descr:
    "The Daily Brew is a blog for coffee lovers and -enthusiasts. This website was made as my exam project during my first year at Noroff. making the website challenged me to explore the world of JS more than ever before.",
  link: "https://thedailybrew.netlify.app",
  githubLink:
    "https://github.com/Noroff-FEU-Assignments/project-exam-1-StianSto",
  images: {
    pc: "/assets/images/thedailybrew-scrn_macbook.jpg",
    phone: "/assets/images/thedailybrew-scrn_phone.jpg",
  },
};

const barterHouse = {
  title: "BarterHouse",
  descr:
    '"BarterHouse" is an auction site where users can sign up, browse around and buy items, or even list items off their own. Whether they want to find something new, or to make a profit on their old things, this is a site that is fun and easy to use!',
  link: "https://barterhouse.netlify.app",
  githubLink: "https://github.com/StianSto/barterhouse",
  images: {
    pc: "../../assets/images/barterhouse_macbook.png",
    phone: "../../assets/images/barterhouse_phone.png",
  },
};

// order is relevant. the first item is the top project on the site
export const projectsArr = [barterHouse, theDailyBrew, csm];
