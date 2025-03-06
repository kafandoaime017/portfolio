<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <!-- Logo ou nom du site -->
        <a class="navbar-brand" href="#">
          <img src="/images/icon.svg" height="35" alt="Logo" class="d-inline-block align-middle" /> 
          <span class="brand-text">Aimé KAFANDO</span>
        </a>

        <!-- Bouton du menu hamburger -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Contenu du menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'home' }" href="#home" @click="smoothScroll('home')">Acceuil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about" @click="smoothScroll('about')">A propos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'experiences' }" href="#experiences" @click="smoothScroll('experiences')">Experiences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'skills' }" href="#skills" @click="smoothScroll('skills')">Compétences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'projects' }" href="#projects" @click="smoothScroll('projects')">Projets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'education' }" href="#education" @click="smoothScroll('education')">Formation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'temoignages' }" href="#temoignages" @click="smoothScroll('temoignages')">Témoignages</a>
            </li>
          </ul>

          <!-- Bouton Contact -->
          <button class="btn btn-contact px-4 py-2" type="button" @click="smoothScroll('contact')">Contact</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// État pour suivre la section active
const activeSection = ref('home');

// Fonction pour le défilement fluide
const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Fonction pour détecter la section visible
const handleScroll = () => {
  const sections = ['home', 'about', 'experiences', 'skills', 'education', 'projects', 'contact'];
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

// Ajouter un écouteur d'événement pour le scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Nettoyer l'écouteur d'événement
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="css">
/* Navbar */
.navbar {
  background-color: #151515 !important;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  transition: all 0.4s ease;
  border-bottom: 1px solid #333;
}
.navbar .navbar-toggler
{
  border-radius: 100px !important;
  border: 1px solid white;
}

.navbar .navbar-toggler-icon {
  color: white !important;

}

.navbar .navbar-brand .brand-text {
  color: #ffffff !important;
  font-weight: bold;
  margin: 2px;
  font-size: 1.4rem;
}

.navbar .navbar-nav .nav-item .nav-link {
  color: #fff;
  font-size: 1.1rem;
  padding: 10px 20px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
}

.navbar .navbar-nav .nav-item .nav-link.active {
  color: #df0707 !important;
}

.navbar .navbar-nav .nav-item .nav-link:hover {
  color: #df0707 !important;
}

.navbar .navbar-nav .nav-item .nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #df0707;
  transition: width 0.3s ease;
}

.navbar .navbar-nav .nav-item .nav-link.active::after,
.navbar .navbar-nav .nav-item .nav-link:hover::after {
  width: 100%;
}

.navbar .btn-contact {
  background-color: #df0707;
  color: white;
  border: 2px solid #df0707;
  border-radius: 30px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.navbar .btn-contact:hover {
  background-color: white;
  color: #df0707;
  border: 2px solid #df0707;
}

/* Mobile */
@media (max-width: 991px) {
  .navbar .navbar-nav .nav-item .nav-link {
    padding: 10px 15px;
    font-size: 1rem;
  }

  .navbar .btn-contact {
    width: 100%;
    padding: 12px;
    font-size: 1.1rem;
    margin-top: 15px;
  }
}
</style>
