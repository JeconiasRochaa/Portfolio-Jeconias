import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'nome':
        if (!value.trim()) newErrors.nome = 'Nome é obrigatório';
        else if (value.length < 2) newErrors.nome = 'Nome muito curto';
        else delete newErrors.nome;
        break;
      case 'email':
        if (!value.trim()) newErrors.email = 'Email é obrigatório';
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Email inválido';
        else delete newErrors.email;
        break;
      case 'assunto':
        if (!value.trim()) newErrors.assunto = 'Assunto é obrigatório';
        else if (value.length < 5) newErrors.assunto = 'Assunto muito curto';
        else delete newErrors.assunto;
        break;
      case 'mensagem':
        if (!value.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
        else if (value.length < 10) newErrors.mensagem = 'Mensagem muito curta';
        else delete newErrors.mensagem;
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validação em tempo real
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar todos os campos
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });
    
    // Verificar se há erros
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      console.log('Dados do formulário:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      
      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const isFormValid = () => {
    return Object.keys(formData).every(key => formData[key].trim()) && 
           Object.keys(errors).length === 0;
  };

  if (isSubmitted) {
    return (
      <section id="contact" className={styles.contact}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✅</div>
          <h2>Mensagem Enviada!</h2>
          <p>Obrigado pelo contato. Retornarei em breve!</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className={styles.backButton}
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Vamos Trabalhar Juntos?</h2>
          <p className={styles.subtitle}>Entre em contato e vamos conversar sobre seu projeto</p>
        </div>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Entre em Contato</h3>
            <p className={styles.infoDescription}>
              Estou sempre aberto a discutir novos projetos, oportunidades criativas 
              ou fazer parte da sua visão. Vamos transformar suas ideias em realidade!
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactDetails}>
                  <strong>Email</strong>
                  <span>jeconiasrochaa@gmail.com</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📱</div>
                <div className={styles.contactDetails}>
                  <strong>WhatsApp</strong>
                  <span>(82) 981845421</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactDetails}>
                  <strong>Localização</strong>
                  <span>Maceio, AL</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Seu Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.nome ? styles.error : ''}`}
                />
                {errors.nome && <span className={styles.errorText}>{errors.nome}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Seu Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="assunto">Assunto *</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Qual é o assunto da mensagem?"
                value={formData.assunto}
                onChange={handleChange}
                className={`${styles.formInput} ${errors.assunto ? styles.error : ''}`}
              />
              {errors.assunto && <span className={styles.errorText}>{errors.assunto}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="mensagem">Sua Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva seu projeto ou dúvida..."
                rows="6"
                value={formData.mensagem}
                onChange={handleChange}
                className={`${styles.formTextarea} ${errors.mensagem ? styles.error : ''}`}
              ></textarea>
              {errors.mensagem && <span className={styles.errorText}>{errors.mensagem}</span>}
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  Enviando...
                </>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;