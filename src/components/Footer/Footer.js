import React from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaWhatsapp, 
  FaEnvelope 
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jeconias',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jeconias',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/jeconias',
      icon: <FaInstagram />,
      color: '#E4405F'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5582981845421',
      icon: <FaWhatsapp />,
      color: '#25D366'
    },
    {
      name: 'Email',
      url: 'mailto:jeconiasrochaa@gmail.com',
      icon: <FaEnvelope />,
      color: '#EA4335'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Jeconias</h3>
            <p>Desenvolvedor Front-end especializado em React e tecnologias modernas.</p>
            <div className={styles.socialIcons}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ '--social-color': social.color }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <div className={styles.contactInfo}>
              <p>📧 jeconiasrochaa@gmail.com</p>
              <p>📱 (82) 98184-5421</p>
              <p>📍 Maceio, AL</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Jeconias. Todos os direitos reservados.</p>
          <p className={styles.madeWith}>
            Feito com ❤️ usando React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;