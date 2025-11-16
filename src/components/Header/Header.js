import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Efeito de scroll para mudar o header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Atualizar seção ativa
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span>Jeconias</span>
        </div>
        
        <ul className={styles.navList}>
          {[
            { id: 'home', label: 'Início' },
            { id: 'about', label: 'Sobre' },
            { id: 'services', label: 'Serviços' },
            { id: 'skills', label: 'Habilidades' },
            { id: 'projects', label: 'Projetos' },
            { id: 'contact', label: 'Contato' }
          ].map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
                <span className={styles.navUnderline}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile */}
        <div className={styles.mobileMenu}>
          <button className={styles.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;