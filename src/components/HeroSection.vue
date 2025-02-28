<template>
    <div class="hero-section">
      <div class="binary-rain" aria-hidden="true">
        <div v-for="(column, index) in binaryColumns" :key="index" class="binary-column" 
             :style="{ left: `${column.position}%`, animationDuration: `${column.speed}s`, animationDelay: `${column.delay}s` }">
          <span v-for="(bit, bitIndex) in column.bits" :key="bitIndex" class="binary-bit">{{ bit }}</span>
        </div>
      </div>
      
      <div class="overlay"></div>
      
      <div class="container-fluid px-0">
        <div class="row hero-content g-0">
          <div class="col-lg-7 d-flex align-items-center">
            <div class="hero-text ps-md-5 ps-3 pe-3">
              <div class="badge-container">
                <div class="tag-box mb-4">FULL STACK DEVELOPPER</div>
              </div>
              <h1 class="display-3 fw-bold mb-3">I'M <span class="name">AIMÉ R KAFANDO</span></h1>
              <h2 class="mb-4">Professional full stack Developper<span class="dots">...</span></h2>
              <p class="lead mb-5">
                Le code est mon langage, et l'innovation ma passion. Je transforme les défis en opportunités pour créer des solutions web qui font la différence.
              </p>
              <div class="buttons d-flex gap-3">
                <a  href="#contact" class="btn btn-primary btn-lg rounded-pill">
                  <i class="bi bi-envelope-fill me-2"></i>Contact-Moi
                </a>
                <a target="_blank" href="/docs/CV_KAFANDO_AIME.pdf" class="btn btn-outline-light btn-lg rounded-pill">
                  <i class="bi bi-download me-2"></i>Download CV
                </a>
              </div>
              
              <!-- <div class="social-icons mt-5">
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-envelope"></i></a>
              </div> -->
            </div>
          </div>
          
          <div class="col-lg-5 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <div class="hero-image-container">
              <div class="image-glow"></div>
              <img src="/images/moi.png" alt="Aime Kafando - Full Stack Developer" class="hero-img" />
              <div class="tech-badges">
                <span class="tech-badge">HTML5</span>
                <span class="tech-badge">CSS3</span>
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        binaryColumns: []
      };
    },
    mounted() {
      this.generateBinaryColumns();
    },
    methods: {
      generateBinaryColumns() {
        // More columns for better coverage
        const numberOfColumns = 35;
        // Calculate column width based on number of columns for uniformity
        const columnWidth = 100 / numberOfColumns;
        
        for (let i = 0; i < numberOfColumns; i++) {
          // Position columns at regular intervals for parallel effect
          const position = i * columnWidth;
          
          // More consistent speed (less variation)
          const speed = 18 + Math.random() * 8;
          
          // Staggered delays for natural look
          const delay = Math.random() * 10;
          
          const column = {
            position: position,
            speed: speed,
            delay: delay,
            bits: this.generateBinaryBits()
          };
          this.binaryColumns.push(column);
        }
      },
      generateBinaryBits() {
        // Using a fixed length for uniformity
        const length = 30;
        const bits = [];
        for (let i = 0; i < length; i++) {
          bits.push(Math.round(Math.random()));
        }
        return bits;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');
  
  .hero-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #050505;
    overflow: hidden;
    color: #fff;
    display: flex;
    align-items: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(40, 40, 40, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    min-height: 100vh;
  }
  
  .hero-text {
    position: relative;
    z-index: 10;
  }
  
  .badge-container {
    display: flex;
    margin-bottom: 1.5rem;
  }
  
  .tag-box {
    display: inline-block;
    background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    border-left: 3px solid #ff1a1a;
  }
  .hero-img {
    width: 100%; /* Par défaut, l'image prendra toute la largeur de son conteneur */
    height: auto; /* Maintien le ratio de l'image */
}

@media (max-width: 768px) {
    .hero-img {
        width: 100%; /* Réduit la taille de l'image à 80% de la largeur du conteneur sur les écrans de taille mobile */
        margin: 0 auto; /* Centre l'image horizontalement */
    }
}

@media (max-width: 480px) {
    .hero-img {
        width: 100%; /* Réduit encore plus l'image sur les très petits écrans */
    }
}

  
  h1 {
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  .name {
    color: #ff1a1a;
    font-weight: 900;
    position: relative;
    display: inline-block;
  }
  
  .name::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 10px;
    background-color: rgba(255, 26, 26, 0.2);
    z-index: -1;
    transform: skewX(-15deg);
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 400;
    color: #d0d0d0;
  }
  
  .dots {
    color: #ff1a1a;
    animation: blink 1.5s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #aaa;
    line-height: 1.7;
    max-width: 650px;
  }
  
  .buttons {
    display: flex;
    gap: 20px;
  }
  
  .btn {
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    border-width: 2px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #ff1a1a 0%, #cc0000 100%);
    border-color: transparent;
    box-shadow: 0 8px 15px rgba(204, 0, 0, 0.3);
  }
  
  .btn-primary:hover {
    background: linear-gradient(135deg, #ff3333 0%, #ff1a1a 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 26, 26, 0.4);
  }
  
  .btn-outline-light {
    border-color: #ff1a1a;
    color: white;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .btn-outline-light::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 26, 26, 0.1);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  .btn-outline-light:hover {
    border-color: #ff3333;
    background-color: transparent;
    transform: translateY(-3px);
  }
  
  .btn-outline-light:hover::after {
    left: 0;
  }
  
  .hero-image-container {
    position: relative;
    padding: 20px;
    z-index: 5;
  }
  
  .hero-img {
    max-height: 80vh;
    object-fit: contain;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
    transition: all 0.5s ease;
  }
  
  .hero-img:hover {
    transform: scale(1.02);
  }
  
  .image-glow {
    position: absolute;
    top: 10%;
    right: -40px;
    bottom: 10%;
    width: 150px;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.15), transparent);
    filter: blur(15px);
    z-index: 1;
    animation: pulse 3s infinite alternate;
  }
  
  @keyframes pulse {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
  }
  
  .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1a1a1a;
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .social-icon:hover {
    background-color: #ff1a1a;
    transform: translateY(-3px);
  }
  
  .tech-badges {
    position: absolute;
    top: 10%;
    right: 10%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 3;
  }
  
  .tech-badge {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    border-left: 3px solid #ff1a1a;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    animation: fadeInRight 0.5s both;
    animation-delay: calc(var(--i) * 0.1s);
  }
  
  .tech-badge:nth-child(1) { --i: 1; }
  .tech-badge:nth-child(2) { --i: 2; }
  .tech-badge:nth-child(3) { --i: 3; }
  .tech-badge:nth-child(4) { --i: 4; }
  .tech-badge:nth-child(5) { --i: 5; }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  /* Scroll indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .scroll-indicator:hover {
    opacity: 1;
  }
  
  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 20px;
    position: relative;
  }
  
  .wheel {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    animation: scroll 2s infinite;
  }
  
  .scroll-text {
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 1px;
  }
  
  @keyframes scroll {
    0% {
      opacity: 1;
      top: 10px;
    }
    100% {
      opacity: 0;
      top: 30px;
    }
  }
  
  /* Binary rain animation - updated */
  .binary-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.2; /* Reduced opacity as requested */
  }
  
  .binary-column {
    position: absolute;
    top: -300px;
    display: flex;
    flex-direction: column;
    animation: rain linear infinite;
    width: 20px; /* Fixed width for uniformity */
    text-align: center; /* Center the binary digits */
  }
  
  .binary-bit {
    font-family: monospace;
    font-size: 14px;
    color: rgba(144, 144, 144, 0.872);
    text-shadow: 0 0 3px rgba(40, 40, 40, 0.491);
    margin: 2px 0; /* Consistent spacing */
    display: block; /* Ensures proper alignment */
  }
  
  @keyframes rain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  
  @media (max-width: 992px) {
    .hero-content {
      flex-direction: column;
    }
    
    .hero-text {
      padding: 3rem 1.5rem;
      text-align: center;
    }
    
    .badge-container {
      justify-content: center;
    }
    
    .buttons {
      justify-content: center;
    }
    
    .social-icons {
      justify-content: center;
    }
    
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    .hero-image-container {
      margin-top: 2rem;
      /* max-width: 80%; */
      margin-left: auto;
      margin-right: auto;
    }
    
    .tech-badges {
      position: static;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 2rem;
    }
    
    .image-glow {
      display: none;
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    .buttons {
      flex-direction: column;
      gap: 15px;
    }
    
    .btn {
      width: 100%;
    }
    
    .hero-image-container {
      max-width: 100%;
    }
  }
  </style>