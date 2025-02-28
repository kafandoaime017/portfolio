<template>
  <section class="projects-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">
          <span class="red-text">P</span>rojets
        </h2>
        <p class="section-subtitle">Découvrez mes réalisations les plus significatives</p>
      </div>

      <div class="projects-container">
        <div class="project-card" v-for="(project, index) in projects" :key="'project-'+index" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
              <div class="project-links">
                <a style="text-decoration: none;" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" v-if="project.githubUrl" class="project-link">
                  <i class="fab fa-github"></i>
                </a>
                <a 
      title="Visiter le site web" 
      :href="project.liveUrl" 
      target="_blank" 
      rel="noopener noreferrer" 
      v-if="project.liveUrl" 
      class="project-link"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
    >
      <i class="fas fa-external-link-alt"></i>
    </a>
              </div>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span class="tech-tag" v-for="(tech, techIndex) in project.technologies" :key="'tech-'+techIndex">
                {{ tech }}
              </span>
            </div>
            
            <!-- Bouton pour ouvrir la modal vidéo -->
            <button 
              v-if="project.videoUrl" 
              @click="openVideoModal(project)" 
              class="video-button"
            >
              <i class="fas fa-play-circle"></i> Voir la démo
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Vidéo -->
    <div class="video-modal" v-if="showModal" @click.self="closeVideoModal">
      <div class="video-modal-content">
        <button class="close-modal" @click="closeVideoModal">
          <i class="fas fa-times"></i>
        </button>
        <h3 class="modal-title">{{ currentProject.title }}</h3>
        <div class="video-container">
          <video 
            :src="currentProject.videoUrl" 
             id="video"
            autoplay
            muted
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      showModal: false,
      currentProject: {},
      projects: [
        {
          title: 'Rybis-Aerobotics',
          description: 'Développement du site web pour Rybis Aerobotics, une entreprise spécialisée dans les solutions technologiques avancées pour la sécurité et la défense. Le site présente leurs produits, services et innovations dans le domaine des drones et des systèmes basés sur l\'intelligence artificielle.',
          image: '/images/rybis.png',
          technologies: ['Next.js', 'Vecel', 'Backend', 'Tailwind CSS'],
          githubUrl: '#',
          liveUrl: 'https://rybisaerobotics.com',
          videoUrl: '/videos/Rybis-aerobotics.mp4' // Chemin vers votre fichier vidéo
        },
        {
          title: 'Foulisa Design',
          description: 'Développement et gestion du site web pour Foulisa, une entreprise digitale offrant des services de design, de graphisme et de marketing digital. Le site met en valeur leur expertise dans la création de visuels impactants, la gestion de campagnes marketing en ligne, et l\'accompagnement des entreprises dans l\'amélioration de leur présence digitale.',
          image: '/images/foulisa.png',
          technologies: ['PHP', 'Google Analytics', 'SEO'],
          githubUrl: '#',
          liveUrl: 'https://foulisa.com',
          videoUrl: '/videos/foulisa-design.mp4' // Chemin vers votre fichier vidéo
        },
        {
          title: 'Cetasso',
          description: 'Développement du site web pour CETASSO dans le cadre d\'un concours. Le site présente l\'association des étudiants africains du Sud-Sahara à l\'Oriental, mettant en avant ses activités, ses événements culturels et ses ressources éducatives. Il offre une interface dynamique et responsive pour faciliter l\'accès à l\'information pour les étudiants et les partenaires.',
          image: '/images/cetasso.png',
          technologies: ['Bootstrap', 'Laravel', 'Blade', 'MySQL','OWASP ZAP'],
          githubUrl: '#',
          liveUrl: 'https://cetasso.com',
          videoUrl: '/videos/cetasso.mp4' // Chemin vers votre fichier vidéo
        },
        {
          title: 'Naanatech',
          description: 'Développement du site web pour Naanatech, une entreprise innovante spécialisée dans les technologies avancées pour l\'industrie. Le site met en avant leurs produits et services, offrant des solutions technologiques de pointe pour améliorer les performances et la durabilité des entreprises.',
          image: '/images/naanatech.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP',"Google Cloud"],
          githubUrl: '#',
          liveUrl: 'https://naanatech.com',
          videoUrl: '/videos/naantech.mp4' // Chemin vers votre fichier vidéo
        },
        {
          title: 'Jardin de bébé',
          description: 'Développement du site web Jardin de Bébé, une plateforme d\'affiliation Amazon spécialisée dans la promotion de produits pour enfants. Le site permet aux utilisateurs de découvrir une sélection de produits adaptés aux besoins des jeunes parents, tout en générant des revenus via des liens d\'affiliation vers Amazon.',
          image: '/images/jb.png',
          technologies: ['MySQL','Laravel'],
          githubUrl: '#',
          liveUrl: 'https://jardin-de-bebe.com',
          videoUrl: '/videos/jardin-de-bebe.mp4' // Chemin vers votre fichier vidéo
        },
        {
          title: 'AzhaarMobility',
          description: 'Développement du site web pour Azhaar Mobility, une entreprise spécialisée dans les solutions de mobilité durable. Le site présente leurs produits et services, mettant en avant des solutions innovantes pour la mobilité électrique et les transports écologiques.',
          image: '/images/azhaar.png',
          technologies: ['PHP','MySQL','JavaScript'],
          githubUrl: '#',
          liveUrl: 'https://analytics-dashboard.com',
          videoUrl: '/videos/azhaar.mp4' // Chemin vers votre fichier vidéo
        }
      ]
    }
  },
  methods: {
    openVideoModal(project) {
      this.currentProject = project;
      this.showModal = true;
      document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
    },
    closeVideoModal() {
      this.showModal = false;
      document.body.style.overflow = ''; // Restaurer le scroll
    }
  },
  mounted() {
   
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
    
    // Fermer la modal avec la touche Échap
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showModal) {
        this.closeVideoModal();
      }
    });
  },
  beforeDestroy() {
    // Nettoyer l'écouteur d'événements
    window.removeEventListener('keydown', () => {});
  }
}
</script>

<style scoped>
.projects-section {
  background-color: #000;
  color: #fff;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.projects-section::before,
.projects-section::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
  border-radius: 50%;
  z-index: 0;
}

.projects-section::before {
  top: -50px;
  left: -50px;
}

.projects-section::after {
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

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
}

.project-card {
  background: rgba(30, 30, 30, 0.7);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.project-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 20px;
}

.project-link {
  width: 50px;
  height: 50px;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 0, 0, 0.3);
}

.project-link:hover {
  background: rgba(255, 0, 0, 0.4);
  transform: scale(1.1);
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #fff;
}

.project-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tech-tag {
  padding: 5px 12px;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(255, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* Styles pour le bouton vidéo */
.video-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 0, 0, 0.2);
  color: white;
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 10px;
}

.video-button:hover {
  background: rgba(255, 0, 0, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.2);
}

.video-button i {
  font-size: 1.1rem;
}

/* Styles pour la modal vidéo */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.video-modal-content {
  position: relative;
  background: #1a1a1a;
  border-radius: 15px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 0, 0, 0.2);
  overflow: hidden;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 1.2rem;
}

.close-modal:hover {
  background: rgba(255, 0, 0, 0.4);
  transform: rotate(90deg);
}

.modal-title {
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

@media (max-width: 1200px) {
  .projects-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }

  .projects-container {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  .project-card {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .video-modal-content {
    width: 95%;
  }
}

@media (max-width: 480px) {
  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
  
  .video-button {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
  
  .modal-title {
    font-size: 1.2rem;
    padding: 15px;
  }
}
</style>