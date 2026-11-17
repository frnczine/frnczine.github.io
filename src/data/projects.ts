import type { Project } from '../types';

import Subdiverse from '../assets/subdiverse.png';
import Figma from '../assets/figma.jpg';
import ArtistGallery from '../assets/artistgallery.jpg';
import Abc from '../assets/abc.jpg';
import StudyHabit from '../assets/studyhabit.png';
import EmergingTech from '../assets/emergingtech.jpg';

export const projects: Project[] = [
  {
    id: 1,
    title: "Subdiverse (Capstone)",
    category: "Web Development",
    thumbnail: Subdiverse, 
    shortDesc: "Subdiverse: A Community-Based Web Portal Information System and Real-Time Booking Platform.",
    tools: ["React.js", "Vite", "Tailwind CSS", "Firebase", "Cloudinary"],
    details: {
      year: "A.Y. 2026",
      fullDescription: "This system provides a centralized platform that manages records, facility reservations for the function hall, swimming pool, and basketball court, car sticker and parking services, grievance submissions, community updates, monthly dues, and other subdivision services.",
      liveLink: "https://subdiverse.web.app/",
      contributions: [
        "Utilized React.js, Vite, JSX, and Tailwind CSS for front-end development to build a responsive, interactive community-based web portal.",
        "Integrated Firebase (Authentication, Cloud Firestore, and Hosting) as the primary back-end for real-time database management and deployment, utilizing Cloudinary for media storage.",
        "Collaborated with a three-member capstone team to design UI/UX wireframes and build the portal in Agile Scrum sprints, working with Homeowners' Association (HOA) officers to align system workflows and present project demonstrations."
      ]
    }
  },
  {
    id: 2,
    title: "Figma | E-Commerce Prototype",
    category: "UI/UX Design",
    thumbnail: Figma, 
    shortDesc: "Designed a minimalist e-commerce prototype in Figma showing core shopping flows.",
    tools: ["Figma", "UI/UX", "Prototyping"],
    details: {
      year: "A.Y. 2024",
      fullDescription: "Designed a minimalist e-commerce prototype in Figma showing core shopping flows during my 2nd year in college.",
      contributions: [
        "Designed user flows and wireframes for a modern e-commerce experience.",
        "Created interactive prototypes to demonstrate shopping cart and checkout flows."
      ]
    }
  },
  {
    id: 3,
    title: "Web Dev | Music Artist Gallery",
    category: "Web Development",
    thumbnail: ArtistGallery,
    shortDesc: "A dynamic artist gallery and booking workflow system.",
    tools: ["React.js", "PHP", "MySQL"],
    details: {
      year: "A.Y. 2025",
      fullDescription: "Built a dynamic artist gallery using React.js, PHP, and MySQL.",
      contributions: [
        "Utilized HTML, CSS, JavaScript, and Bootstrap, then transitioned to React.js for front-end development.",
        "Integrated PHP with React.js for backend development, utilizing MySQL for database management.",
        "Collaborated with a partner to implement the prototype we developed, providing innovative solutions for challenges specific to the music industry."
      ]
    }
  },
  {
    id: 4,
    title: "Mobile Enterprise | Loan System",
    category: "Mobile Development",
    thumbnail: Abc, 
    shortDesc: "An Android application with dynamic UI components and Java backend.",
    tools: ["Android Studio", "Java", "XML"],
    details: {
      year: "A.Y. 2025",
      fullDescription: "Designed dynamic UI components in Android Studio using XML layouts.",
      contributions: [
        "Designed UI layouts in Android Studio using XML (eXtensible Markup Language).",
        "Integrated Java classes with XML layouts in Android Studio for backend functionality on both the admin and user sides.",
        "Collaborated with a team of three to implement a prototype and the functionalities of the loan system."
      ]
    }
  },
  {
    id: 5,
    title: "Study Habit Tracker",
    category: "Integrative Programming Technologies",
    thumbnail: StudyHabit,
    shortDesc: "An interactive tool for monitoring study time.",
    tools: ["JavaScript", "HTML/CSS", "Web App"],
    details: {
      year: "A.Y. 2026",
      fullDescription: "Interactive tool for monitoring study time. Built as a core class activity to track days and minutes of studying.",
      contributions: [
        "Developed the core logic for tracking study time using JavaScript.",
        "Created a clean and intuitive user interface."
      ]
    }
  },
  {
    id: 6,
    title: "E-Commerce Automated Sales and Inventory System",
    category: "Application Development and Emerging Technologies",
    thumbnail: EmergingTech,
    shortDesc: "An automated e-commerce platform and inventory dashboard featuring dedicated admin and user interfaces.",
    tools: ["C#", "Bootstrap", "Java"],
    details: {
      year: "A.Y. 2025",
      fullDescription: "A full-stack e-commerce sales and inventory management system developed as a collaborative case study. Built with a responsive C# and Bootstrap" +
      "frontend integrated with a Java-based database backend, the platform automates stock tracking and sales processing across separate user and administrator interfaces.",
      contributions: [
        "Utilized C# and Bootstrap for frontend development.",
        "Integrated Java for the database of an automated sales and inventory system, supporting both admin and user interfaces.",
        "Collaborated with a team of three to implement the case study."
      ]
    }
  }
];