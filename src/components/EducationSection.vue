<template>
    <section class="education-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="red-text">F</span>ormation
          </h2>
          <p class="section-subtitle">Mon parcours académique</p>
        </div>
  
        <div class="timeline">
          <div 
            v-for="(education, index) in educations" 
            :key="'education-'+index"
            class="timeline-item"
            :class="{ 'right': index % 2 !== 0 }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
          <div class="timeline-content">
  <div class="timeline-date">{{ education.period }}</div>
  <div class="timeline-card">
    <div class="timeline-icon">
      <i :class="education.icon"></i>
    </div>
    <h3 class="timeline-title">{{ education.title }}</h3>
    <h4 class="timeline-school">{{ education.school }}</h4>
    <p class="timeline-location">{{ education.location }}</p> <!-- Ajout de la localisation -->
    <p class="timeline-description">{{ education.description }}</p>
    <div class="timeline-tags">
      <span v-for="(tag, tagIndex) in education.tags" 
            :key="'tag-'+tagIndex" 
            class="tag">
        {{ tag }}
      </span>
    </div>
    <!-- <a v-if="education.certificateUrl" 
       :href="education.certificateUrl" 
       target="_blank" 
       class="certificate-link">
      <i class="fas fa-award"></i>
      Voir le certificat
    </a> -->
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EducationSection',
    data() {
      return {
        educations:[
  {
    "period": "2024-2025",
    "title": "Licence professionnelle métiers du numérique, conception et réalisation web",
    "school": "Université de Reims-Champagne Ardenne - École d'ingénieurs en Sciences Industrielles et Numérique (EiSINe)",
    "location": "Charleville-Mézières, France",
    "description": "Formation approfondie en conception et réalisation web, avec un focus sur les technologies modernes et les bonnes pratiques en développement web.",
    "icon": "fas fa-graduation-cap",
    "tags": ["Développement Web", "UX/UI Design", "Communication", "Marketing Digital", "SEO"],
    "certificateUrl": "#"
  },
  {
    "period": "2022-2024",
    "title": "Diplôme de Technicien Spécialisé (BAC+2) en Développement digital, option web full stack",
    "school": "Institut Spécialisé de Technologie Appliquée ISTA Lazaret",
    "location": "Oujda, Maroc",
    "description": "Spécialisation en développement digital full stack, couvrant les technologies frontend et backend, avec une attention particulière aux bonnes pratiques de développement et à l'architecture des applications.",
    "icon": "fas fa-graduation-cap",
    "tags": ["React.js", "Node.js", "Express", "Laravel", "Base de données", "Cloud Computing"],
    "certificateUrl": "#"
  },
  {
    "period": "2021-2022",
    "title": "Baccalauréat, série scientifique Mention Mathématiques et sciences physiques (Série D)",
    "school": "Lycée Municipal de Yagma",
    "location": "Ouagadougou, Burkina Faso",
    "description": "Formation scientifique approfondie avec une spécialisation en mathématiques et sciences physiques.",
    "icon": "fas fa-graduation-cap",
    "tags": ["Mathématiques", "Physique", "Sciences"],
    "certificateUrl": "#"
  }
]


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
  .education-section {
    background-color: #000;
    color: #fff;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .education-section::before,
  .education-section::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .education-section::before {
    top: -50px;
    left: -50px;
  }
  
  .education-section::after {
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
  
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .timeline::after {
    content: '';
    position: absolute;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #ff0000, transparent);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  
  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    z-index: 2;
  }
  
  .timeline-item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff0000;
    border: 4px solid #000;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
  }
  
  .timeline-item.right {
    left: 50%;
  }
  
  .timeline-item.right::after {
    left: -10px;
  }
  
  .timeline-content {
    position: relative;
  }
  
  .timeline-date {
    position: absolute;
    top: -30px;
    font-size: 1rem;
    font-weight: 600;
    color: #ff0000;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }
  
  .timeline-card {
    background: rgba(30, 30, 30, 0.7);
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .timeline-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  .timeline-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #ff0000;
    border: 1px solid rgba(255, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  
  .timeline-card:hover .timeline-icon {
    background: rgba(255, 0, 0, 0.2);
    transform: scale(1.1);
  }
  
  .timeline-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: #fff;
  }
  
  .timeline-school {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  .timeline-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .timeline-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .tag {
    padding: 5px 12px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .tag:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  .certificate-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 25px;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 0, 0, 0.2);
  }
  
  .certificate-link:hover {
    background: rgba(255, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  .certificate-link i {
    color: #ff0000;
  }
  
  @media (max-width: 991px) {
    .timeline::after {
      left: 31px;
    }
  
    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 20px;
    }
  
    .timeline-item.right {
      left: 0;
    }
  
    .timeline-item::after,
    .timeline-item.right::after {
      left: 21px;
    }
  
    .timeline-date {
      position: relative;
      top: 0;
      margin-bottom: 10px;
    }
  }
  
  @media (max-width: 576px) {
    .section-title {
      font-size: 2.2rem;
    }
  
    .timeline-card {
      padding: 20px;
    }
  
    .timeline-title {
      font-size: 1.2rem;
    }
  
    .timeline-school {
      font-size: 1rem;
    }
  
    .timeline-description {
      font-size: 0.9rem;
    }
  }
  </style>