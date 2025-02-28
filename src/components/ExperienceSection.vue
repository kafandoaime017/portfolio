<template>
    <section class="experience-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="red-text">E</span>xperience
          </h2>
          <p class="section-subtitle">Mon parcours professionnel</p>
        </div>
        
        <div class="timeline-container">
          <div class="timeline-line"></div>
          
          <div class="timeline-item" 
               v-for="(experience, index) in experiences" 
               :key="index"
               :class="{ 'right-aligned': index % 2 !== 0 }"
               data-aos="fade-up"
               :data-aos-delay="index * 100">
            <div class="timeline-dot">
              <span class="dot-inner"></span>
            </div>
            <div class="timeline-content">
              <div class="experience-date">{{ experience.period }}</div>
              <div class="experience-role">{{ experience.role }}</div>
              <div class="experience-company">
                <span class="company-name">{{ experience.company }}</span>
                <span class="location">{{ experience.location }}</span>
              </div>
              <div class="experience-description">
                {{ experience.description }}
              </div>
              <div class="skills-container">
                <span class="skill-badge" v-for="(skill, skillIndex) in experience.skills" :key="skillIndex">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ExperienceSection',
    data() {
      return {
        experiences: [
          {
            period: "2023 - Présent (2 ans)",
            role: "Développeur Full Stack",
            company: "FOULISA DESIGN",
            location: "Ouagadougou, Burkina Faso | Télétravail",
            description: "Développement des sites web et d'applications web de l'entreprise avec Next.js, React.js, Vue.js et Laravel. Gestion de projets et collaboration avec une équipe compétente.",
            skills: ["Vue.js","React", "Laravel", "MySQL", "AWS", "Git",'Hostinger']
          },
          {
            period: "Mars 2024 - Mai 2024 (2 mois)",
            role: "Développeur PHP/Laravel",
            company: "Ecole National de Commerce et de Gestion",
            location: "Oujda, Maroc",
            description: "Création d'interfaces utilisateur dynamiques et responsive. Optimisation des performances et accessibilité web.",
            skills: ["JavaScript", "React", "SASS", "Bootstrap", "Webpack"]
          },
          {
            period: "Juillet 2023 - Août 2023 (1 mois)",
            role: "Developpeur Web",
            company: "Conseil Régional de l'Oriental",
            location: "Oujda, Maroc",
            description: "Intégration de maquettes graphiques en HTML/CSS. Création de sites vitrines et e-commerce pour divers clients.",
            skills: ["HTML5", "CSS3", "WordPress", "Photoshop", "jQuery"]
          }
        ]
      }
    },
    mounted() {
      // Si vous utilisez AOS pour les animations
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  }
  </script>
  
  <style scoped>
  .experience-section {
    background-color: #000;
    color: #fff;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .experience-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .experience-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
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
  
  .timeline-container {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
  }
  
  .timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(to bottom, rgba(255,0,0,0.7), rgba(255,0,0,0.3));
    transform: translateX(-50%);
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 60px;
    width: 50%;
    padding-right: 40px;
    z-index: 2;
  }
  
  .timeline-item.right-aligned {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 40px;
  }
  
  .timeline-dot {
    position: absolute;
    top: 0;
    right: -9px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ff0000;
    box-shadow: 0 0 0 4px rgba(255, 0, 0, 0.2);
    z-index: 3;
  }
  
  .timeline-item.right-aligned .timeline-dot {
    right: auto;
    left: -9px;
  }
  
  .dot-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #fff;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
  
  .timeline-content {
    background: rgba(30, 30, 30, 0.8);
    border-radius: 8px;
    padding: 20px;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }
  
  .timeline-content::before {
    content: '';
    position: absolute;
    top: 15px;
    right: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid rgba(30, 30, 30, 0.8);
  }
  
  .timeline-item.right-aligned .timeline-content::before {
    right: auto;
    left: -10px;
    border-left: none;
    border-right: 10px solid rgba(30, 30, 30, 0.8);
  }
  
  .experience-date {
    display: inline-block;
    padding: 4px 10px;
    background-color: #ff0000;
    color: #fff;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 10px;
    box-shadow: 0 3px 8px rgba(255, 0, 0, 0.3);
  }
  
  .experience-role {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
  }
  
  .experience-company {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1rem;
  }
  
  .company-name {
    font-weight: 600;
    color: #ff9191;
  }
  
  .location {
    margin-left: 10px;
    opacity: 0.7;
    font-size: 0.9rem;
    position: relative;
    padding-left: 18px;
  }
  
  .location::before {
    
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.9rem;
  }
  
  .experience-description {
    line-height: 1.6;
    margin-bottom: 20px;
    opacity: 0.9;
  }
  
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .skill-badge {
    display: inline-block;
    padding: 4px 12px;
    background: linear-gradient(135deg, rgba(60, 60, 60, 0.8), rgba(40, 40, 40, 0.8));
    border-radius: 20px;
    font-size: 0.8rem;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .skill-badge:hover {
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0.3));
    transform: translateY(-2px);
  }
  
  @media (max-width: 991px) {
    .timeline-line {
      left: 20px;
    }
    
    .timeline-item, 
    .timeline-item.right-aligned {
      width: 100%;
      margin-left: 0;
      padding-left: 50px;
      padding-right: 0;
    }
    
    .timeline-dot,
    .timeline-item.right-aligned .timeline-dot {
      left: 11px;
      right: auto;
    }
    
    .timeline-content::before,
    .timeline-item.right-aligned .timeline-content::before {
      left: -10px;
      right: auto;
      border-left: none;
      border-right: 10px solid rgba(30, 30, 30, 0.8);
    }
  }
  
  @media (max-width: 576px) {
    .section-title {
      font-size: 2.2rem;
    }
    
    .experience-role {
      font-size: 1.2rem;
    }
    
    .timeline-container {
      padding-left: 0;
    }
    
    .timeline-item, 
    .timeline-item.right-aligned {
      padding-left: 40px;
    }
  }
  </style>