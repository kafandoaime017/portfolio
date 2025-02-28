<template>
    <footer class="footer-section">
      <div class="container">
        <!-- Section des liens utiles -->
        <div class="footer-links">
          <div class="footer-column">
            <h4>À propos</h4>
            <ul>
              <li><a href="#about">Mon parcours</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#tutorials">Tutoriels</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Légal</h4>
            <ul>
              <li><a href="#privacy-policy">Politique de confidentialité</a></li>
              <li><a href="#terms-of-service">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
  
        <!-- Section des réseaux sociaux -->
        <!-- <div class="social-links">
          <a href="https://github.com/votre-profil" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/votre-profil" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/votre-profil" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="mailto:votre-email@example.com" aria-label="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div> -->
  
        <!-- Section des droits d'auteur -->
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Aimé KAFANDO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  };
  </script>
  
  <style scoped>
  .footer-section {
    background-color: #111111;
    color: #fff;
    padding: 50px 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-links {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .footer-column {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-column h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #df0707;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-column ul li {
    margin-bottom: 10px;
  }
  
  .footer-column ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-column ul li a:hover {
    color: #df0707;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .social-links a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #df0707;
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
  
  .footer-bottom p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    .footer-links {
      flex-direction: column;
      align-items: center;
      /* text-align: center; */
    }
  
    .footer-column {
      margin-bottom: 20px;
    }
  }
  </style>