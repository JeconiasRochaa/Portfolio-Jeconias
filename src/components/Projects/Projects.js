import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Uma loja virtual completa com carrinho de compras, integração com meios de pagamento e painel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      link: "#",
      github: "#"
    },
    {
      title: "Plataforma de Cursos Online",
      description: "Sistema de gerenciamento de cursos com vídeos, exercícios e acompanhamento de progresso.",
      technologies: ["React", "Firebase", "Material-UI", "Node.js"],
      image: "🎓",
      link: "#",
      github: "#"
    },
    {
      title: "App de Gestão de Tarefas",
      description: "Aplicativo para gerenciamento de tarefas com drag-and-drop, categorias e lembretes.",
      technologies: ["React", "TypeScript", "Redux", "SASS"],
      image: "📝",
      link: "#",
      github: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "📊",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meus Projetos</h2>
          <p className={styles.subtitle}>Alguns dos meus trabalhos recentes</p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <span className={styles.emoji}>{project.image}</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    Ver Demo
                  </a>
                  <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;