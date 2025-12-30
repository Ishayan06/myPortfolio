export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
  id: 1,
  title: "About Me",
  description: `Hi, I’m Ishayan, a 3rd-year student at KIIT University with a passion for coding and full-stack development. I enjoy building dynamic and responsive web applications using React, Next.js, Express, and TailwindCSS. Alongside development, I have a keen interest in Data Structures & Algorithms and love solving coding challenges that sharpen my problem-solving skills.

I’m also exploring Machine Learning and constantly learning how to combine my coding knowledge with AI and data-driven solutions. For me, coding is not just a skill — it’s a way to create, experiment, and push the boundaries of what’s possible.`,
  className: "lg:col-span-2 tracking-[0.25em] lg:row-span-2 md:col-span-6 md:row-span-4 lg:max-h-[76vh]",
  imgClassName: "w-full h-full",
  titleClassName: "justify-end",
  img: "/b1.svg",
  spareImg: "",
},

  {
    id: 2,
    title: "Into Coding",
    description: "I am into coding and love solving problems with clean logic.",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2 lg:max-h-[34vh]",
    imgClassName: "blur-2xl",
    titleClassName: "justify-start ",
    img: "me.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "relative lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2 lg:max-h-[34vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
  id: 4,
  title: "Tech Stack & Coding",
  description: "",
  className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2 lg:max-h-[34vh]",
  imgClassName: "",
  titleClassName: "justify-start ",
  img: "/grid.svg",
  spareImg: "/b4.svg",
},

{
  id: 5,
  title: "Currently studying machine learning",
  description: "The Inside Scoop",
  className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2 lg:max-h-[34vh]",
  imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  titleClassName: "justify-center md:justify-start lg:justify-center",
  img: "/b5.jpg",
  spareImg: "/grid.svg",
},

{
  id: 6,
  title: "Do you want to start a project together?",
  description: "",
  className: "lg:col-span-1 lg:row-span-1 md:col-span-6 md:row-span-2 lg:max-h-[34vh]",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "6th.gif",
  spareImg: "",
}

];

export const projects = [
  {
    id: 1,
    title: "Forever Ecommerce Website",
    des: "Created a modern e-commerce platform using React.js for the frontend and Node.js with MongoDB for backend services.",
    img: "/ecomerce.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "AegisHealth-AI",
    des: "Developed an AI-based healthcare assistant for symptom analysis and preliminary risk assessment.",
    img: "/agishealth.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "Zombie Apocalypse",
    des: "Built an interactive city-map simulation using HTML, CSS, and JavaScript to model survival strategies in real time",
    img: "/zombie.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "FinTrackr – Smart Expense Visualizer",
    des: "Built a full-stack expense tracking application with categorized credit and debit entries.",
    img: "/expense.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AISOC — Web Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "KIIT Electrical Society",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ishayan06",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/ishayan_06/?hl=en",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ishayan-kundu-2790202b0/",
  },
];
