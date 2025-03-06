<template>
    <section class="testimonial-section" id="testimonials">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-down">
                <span style="color:red">T</span>émoignages
            </h2>
           

            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(testimonial, index) in testimonials" 
                             :key="index"
                             :class="['carousel-item', index === 0 ? 'active' : '']">
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="avatar-wrapper">
                                    <div class="avatar">{{ testimonial.initials }}</div>
                                    <div class="glow"></div>
                                </div>
                                <h3 class="client-name">{{ testimonial.name }}</h3>
                                <p class="client-position">{{ testimonial.position }}</p>
                                <div class="quote-icon">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                                <p class="testimonial-text">{{ testimonial.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>

                <div class="carousel-indicators">
                    <button v-for="(_, index) in testimonials" 
                                    :key="index"
                                    :class="{ active: index === 0 }"
                                    type="button"
                                    :data-bs-target="'#testimonialCarousel'"
                                    :data-bs-slide-to="index">
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TestimonialSection',
    data() {
        return {
            testimonials: [
    {
        "initials": "MK",
        "name": "Moussa Kaboré",
        "position": "Développeur full-stack",
        "text": "Aimé est un professionnel talentueux. Il a su résoudre rapidement des défis techniques complexes tout en respectant les délais. Une collaboration vraiment enrichissante."
    },
    {
        "initials": "BO",
        "name": "Blaise Ouédraogo",
        "position": "Entrepreneur ",
        "text": "Je suis vraiment impressionné par les compétences techniques d'Aimé. Il a une capacité unique à transformer des idées en solutions concrètes et efficaces."
    },
    {
        "initials": "DS",
        "name": "Daouda Sawadogo",
        "position": "Consultant en sécurité informatique",
        "text": "Aimé est une personne sur qui l'on peut compter. Il maîtrise parfaitement son domaine et a toujours une approche innovante face aux défis techniques."
    }
]

        }
    },
    mounted() {
        // Initialize Bootstrap carousel
        new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
            interval: 5000,
            touch: true
        })
    }
}
</script>

<style scoped>
.testimonial-section {
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.section-title {
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 60px;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
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

.testimonial-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 40px;
    margin: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
    transition: all 0.3s ease;
}

.testimonial-card:hover {
    /* transform: translateY(-10px); */
    /* box-shadow: 0 20px 40px rgba(255, 51, 102, 0.2); */
}

.avatar-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 30px;
}

.avatar {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ff3366, #ff2828);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
    position: relative;
    z-index: 2;
}

.glow {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(135deg, #ff3366, #ff6b6b);
    border-radius: 50%;
    filter: blur(20px);
    opacity: 0.5;
    z-index: 1;
}

.client-name {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 15px 0;
    text-align: center;
}

.client-position {
    color: #ff3366;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 25px;
}

.testimonial-text {
    color: #ffffff;
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: center;
    font-style: italic;
}

.quote-icon {
    color: rgba(255, 51, 51, 0.2);
    font-size: 3rem;
    text-align: center;
    margin: 20px 0;
}

.carousel-control-prev,
.carousel-control-next {
    width: 50px;
    height: 50px;
    background: rgba(231, 3, 11, 0.8);
    border-radius: 50%;
    margin: auto 20px;
}

.carousel-indicators button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    margin: 0 5px;
}

.carousel-indicators button.active {
    background-color: #ff3333;
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .testimonial-card {
        padding: 20px;
        margin: 10px;
    }
    
    .avatar-wrapper {
        width: 80px;
        height: 80px;
    }
    
    .client-name {
        font-size: 1.4rem;
    }
}
</style>