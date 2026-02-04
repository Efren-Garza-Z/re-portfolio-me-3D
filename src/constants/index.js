import Banregio from "../assets/images/Banregio.png";
import pepsico from "../assets/images/pepsico.png";
import jazz from "../assets/images/jazz.jpeg";
import {
    whatsapp,
    pricewise,
    data,
    apple,
    robot,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nodejs,
    react,
    tailwindcss,
    threads,
    python,
    springboot,
    java,
    golang,
    typescript,
    angular,
    next,
    redhat,
    swagger,
    linux,
    dbeaver,
    postgresql,
    mysql, rewrite
} from "../assets/icons";

export const skills = [{
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
},
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "angular",
        type: "Frontend",
    },
    {
        imageUrl: next,
        name: "nextjs",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: redhat,
        name: "Red Hat",
        type: "Cloud",
    },
    {
        imageUrl: swagger,
        name: "Swagger",
        type: "Test",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: postgresql,
        name: "postgresql",
        type: "DB",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "DB",
    },
    {
        imageUrl: dbeaver,
        name: "Dbeaver",
        type: "Gestor DB",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "typescript",
        type: "Backend",
    },



];

export const experiences = [
    {
        title: "Fullstack Developer Jr",
        company_name: "BANREGIO",
        icon: Banregio, // Asegúrate de tener este icono importado
        iconBg: "#fbc3bc",
        date: "January 2025 - Present",
        points: [
            "Design and development of microservices using Java (Spring Boot/WebFlux) and Python (FastAPI). ",
            "Creation of analysis models using Markov chains specifically for fraud prevention. ",
            "Development of web interfaces with Angular and application deployment on OCP4 (OpenShift).",
            "Active participation in Agile methodologies through daily stand-ups and team task tracking.",
        ],
    },
    {
        title: "Fullstack Web Developer (Freelance)",
        company_name: "Estudio Unghie Jazz",
        icon: jazz,
        iconBg: "#e2c0ed",
        date: "September 2025 - November 2025",
        points: [
            "Comprehensive design and development of a Single Page Application (SPA) using React 19 and Tailwind CSS.",
            "Implementation of a responsive interface and performance optimization using Vite.",
            "Integration of serverless services like Firebase for storage and EmailJS for automated appointment management.",
            "Focused on customer acquisition and catalog display through optimized UX/UI design.",
        ],
    },
    {
        title: "Warehouse Assistant",
        company_name: "PEPSICO",
        icon: pepsico, // Asegúrate de importar un logo de Pepsico si lo tienes
        iconBg: "#e0f7fa",
        date: "October 2022 - January 2025",
        points: [
            "Inventory control and order management using SAP, ensuring precise stock accuracy. ",
            "Forklift operation for merchandise organization following strict safety protocols. ",
            "Maintained handling safety and organizational standards within a high-volume warehouse environment. ",
        ],
    },
];

export const socialLinks = [{
        name: 'Whatsapp',
        iconUrl: whatsapp,
        link: 'https://wa.me/522462136643',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Efren-Garza-Z',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/efren-david-garza-zacamolpa-9344b1238/',
    }
];

export const projects = [
    {
        iconUrl: robot,
        theme: 'btn-back-red',
        name: 'ICB - AI Interactive Learning',
        description: 'A cutting-edge Learning Management System (LMS) that integrates Google Gemini AI to provide real-time feedback on writing and IELTS preparation. It features an immersive 3D interface built with Three.js and React Three Fiber to enhance user engagement.',
        link: 'https://gemini-3-threejs.vercel.app/',
    },
    {
        iconUrl: apple, // O cualquier icono que represente robustez/backend
        theme: 'btn-back-yellow',
        name: 'AI Educational API (Go)',
        description: 'A high-performance RESTful API built with Go and the Gin framework. It integrates Google Gemini AI for asynchronous prompt processing and file analysis. The system includes secure JWT authentication, PostgreSQL integration via GORM, and is fully documented with Swagger for easy integration.',
        link: 'https://educational-platforms-back-727266244738.us-central1.run.app/swagger/index.html',
    },
    {
        iconUrl: rewrite, // O un icono de Gmail/Chrome
        theme: 'btn-back-pink',
        name: 'Gmail AI Rewrite Assistant',
        description: 'A Chrome Extension that integrates Gemini Nano directly into Gmail using the native Rewriter API. It allows users to transform email drafts instantly—changing tones to Formal or Friendly and adjusting lengths—all processed locally within the browser for maximum privacy and speed.',
        link: 'https://youtu.be/aUL5-0BUUww',
    },
    {
        iconUrl: data, // O un icono que represente Python/Data
        theme: 'btn-back-yellow',
        name: 'FastAPI Game Management CRUD',
        description: 'A robust backend implementation using FastAPI and PostgreSQL to manage users and game catalogs. It features a complete CRUD system with SQLAlchemy as ORM, Pydantic for data validation, and Alembic for database migrations, following professional clean code standards.',
        link: 'https://github.com/Efren-Garza-Z/fs-fast-api-crud-con-postgre',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Tax & Accounting Landing Page',
        description: 'A professional landing page for a public accountant, featuring a custom AI Chatbot integration via react-chatbot-kit to streamline client inquiries. Built with React and Tailwind CSS, it focuses on high conversion, modern UI/UX, and accessibility for financial services.',
        link: 'https://asesor-contable-y-fiscal.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'StackBlocks 3D Game',
        description: 'An immersive 3D web game built with Three.js where players stack moving blocks to build the tallest tower possible. It features real-time physics, dynamic lighting, and a minimalist isometric design, demonstrating advanced React Three Fiber capabilities.',
        link: 'https://gameblock.vercel.app/',
    }

];
