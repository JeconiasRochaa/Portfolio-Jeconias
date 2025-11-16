import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Jeconias";
  const fullTitle = "DESENVOLVEDOR FRONT-END";

  // Efeito de digitação para o nome
  useEffect(() => {
    let i = 0;
    const typeName = setInterval(() => {
      if (i < fullName.length) {
        setName(fullName.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeName);
        // Inicia a digitação do título após o nome
        setTimeout(startTitleTyping, 500);
      }
    }, 150);

    return () => clearInterval(typeName);
  }, []);

  // Efeito de digitação para o título
  const startTitleTyping = () => {
    let i = 0;
    const typeTitle = setInterval(() => {
      if (i < fullTitle.length) {
        setTitle(fullTitle.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeTitle);
      }
    }, 50);
  };

  // Efeito do cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background com gradiente animado */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.gradientOrb}></div>
      </div>

      <div className={styles.container}>
        {/* Conteúdo de Texto */}
        <div className={styles.textContent}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            Olá, eu sou
          </div>

          <h1 className={styles.name}>
            {name}
            <span className={styles.cursor}>{showCursor ? '|' : ''}</span>
          </h1>

          <h2 className={styles.title}>
            {title}
            <span className={styles.cursor}>{title.length < fullTitle.length ? '|' : ''}</span>
          </h2>

          <p className={styles.description}>
            Transformo <span className={styles.highlight}>ideias</span> em 
            experiências digitais <span className={styles.highlight}>extraordinárias</span>. 
            Especializado em criar soluções modernas e responsivas usando React, 
            JavaScript e as mais recentes tecnologias web.
          </p>

          {/* Botões de Ação */}
          <div className={styles.actionButtons}>
            <button 
              className={styles.primaryButton}
              onClick={() => scrollToSection('projects')}
            >
              <span className={styles.buttonText}>Ver Projetos</span>
              <div className={styles.buttonHover}></div>
            </button>
            
            <button 
              className={styles.secondaryButton}
              onClick={() => scrollToSection('contact')}
            >
              <span className={styles.buttonText}>Vamos Conversar</span>
              <div className={styles.buttonHover}></div>
            </button>
          </div>

          {/* Estatísticas */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Anos de Experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Projetos Concluídos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Clientes Satisfeitos</span>
            </div>
          </div>
        </div>

        {/* Seção Visual */}
        <div className={styles.visualContent}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <div className={styles.avatarMain}>
                <div className={styles.avatarEmoji}>👨‍💻</div>
              </div>
              <div className={styles.avatarGlow}></div>
            </div>
            
            {/* Elementos Orbitais */}
            <div className={styles.orbit}>
              <div className={styles.orbitalItem} style={{ '--i': 0 }}>
                <span>HTMLL</span>
              </div>
              <div className={styles.orbitalItem} style={{ '--i': 1 }}>
                <span>CSS3</span>
              </div>
              <div className={styles.orbitalItem} style={{ '--i': 2 }}>
                <span>REACT</span>
              </div>
              <div className={styles.orbitalItem} style={{ '--i': 3 }}>
                <span>JAVASCRIPT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Role para explorar</span>
      </div>
    </section>
  );
};

export default Hero;