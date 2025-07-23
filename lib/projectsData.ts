export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Optional: for detailed project pages
  image: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Machine Learning Assignments",
    description:
      "A repository of machine learning assignments from my university coursework.",
    longDescription:
      "This project contains several machine learning assignments I completed during my studies. One of the tasks involved implementing a RAG (Retrieval-Augmented Generation) system on a biblical corpus and fine-tuning an LLM.",
    image: "/images/tensorflow.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
    ],
    githubLink:
      "https://github.com/michaelstevenwiranata/Repo-Tugas-Machine-Learning",
  },
  {
    id: "project-2",
    title: "Cognify Application",
    description:
      "A native Android application designed to help users train their cognitive functions.",
    longDescription:
      "Cognify is a native Android application aimed at training and enhancing various user cognitive functions like memory, attention, and problem-solving. The app is built using a modern MVVM (Model-View-ViewModel) architecture and Jetpack Compose for a declarative, responsive UI. Key features include a variety of brain-training games, user progress tracking, and a clean interface. Local data persistence is managed with Room Database and SharedPreferences.",
    image: "/images/cognifylogo.jpg",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room DB", "Retrofit"],
    githubLink: "https://github.com/michaelstevenwiranata/cognify-android.git",
  },
  {
    id: "project-3",
    title: "Stock Management System",
    description: "A stock management system built with React and Node.js.",
    longDescription:
      "This stock management system allows users to manage inventory, track stock levels, and generate reports. It features a user-friendly interface built with React and a robust backend powered by Node.js and Nest.js. Data is stored in a MongoDB database, and users can interact with the system through a GraphQL API.",
    image: "/images/React-icon.svg.png",
    technologies: ["React", "Node.js", "Nest.js", "MongoDB", "GraphQL"],
    githubLink: "https://github.com/RCHD3388/TeaFrontend",
  },
  {
    id: "project-4",
    title: "Escape Room Game",
    description: "A thrilling escape room game using Three.js.",
    longDescription:
      "This escape room game challenges players to solve puzzles and find clues to escape. It features immersive 3D environments and interactive objects. The game is built with Three.js, leveraging the library's powerful capabilities for 3D graphics.",
    image: "/images/three.png",
    technologies: ["JavaScript", "Three.js", "WebGL"],
    githubLink: "https://github.com/michaelstevenwiranata/Grafkom_Project",
  },
  {
    id: "project-5",
    title: "AFEKA Rush",
    description: "A tower defense game built with Java Swing.",
    longDescription:
      "AFEKA Rush is a tower defense game built with Java Swing. Players must strategically place towers to defend against waves of enemies. The game features various tower levels, each with unique stats, and a variety of enemy types that require different strategies to defeat.",
    image: "/images/Java.png",
    technologies: ["Java", "Java Swing"],
    githubLink: "https://github.com/michaelstevenwiranata/AFEKA-rush",
  },
];
