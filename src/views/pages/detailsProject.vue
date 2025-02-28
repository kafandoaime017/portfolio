<template>
    <div>
      <!-- Navbar -->
      <Nav />
  
      <!-- Section détaillée du projet -->
      <section class="project-detail">
        <!-- Conteneur principal -->
        <div class="container">
          <!-- Vidéo à gauche -->
          <div class="video-container" data-aos="fade-right">
            <video autoplay loop muted playsinline>
              <source :src="project.videoUrl" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
  
          <!-- Informations à droite -->
          <div class="info-container" data-aos="fade-left">
            <!-- En-tête du projet -->
            <div class="project-header">
              <h1 class="project-title">
                <span class="red-text">{{ project.title.charAt(0) }}</span>{{ project.title.slice(1) }}
              </h1>
              <div class="project-meta">
                <span class="project-category">{{ project.category }}</span>
                <span class="project-date">{{ project.date }}</span>
              </div>
            </div>
  
            <!-- Description du projet -->
            <div class="project-description">
              <p>{{ project.description }}</p>
            </div>
  
            <!-- Caractéristiques principales -->
            <div class="project-features">
              <h2 class="features-title">Caractéristiques principales</h2>
              <div class="features-grid">
                <div
                  v-for="(feature, index) in project.features"
                  :key="index"
                  class="feature-item"
                >
                  <div class="feature-icon">
                    <i :class="feature.icon"></i>
                  </div>
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
  
            <!-- Technologies utilisées -->
            <div class="project-tech">
              <h2 class="tech-title">Technologies utilisées</h2>
              <div class="tech-stack">
                <div
                  v-for="(tech, index) in project.technologies"
                  :key="index"
                  class="tech-item"
                >
                  <div class="tech-icon">
                    <i :class="tech.icon"></i>
                  </div>
                  <span class="tech-name">{{ tech.name }}</span>
                  <div class="tech-level" :style="{ width: tech.level + '%' }"></div>
                </div>
              </div>
            </div>
  
            <!-- Galerie du projet -->
            <div class="project-gallery">
              <h2 class="gallery-title">Galerie du projet</h2>
              <div class="gallery-grid">
                <div
                  v-for="(image, index) in project.gallery"
                  :key="index"
                  class="gallery-item"
                  @click="openImage(image)"
                >
                  <img :src="image.url" :alt="image.caption" />
                  <div class="gallery-caption">
                    <p>{{ image.caption }}</p>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Liens du projet -->
            <div class="project-links">
              <a :href="project.demoUrl" target="_blank" class="project-link demo-link">
                <i class="fas fa-external-link-alt"></i>
                Voir la démo
              </a>
              <a :href="project.githubUrl" target="_blank" class="project-link github-link">
                <i class="fab fa-github"></i>
                Code source
              </a>
            </div>
  
            <!-- Navigation entre projets -->
            <div class="project-navigation">
              <a v-if="project.prevProject" :href="project.prevProject.url" class="nav-link prev">
                <i class="fas fa-arrow-left"></i>
                <span>{{ project.prevProject.title }}</span>
              </a>
              <a v-if="project.nextProject" :href="project.nextProject.url" class="nav-link next">
                <span>{{ project.nextProject.title }}</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'ProjectDetail',
    components: {
    Nav, // Enregistrement du composant Nav
  },
    data() {
        
      return {
        project: {
          title: 'E-commerce Platform',
          category: 'Web Application',
          date: 'Mars 2024',
          description:
            'Une plateforme e-commerce complète et moderne offrant une expérience utilisateur exceptionnelle. Intégration de paiements sécurisés, gestion des stocks en temps réel, et interface administrative puissante.',
          videoUrl: '/videos/Rybis-aerobotics.mp4', // Remplacer par votre URL vidéo
          features: [
            {
              icon: 'fas fa-shopping-cart',
              title: 'Panier intelligent',
              description:
                'Gestion avancée du panier avec sauvegarde automatique et recommandations personnalisées',
            },
            {
              icon: 'fas fa-lock',
              title: 'Paiement sécurisé',
              description: 'Intégration multi-paiements avec cryptage de bout en bout',
            },
            {
              icon: 'fas fa-chart-line',
              title: 'Analytics avancés',
              description: 'Tableaux de bord détaillés avec métriques en temps réel',
            },
            {
              icon: 'fas fa-mobile-alt',
              title: 'Mobile-first',
              description: 'Interface responsive optimisée pour tous les appareils',
            },
          ],
          technologies: [
            {
              name: 'Vue.js',
              icon: 'fab fa-vuejs',
              level: 90,
            },
            {
              name: 'Node.js',
              icon: 'fab fa-node-js',
              level: 85,
            },
            {
              name: 'MongoDB',
              icon: 'fas fa-database',
              level: 80,
            },
            {
              name: 'Docker',
              icon: 'fab fa-docker',
              level: 75,
            },
          ],
          gallery: [
            {
              url: 'https://via.placeholder.com/400x250',
              caption: "Page d'accueil",
            },
            {
              url: 'https://via.placeholder.com/400x250',
              caption: 'Dashboard administrateur',
            },
            {
              url: 'https://via.placeholder.com/400x250',
              caption: 'Interface mobile',
            },
          ],
          demoUrl: 'https://demo.example.com',
          githubUrl: 'https://github.com/username/project',
          prevProject: {
            title: 'Portfolio Créatif',
            url: '/projects/portfolio',
          },
          nextProject: {
            title: 'Dashboard Analytics',
            url: '/projects/dashboard',
          },
        },
      };
    },
    methods: {
      openImage(image) {
        // Implémenter la logique de la lightbox ici
        console.log('Opening image:', image.url);
      },
    },
    mounted() {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles globaux */
  .project-detail {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    padding-top: 80px; /* Pour laisser de l'espace pour la navbar */
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .video-container {
  flex: 1;
  min-width: 400px; /* Augmenter la largeur minimale */
  max-width: 800px; /* Augmenter la largeur maximale */
  height: 500px; /* Définir une hauteur fixe ou utiliser une hauteur automatique */
  /* border-radius: 15px; */
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
  
  video {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .info-container {
    flex: 1;
    min-width: 300px;
    max-width: 600px;
  }
  
  .project-header {
    margin-bottom: 30px;
  }
  
  .project-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .red-text {
    color: #ff0000;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }
  
  .project-meta {
    display: flex;
    gap: 15px;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .project-category,
  .project-date {
    padding: 5px 15px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 20px;
    border: 1px solid rgba(255, 0, 0, 0.2);
  }
  
  .project-description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .features-title,
  .tech-title,
  .gallery-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
  }
  
  .features-title::after,
  .tech-title::after,
  .gallery-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #ff0000, transparent);
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .feature-item {
    background: rgba(40, 40, 40, 0.7);
    border-radius: 15px;
    padding: 20px;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    font-size: 1.5rem;
    color: #ff0000;
    margin-bottom: 15px;
  }
  
  .tech-stack {
    margin-bottom: 30px;
  }
  
  .tech-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    background: rgba(40, 40, 40, 0.7);
    border-radius: 10px;
    padding: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .tech-icon {
    font-size: 1.2rem;
    color: #ff0000;
    margin-right: 10px;
  }
  
  .tech-level {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.05));
    transition: width 1.5s ease;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .gallery-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover img {
    transform: scale(1.05);
  }
  
  .gallery-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover .gallery-caption {
    transform: translateY(0);
  }
  
  .project-links {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .demo-link {
    background: linear-gradient(135deg, #ff0000, #ff5e5e);
    color: #fff;
  }
  
  .github-link {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .project-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .project-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    color: #ff0000;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  
    .video-container,
    .info-container {
      max-width: 100%;
    }
  
    .project-title {
      font-size: 2rem;
    }
  
    .features-grid {
      grid-template-columns: 1fr;
    }
  
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .project-meta {
      flex-direction: column;
      gap: 10px;
    }
  
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  
    .nav-link span {
      display: none;
    }
  }
  </style>