import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Desenvolvimento de Websites',
      description: 'Sites personalizados construídos com tecnologias modernas como React, Next.js e princípios de design responsivo.',
      features: ['Design Responsivo', 'Alta Performance', 'Otimizado para SEO']
    },
    {
      icon: '📱',
      title: 'Aplicações Web',
      description: 'Aplicações web dinâmicas com recursos interativos e experiências de usuário perfeitas.',
      features: ['UI Interativa', 'Atualizações em Tempo Real', 'Multiplataforma']
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      description: 'Designs bonitos e intuitivos que melhoram o engajamento e satisfação do usuário.',
      features: ['Pesquisa de Usuário', 'Prototipagem', 'Sistemas de Design']
    },
    {
      icon: '⚡',
      title: 'Otimização de Performance',
      description: 'Melhoria de velocidade e eficiência de websites e aplicações existentes.',
      features: ['Otimização de Carregamento', 'Análise de Performance', 'Melhorias de SEO']
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>MEUS SERVIÇOS</h2>
          <p className={styles.subtitle}>O Que Posso Fazer Por Você</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={styles.serviceButton}>
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;