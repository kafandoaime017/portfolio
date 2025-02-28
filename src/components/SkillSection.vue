<template>
    <section class="skills-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">
            <span class="red-text">C</span>ompétences
          </h2>
          <p class="section-subtitle">Mes expertises techniques et professionnelles</p>
        </div>
        
        <div class="skills-container">
          <div class="row">
            <!-- Compétences principales avec pourcentages -->
            <div class="col-lg-6">
              <div class="skills-group" data-aos="fade-right">
                <h3 class="skills-group-title">Développement</h3>
                
                <div class="skill-item" v-for="(skill, index) in mainSkills" :key="'main-'+index">
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-percentage">{{ skill.percentage }}%</span>
                  </div>
                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Compétences avec icônes -->
            <div class="col-lg-6">
              <div class="skills-group tools-group" data-aos="fade-left">
                <h3 class="skills-group-title">Outils & Technologies</h3>
                
                <div class="tools-grid">
                  <div class="tool-item" v-for="(tool, index) in tools" :key="'tool-'+index">
                    <div class="tool-icon">
                      <i :class="tool.icon"></i>
                    </div>
                    <div class="tool-name">{{ tool.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Compétences catégorisées -->
          <div class="category-skills" data-aos="fade-up" data-aos-delay="100">
            <h3 class="skills-group-title">Domaines d'expertise</h3>
            
            <div class="categories-container">
              <div class="category-item" v-for="(category, index) in categories" :key="'cat-'+index">
                <div class="category-header">
                  <div class="category-icon">
                    <i :class="category.icon"></i>
                  </div>
                  <h4 class="category-title">{{ category.name }}</h4>
                </div>
                <div class="category-skills-list">
                  <span class="category-skill" v-for="(skill, skillIndex) in category.skills" :key="'cat-skill-'+skillIndex">
                    {{ skill }}
                  </span>
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
    name: 'SkillsSection',
    data() {
      return {
        mainSkills: [
          { name: 'HTML/CSS', percentage: 90 },
          { name: 'JavaScript', percentage: 80 },
          { name: 'Python', percentage: 60 },
          { name: 'Vue.js', percentage: 88 },
          { name: 'React', percentage: 85 },
          { name: 'PHP/Laravel', percentage: 95 },
          { name: 'Node.js', percentage: 70 },
          
          { name: 'Symfony', percentage: 40 },
          { name: 'Flutter (mobile)', percentage: 30 },
        ],
        tools: [
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Figma', icon: 'fab fa-figma' },
  { name: 'VS Code', icon: 'fas fa-code' },
  { name: 'AWS', icon: 'fab fa-aws' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Sass', icon: 'fab fa-sass' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'PHP', icon: 'fab fa-php' },
  { name: 'Laravel', icon: 'fab fa-laravel' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'REST API', icon: 'fas fa-project-diagram' },
  { name: 'Jira', icon: 'fab fa-jira' },
  { name: 'NumPy', icon: 'fas fa-calculator' }, // Pas d'icône spécifique pour NumPy
  { name: 'Pandas', icon: 'fas fa-table' }, // Pas d'icône spécifique pour Pandas
  { name: 'Matplotlib', icon: 'fas fa-chart-line' }, // Pas d'icône spécifique pour Matplotlib
  { name: 'scikit-learn', icon: 'fas fa-brain' }, // Pas d'icône spécifique pour scikit-learn
  { name: 'TensorFlow', icon: 'fas fa-project-diagram' }, // Pas d'icône spécifique pour TensorFlow
 

  // Outils & Architectures
  { name: 'Git', icon: 'fab fa-git-alt' },


],
        categories: [
          { 
            name: 'Frontend', 
            icon: 'fas fa-laptop-code',
            skills: ['Responsive Design', 'SPA', 'UI/UX', 'Animations CSS', 'Web Performance', 'Accessibilité']
          },
          { 
            name: 'Backend', 
            icon: 'fas fa-server',
            skills: ['API RESTful', 'Base de données', 'Authentication', 'Performance', 'Sécurité']
          },
          { 
            name: 'DevOps', 
            icon: 'fas fa-cogs',
            skills: ['CI/CD', 'Déploiement', 'Conteneurisation', 'Cloud Services', 'Monitoring']
          },
          { 
            name: 'Gestion de projet', 
            icon: 'fas fa-tasks',
            skills: ['Agile/Scrum', 'Jira','Gitlab','github', 'Git Flow', 'Documentation', 'User Stories','Waterfall']
          },
          { 
            name: 'UX/UI Design',
            icon: 'fas fa-paint-brush', 
            skills: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Figma', 'Parcours Utilisateur']
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
  .skills-section {
    background-color: #000;
    color: #fff;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
  }
  
  .skills-section::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
  
  .skills-section::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
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
  
  .skills-container {
    position: relative;
    z-index: 2;
  }
  
  .skills-group {
    margin-bottom: 50px;
    background: rgba(30, 30, 30, 0.7);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
    height: 100%;
  }
  
  .skills-group:hover {
    transform: translateY(-5px);
  }
  
  .skills-group-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 15px;
    display: inline-block;
  }
  
  .skills-group-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: #ff0000;
  }
  
  /* Compétences principales avec pourcentages */
  .skill-item {
    margin-bottom: 25px;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .skill-percentage {
    color: #ff0000;
    font-weight: 700;
  }
  
  .skill-progress-bg {
    height: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  
  .skill-progress-fill {
    height: 100%;
    background: linear-gradient(to right, #ff0000, #ff5e5e);
    border-radius: 4px;
    position: relative;
    transition: width 1.5s ease;
  }
  
  .skill-progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.3;
    }
  }
  
  /* Compétences avec icônes */
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .tool-item {
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .tool-item:hover {
    transform: translateY(-5px);
  }
  
  .tool-icon {
    font-size: 2.2rem;
    color: #ff0000;
    margin-bottom: 10px;
    height: 60px;
    width: 60px;
    line-height: 60px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    margin: 0 auto 15px;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .tool-item:hover .tool-icon {
    background: rgba(255, 0, 0, 0.3);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  }
  
  .tool-name {
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  /* Compétences catégorisées */
  .category-skills {
    margin-top: 50px;
  }
  
  .categories-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }
  
  .category-item {
    background: rgba(30, 30, 30, 0.7);
    border-radius: 12px;
    padding: 25px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: 100%;
  }
  
  .category-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    background: rgba(40, 40, 40, 0.8);
  }
  
  .category-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .category-icon {
    font-size: 1.4rem;
    color: #fff;
    background: linear-gradient(135deg, #ff0000, #ff5e5e);
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    margin-right: 15px;
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  }
  
  .category-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }
  
  .category-skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .category-skill {
    display: inline-block;
    padding: 5px 12px;
    background: rgba(60, 60, 60, 0.6);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .category-skill:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: rgba(255, 0, 0, 0.3);
  }
  
  @media (max-width: 991px) {
    .tools-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 767px) {
    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .categories-container {
      grid-template-columns: 1fr;
    }
    
    .section-title {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 576px) {
    .tools-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    
    .tool-icon {
      font-size: 1.8rem;
      height: 50px;
      width: 50px;
      line-height: 50px;
    }
    
    .skills-group,
    .category-item {
      padding: 20px;
    }
  }
  </style>