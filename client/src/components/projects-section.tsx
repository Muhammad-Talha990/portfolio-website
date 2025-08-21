import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}

function ProjectCard({ title, type, description, image, github, demo, tags }: ProjectCardProps) {
  return (
    <div className="project-card glassmorphism rounded-2xl overflow-hidden group cursor-pointer" data-testid={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} design`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white hover:text-primary-blue transition-colors"
              data-testid={`project-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white hover:text-accent-blue transition-colors"
              data-testid={`project-demo-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{type}</p>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: "Real Time Chat Application",
      type: "Mern Stack",
      description: "A real-time chat application developed using the MERN stack, featuring secure messaging, online presence, customizable themes, and an intuitive interface",
      image: "/images/realtime_chat_app.jpg",
      github: "https://github.com/Muhammad-Talha990/chat_application",
      demo: "https://app.example.com",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"]


    },
    {
      title: "Mobile Banking App",
      type: "Mobile UI/UX Design",
      description: "Secure and user-friendly mobile banking application with modern interface design.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      github: "https://github.com/Muhammad-Talha990",
      demo: "https://app.example.com",
      tags: ["Flutter", "Mobile", "FinTech"]
    },
    {
      title: "Analytics Dashboard",
      type: "Data Visualization",
      description: "Comprehensive analytics dashboard with real-time data visualization and insights.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      github: "https://github.com/Muhammad-Talha990",
      demo: "https://dashboard.example.com",
      tags: ["Vue.js", "Charts", "D3.js"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="projects-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="projects-subtitle">
            A collection of my recent work showcasing various design and development projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/Muhammad-Talha990"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 glassmorphism rounded-full font-semibold hover:scale-105 transition-all duration-300 hover-glow"
            data-testid="view-all-projects"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
