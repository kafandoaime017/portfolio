<template>
    <section class="about-section">
      <div class="container">
        <div class="vertical-dotted-line"></div>
        <div class="row align-items-center">
          <div class="col-md-5">
            <div class="profile-container">
              <div class="profile-image-wrapper">
                <img src="/images/me.jpg" alt="Profile" class="img-fluid profile-image">
                <div class="profile-overlay"></div>
              </div>
              <div class="profile-border"></div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="about-content">
              <h2 class="section-title" data-aos="fade-up">
                <span class="red-text">A</span>propos
              </h2>
              <h3 class="about-subtitle" data-aos="fade-up" data-aos-delay="100">
  Alors qui est <span class="red-text">Aimé KAFANDO</span> ?
</h3>
<p class="about-text" data-aos="fade-up" data-aos-delay="200">
  Je m'appelle Aimé Relwendé KAFANDO, un passionné de développement web et d'innovation technologique. J'ai acquis mes compétences en développement full-stack au Maroc, et je poursuis actuellement une licence professionnelle en développement informatique à l'Université de Reims Champagne-Ardenne, en France. Mon parcours est guidé par la volonté de créer des solutions efficaces et novatrices pour répondre aux besoins des utilisateurs.
  <br><br>
  En parallèle, je me forme en autodidacte en Machine Learning et en Intelligence Artificielle, des domaines qui me fascinent et qui occupent une place importante dans mes projets futurs.
</p>


              <div class="stats-container" data-aos="fade-up" data-aos-delay="300">
                <div class="stat-item" v-for="(stat, index) in stats" :key="index">
                  <div class="stat-inner">
                    <span class="stat-number">{{stat.number}}<span class="plus">+</span></span>
                    <span class="stat-label">{{stat.label}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    data() {
      return {
        stats: [
        { number: 8, label: 'Projets livrés' },
  { number: 15, label: 'Technologies maîtrisées' },
  { number: 2, label: 'Années d\'expérience' },
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
  .about-section {
    background-color: #000;
    color: #fff;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
  }
  
  
  
  .profile-container {
    position: relative;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    z-index: 2;
  }
  
  .profile-image-wrapper {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    padding-bottom: 100%; /* Pour un cercle parfait */
  }
  
  .profile-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .profile-container:hover .profile-image {
    transform: scale(1.05);
  }
  
  .profile-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(135deg, rgba(255,0,0,0.7) 0%, rgba(0,0,0,0) 70%); */
    z-index: 2;
    border-radius: 50%;
  }
  
  .profile-border {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    /* border: 5px solid #ff0000; */
    z-index: 1;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(255, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }
  
  .section-title {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .red-text {
    color: #ff0000;
    font-weight: 800;
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }
  
  .about-subtitle {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
    font-weight: 600;
  }
  
  .about-text {
    margin-bottom: 2.5rem;
    line-height: 1.8;
    opacity: 0.9;
    font-weight: 400 !important;
    font-size: 1.05rem;
  }
  
  .stats-container {
    display: flex;
    gap: 1.5rem;
  }
  
  .stat-item {
    flex: 1;
    background-color: #ff0000;
    border-radius: 15px;
    padding: 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(255, 0, 0, 0.4);
  }
  
  .stat-inner {
    padding: 1.2rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }
  
  .stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,50,50,1) 100%);
    z-index: 1;
  }
  
  .stat-item::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .stat-item:hover::after {
    opacity: 1;
  }
  
  .stat-number {
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.3rem;
  }
  
  .plus {
    font-size: 1.3rem;
    vertical-align: super;
    margin-left: 2px;
  }
  
  .stat-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
  
  .about-content {
    padding-left: 2rem;
  }
  
  @media (max-width: 991px) {
    .about-content {
      padding-left: 0;
      margin-top: 3rem;
    }
  }
  
  @media (max-width: 768px) {
    .profile-container {
      margin-bottom: 3rem;
    }
    
    .stats-container {
      flex-wrap: wrap;
    }
    
    .stat-item {
      min-width: 120px;
      margin-bottom: 1rem;
    }
    
    .section-title {
      font-size: 2.3rem;
    }
    
    .about-subtitle {
      font-size: 1.5rem;
    }
  }
  
  /* Ajout d'éléments décoratifs */
  .about-section::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 5%;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .about-section::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  </style>