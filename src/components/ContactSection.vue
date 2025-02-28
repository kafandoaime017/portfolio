<template>
    <section class="contact-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="red-text">C</span>ontact
          </h2>
          <p class="section-subtitle">Discutons de vos projets</p>
        </div>
  
        <div class="contact-container">
          <!-- Informations de contact -->
          <div class="contact-info" data-aos="fade-right">
            <div class="info-card">
              <h3 class="info-title">Restons en contact</h3>
              <p class="info-description">
                N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
              </p>
              
              <div class="contact-methods">
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:kafandoaime017@gmail.com">kafandoaime017@gmail.com</a>
                  </div>
                </div>
  
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-details">
                    <h4>Téléphone</h4>
                    <a href="tel:+33751199246">+33751199246</a>
                  </div>
                </div>
  
                <div class="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="contact-details">
                    <h4>Localisation</h4>
                    <p>08000 Charleville-Mézières, France</p>
                  </div>
                </div>
              </div>
  
              <div class="social-links">
                <a style="text-decoration: none;" v-for="social in socials" 
                   :key="social.name"
                   :href="social.url"
                   :class="social.name"
                   target="_blank"
                   class="social-link">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
  
          <!-- Formulaire de contact -->
          <div class="contact-form" data-aos="fade-left">
            <form @submit.prevent="handleSubmit" class="form-card">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  :class="{ 'error': errors.name }"
                  placeholder="Votre nom"
                  required
                >
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
  
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  :class="{ 'error': errors.email }"
                  placeholder="votre@email.com"
                  required
                >
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
  
              <div class="form-group">
                <label for="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  :class="{ 'error': errors.subject }"
                  placeholder="Sujet de votre message"
                  required
                >
                <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
              </div>
  
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  :class="{ 'error': errors.message }"
                  placeholder="Votre message"
                  rows="5"
                  required
                ></textarea>
                <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
              </div>
  
              <button type="submit" class="submit-button" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Envoyer le message</span>
                <span v-else class="loading">
                  <i class="fas fa-spinner fa-spin"></i>
                  Envoi en cours...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        errors: {},
        isSubmitting: false,
        socials: [
          {
            name: 'github',
            url: 'https://github.com/kafandoaime017',
            icon: 'fab fa-github'
          },
          {
            name: 'linkedin',
            url: 'https://linkedin.com/in/kafandoaime',
            icon: 'fab fa-linkedin-in'
          },
          {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/users/29826469/relwend%c3%a9-aim%c3%a9-kafando',
            icon: 'fab fa-stack-overflow'
          },
          {
            name: 'facebook',
            url: 'https://www.facebook.com/aime.kafando.338',
            icon: 'fab fa-facebook-f'
          },
          // {
          //   name: 'instagram',
          //   url: 'https://instagram.com/yourusername',
          //   icon: 'fab fa-instagram'
          // }
        ]
      }
    },
    methods: {
      validateForm() {
        this.errors = {};
        
        if (!this.form.name.trim()) {
          this.errors.name = 'Le nom est requis';
        }
        
        if (!this.form.email.trim()) {
          this.errors.email = 'L\'email est requis';
        } else if (!this.isValidEmail(this.form.email)) {
          this.errors.email = 'Email invalide';
        }
        
        if (!this.form.subject.trim()) {
          this.errors.subject = 'Le sujet est requis';
        }
        
        if (!this.form.message.trim()) {
          this.errors.message = 'Le message est requis';
        }
        
        return Object.keys(this.errors).length === 0;
      },
      
      isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
      
      async handleSubmit() {
        if (!this.validateForm()) return;
        
        this.isSubmitting = true;
        
        try {
          // Simuler l'envoi du formulaire
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Réinitialiser le formulaire
          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
          
          alert('Fonctionnalité non implémentée pour le moment. Merci de me contacter directement par email ou par mon numero portable.');
        } catch (error) {
          alert('Une erreur est survenue. Veuillez réessayer.');
        } finally {
          this.isSubmitting = false;
        }
      }
    },
    mounted() {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-section {
    background-color: #000;
    color: #fff;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .contact-section::before,
  .contact-section::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .contact-section::before {
    top: -50px;
    left: -50px;
  }
  
  .contact-section::after {
    bottom: -50px;
    right: -50px;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 2;
  }
  
  .section-title {
    font-size: 2.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #ff0000, transparent);
  }
  
  .red-text {
    color: #ff0000;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  }
  
  .info-card,
  .form-card {
    background: rgba(30, 30, 30, 0.7);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 100%;
  }
  
  .info-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .info-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #ff0000;
    border: 1px solid rgba(255, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  
  .contact-item:hover .contact-icon {
    background: rgba(255, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  .contact-details h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .contact-details a,
  .contact-details p {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-details a:hover {
    color: #ff0000;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 0, 0, 0.2);
  }
  
  .social-link:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-3px);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #ff0000;
    background: rgba(255, 255, 255, 0.15);
  }
  
  .form-group input.error,
  .form-group textarea.error {
    border-color: #ff0000;
  }
  
  .error-message {
    color: #ff0000;
    font-size: 0.9rem;
    margin-top: 5px;
  }
  
  .submit-button {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #ff0000, #ff5e5e);
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .loading {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  @media (max-width: 991px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 576px) {
    .section-title {
      font-size: 2.2rem;
    }
  
    .info-card,
    .form-card {
      padding: 20px;
    }
  
    .info-title {
      font-size: 1.5rem;
    }
  
    .contact-icon {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  
    .social-link {
      width: 35px;
      height: 35px;
      font-size: 1rem;
    }
  }
  </style>