<template>
    <div>
        <Nav/>
    </div><br><br>
    <section id="home">
        <HeroSection/>
    </section>
    <section id="about">
        <AboutSection/>
    </section>
    <section id="experiences">
        <ExperienceSection/>
    </section>
    <section id="skills">
        <SkillSection/>
    </section>
    <section id="projects">
        <ProjectSection/>
    </section>
    <section id="education">
        <EducationSection/>
    </section>
    <section id="temoignages">
        <TestimonialSection/>
    </section>
    <section id="contact">
        <ContactSection/>
    </section>
    <section>
        <FooterSection/>
    </section>
</template>

<script setup>
    import { useHead } from '@vueuse/head' // Importer useHead pour gérer les métadonnées
    import Nav from '@/components/Nav.vue'
    import HeroSection from '@/components/HeroSection.vue'
    import AboutSection from '@/components/AboutSection.vue'
    import ExperienceSection from '@/components/ExperienceSection.vue'
    import SkillSection from '@/components/SkillSection.vue'
    import ProjectSection from '@/components/ProjectSection.vue'
    import EducationSection from '@/components/EducationSection.vue'
    import ContactSection from '@/components/ContactSection.vue'
    import FooterSection from '@/components/FooterSection.vue'
    import TestimonialSection from '@/components/TestimonialSection.vue'

    // Définir les métadonnées de la page pour améliorer le SEO
    useHead({
        title: 'Aimé Relwendé KAFANDO - Développeur Web',
        meta: [
            { name: 'description', content: 'Découvrez mon portfolio de développeur web. Retrouvez mes projets, expériences, compétences et formations.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'portfolio, développeur web, projets, compétences, développement web, Vue.js, Laravel ,Développeur France ,Burkina technologies, AI',},
            { property: 'og:title', content: 'Mon Portfolio - Développeur Web' },
            { property: 'og:description', content: 'Découvrez mon portfolio de développeur web. Retrouvez mes projets, expériences, compétences et formations.' },
            { property: 'og:image', content: '/images/moi.jpg' },
            { property: 'og:url', content: window.location.href },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Aimé KAFANDO - Développeur Web' },
            { name: 'twitter:description', content: 'Découvrez mon portfolio de développeur web.' },
            { name: 'twitter:image', content: '/images/moi.jpg' }
        ]
    })
</script>

<style scoped>
/* Ajouter ici tes styles spécifiques si nécessaire */
</style>
