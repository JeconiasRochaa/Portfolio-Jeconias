import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ];

  return (
    <section id="about" ref={aboutRef} className={styles.about}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>
          Sobre <span className={styles.highlight}>Mim</span>
        </h2>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Sou um <strong>Desenvolvedor Front-End apaixonado</strong> por criar 
              experiências digitais excepcionais. Com mais de <strong>3 anos de experiência</strong>, 
              transformo ideias complexas em soluções elegantes e funcionais.
            </p>
            
            <p className={styles.description}>
              Minha jornada na programação começou com a curiosidade de entender 
              como as coisas funcionam na web. Desde então, venho me especializando 
              em <strong>React, JavaScript e tecnologias modernas</strong>, sempre 
              buscando aprender e me adaptar às novas tendências.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🎯</div>
                <div className={styles.infoContent}>
                  <h3>Foco Principal</h3>
                  <p>React, JavaScript, TypeScript</p>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🚀</div>
                <div className={styles.infoContent}>
                  <h3>Especialidade</h3>
                  <p>Front-end Development & UI/UX</p>
                </div>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💼</div>
                <div className={styles.infoContent}>
                  <h3>Disponibilidade</h3>
                  <p>Freelancer & Projetos Remotos</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.skillsSection}>
            <h3>Tecnologias que Domino</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease ${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;