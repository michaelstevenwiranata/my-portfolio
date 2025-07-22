
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
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and checkout functionality.',
    longDescription: 'This project is a comprehensive e-commerce platform built using Next.js for the frontend, Node.js with Express for the backend API, and MongoDB as the database. It features user authentication (signup, login), product browsing, filtering, a persistent shopping cart, and a secure checkout process. Payment integration is simulated. The application is designed to be responsive and user-friendly.',
    image: '/images/project1.jpg', // Placeholder image path
    technologies: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    liveDemoLink: 'https://ecommerce-demo.vercel.app/',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A simple and intuitive task management application to help users organize their daily tasks and to-do lists.',
    longDescription: 'This is a single-page application (SPA) for managing tasks. Users can add, edit, delete, and mark tasks as complete. It utilizes React for the frontend, a simple JSON server for mock API calls, and local storage for persistence. The design focuses on a clean and minimalist user interface for efficient task organization.',
    image: '/images/project2.jpg', // Placeholder image path
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Local Storage'],
    githubLink: 'https://github.com/yourusername/task-manager-app',
    liveDemoLink: 'https://task-manager-demo.netlify.app/',
  },
  {
    id: 'project-3',
    title: 'Personal Blog',
    description: 'A responsive personal blog platform where I share articles on web development, technology, and personal insights.',
    longDescription: 'This personal blog is built with Next.js and uses Markdown for content management. It features dynamic routing for blog posts, syntax highlighting for code blocks, and a responsive design. The blog aims to provide a platform for sharing knowledge and experiences in the tech industry.',
    image: '/images/project3.jpg', // Placeholder image path
    technologies: ['Next.js', 'React', 'Markdown', 'CSS Modules'],
    githubLink: 'https://github.com/yourusername/personal-blog',
    liveDemoLink: 'https://your-blog-demo.vercel.app/',
  },
];
