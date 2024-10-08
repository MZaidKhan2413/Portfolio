import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram, IoLogoReact, IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiBootstrap, SiTailwindcss, SiPython } from "react-icons/si";

export const navigations = [
    {text: "Home", link: "/"},
    {text: "Projects", link: "/#projects"},
    {text: "Skills", link: "/about#skills"},
    {text: "About", link: "/about"},
    {text: "Contact", link: "#contact"},
]

export const socialNavs = [
    {link: "https://www.linkedin.com/in/mohammad-zaid-khan-dev/", icon: <TfiLinkedin />},
    {link: "https://github.com/MZaidKhan2413", icon: <BsGithub />}
]

export const socialHandles = [
    {link: "https://www.linkedin.com/in/mohammad-zaid-khan-dev/", icon: <TfiLinkedin />},
    {link: "https://github.com/MZaidKhan2413", icon: <BsGithub />},
    {link: "https://x.com/mZaidk_", icon: <BsTwitterX />},
    {link: "https://www.instagram.com/z.a.i.d__k/", icon: <IoLogoInstagram />},
]

export const skills = [
    {name: "React.js", icon: <IoLogoReact />},
    {name: "Node.js", icon: <IoLogoNodejs />},
    {name: "JavaScript", icon: <IoLogoJavascript />},
    {name: "Java", icon: <FaJava />},
    {name: "MongoDB", icon: <SiMongodb />},
    {name: "SQL", icon: <SiMysql />},
    {name: "Bootstrap", icon: <SiBootstrap />},
    {name: "Tailwind", icon: <SiTailwindcss />},
    {name: "Python", icon: <SiPython />},
]

export const projects = [
    {
        name: "Chat App: Full Stack",
        description: "The Chat-App is a full-stack, real-time messaging application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and powered by Socket.IO to enable instant communication between users. This project is designed to provide a seamless, user-friendly interface with robust real-time capabilities, making it a powerful solution for modern chat applications.",
        links: {
            github: "https://github.com/MZaidKhan2413/chat-app",
            live: "https://vibey-chat-app.vercel.app/"
        },
        img: "/project-images/chat-app.png"
    },
    {
        name: "Stackdoors: Frontend",
        description: "StackDoors, a brand website built using React. This project was created as part of the Career Acceleration Program at Omniversity. It features conditional routing, rendering, and engaging animations to provide a seamless and interactive user experience.",
        links: {
            github: "https://github.com/MZaidKhan2413/Brand-website",
            live: "https://stackdoors.netlify.app/"
        },
        img: "/project-images/stackdoors.png"
    },
    {
        name: "Spotify Clone: Frontend",
        description: "Spotify clone project; this web application is built using modern web development technologies including React.js, Bootstrap, Material UI, Spotify API, and Axios. This project was developed as part of the master class at Omniversity.",
        links: {
            github: "https://github.com/MZaidKhan2413/Spotify-clone",
            live: "https://spotify-clone-by-zaid.netlify.app/"
        },
        img: "/project-images/spotify.png"
    },
    {
        name: "Sociogram: Full stack",
        description: "Sociogram is a social media application built using the Node.js and ejs templating. This project was developed to get hands on experience over full stack development.",
        links: {
            github: "https://github.com/MZaidKhan2413/Sociogram",
            live: "https://sociogram-n99s.onrender.com/",
        },
        img: "/project-images/sociogram.png",
    },
    {
        name: "Calculator",
        description: "This is a simple yet powerful demonstration of React's capabilities in building dynamic user interfaces. With this calculator, users can perform basic arithmetic operations such as addition, subtraction, multiplication, and division effortlessly.",
        links: {
            github: "https://github.com/MZaidKhan2413/Calculator-using-React.js",
            live: "https://calculator-by-zaid.netlify.app/"
        },
        img: "/project-images/calculator.png",
    }
]