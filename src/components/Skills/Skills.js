import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, color: '#E44D26' },
    { name: 'CSS3', level: 90, color: '#1572B6' },
    { name: 'JavaScript', level: 88, color: '#F7DF1E' },
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Git', level: 80, color: '#F05032' },
    { name: 'Responsive Design', level: 92, color: '#4ECDC4' },
    { name: 'UI/UX Design', level: 78, color: '#FF6B6B' }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Minhas Habilidades</h2>
          <p className={styles.subtitle}>Tecnologias e Ferramentas que Domino</p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercentage}>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress} 
                  style={{ 
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;