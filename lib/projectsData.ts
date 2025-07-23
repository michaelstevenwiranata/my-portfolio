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
    title: "Tugas Machine Learning",
    description: "repo tugas machine learning selama kuliah",
    longDescription:
      "Proyek ini berisi beberapa tugas machine learning yang saya kerjakan selama kuliah. Salah satu tugasnya adalah mengimplementasikan  RAG pada corpus alkitab,fine tuning model LLM.",
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
      "Aplikasi mobile Android untuk membantu pengguna dalam belajar",
    longDescription:
      "Cognify adalah aplikasi native Android yang bertujuan untuk melatih dan meningkatkan berbagai fungsi kognitif pengguna seperti memori, perhatian, dan pemecahan masalah. Aplikasi ini dibangun dengan arsitektur modern MVVM (Model-View-ViewModel) dan menggunakan Jetpack Compose untuk membangun UI yang deklaratif dan responsif. Fitur utamanya mencakup berbagai permainan, pelacakan progres pengguna, dan antarmuka yang bersih. Persistensi data lokal ditangani menggunakan Room Database dan SharedPreferences.",
    image: "/images/cognifylogo.jpg",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room DB", "Retrofit"],
    githubLink: "https://github.com/michaelstevenwiranata/cognify-android.git",
  },
  {
    id: "project-3",
    title: "Stock management system",
    description: "A stock management system built with React and Node.js.",
    longDescription:
      "This stock management system allows users to manage inventory, track stock levels, and generate reports. It features a user-friendly interface built with React and a robust backend powered by Node.js and Nest.js. Data is stored in a MongoDB database, and users can interact with the system through a graphQL API.",
    image: "/images/React-icon.svg.png",
    technologies: ["React", "Node.js", "Nest.js", "MongoDB"],
    githubLink: "https://github.com/RCHD3388/TeaFrontend",
  },
  {
    id: "project-4",
    title: "Escape Room Game",
    description: "A thrilling escape room game using three.js ",
    longDescription:
      "This escape room game challenges players to solve puzzles and find clues to escape . It features immersive 3D environments, interactive objects. The game is built with three.js, leveraging the library's powerful capabilities for 3D graphics.",
    image: "/images/three.png",
    technologies: ["JavaScript", "three.js", "WebGL"],
    githubLink: "https://github.com/michaelstevenwiranata/Grafkom_Project",
  },
  {
    id: "project-5",
    title: "AFEKA rush",
    description: "Tower defense game built with Javaswing",
    longDescription:
      "AFEKA rush is a tower defense game built with Javaswing. Players must strategically place towers to defend against waves of enemies. The game features various tower levels, each with unique stats, and a variety of enemy types that require different strategies to defeat.",
    image: "/images/Java.png",
    technologies: ["Java", "Javaswing"],
    githubLink: "https://github.com/michaelstevenwiranata/Grafkom_Project",
  },
];
