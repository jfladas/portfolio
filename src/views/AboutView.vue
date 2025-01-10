<template>
  <div class="content">
    <div class="content-left">
      <h1 class="title hoverable">
        <p class="jap thatsme" ref="typedtext2"></p>
        {{ aboutContent.title }}
      </h1>
      <h2 class="subtitle"></h2>
      <ContentSections :sections="aboutContent.sections" :currentIndexes="currentIndexes"
        :isOverlayVisible="isOverlayVisible" :overlayIndex="overlayIndex" @toggle-overlay="toggleOverlay"
        @next-slide="nextSlide" @prev-slide="prevSlide" />
    </div>
    <div class="content-right">
      <div class="me-container hoverable">
        <p class="jap overlay" ref="typedtext"></p>
        <img src="/src/assets/me.png" alt="me" class="me" />
        <img src="/src/assets/me_glitch.png" alt="me" class="me-glitch" />
        <img src="/src/assets/me_dark.png" alt="me" class="me-dark" />
      </div>
      <LinksDownloads :links="aboutContent.links" :downloads="aboutContent.downloads" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { aboutContent } from '@/data/projects.js'
import ContentSections from '@/components/ContentSections.vue'
import LinksDownloads from '@/components/LinksDownloads.vue'

const isOverlayVisible = ref(false)
const overlayIndex = ref(null)
const currentIndexes = ref([])

const toggleOverlay = (type, index) => {
  overlayIndex.value = index
  isOverlayVisible.value = !isOverlayVisible.value
}

const nextSlide = (index) => {
  currentIndexes.value[index] = (currentIndexes.value[index] + 1) % aboutContent.sections[index].images.length
}

const prevSlide = (index) => {
  currentIndexes.value[index] = (currentIndexes.value[index] - 1 + aboutContent.sections[index].images.length) % aboutContent.sections[index].images.length
}
</script>

<style scoped>
.subtitle {
  height: 2rem;
  margin-bottom: 3rem;
}

.subtitle::before {
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--aqua);
  content: 'frontend web developer';
  animation-name: change;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes change {

  0%,
  2%,
  18%,
  22%,
  38%,
  42%,
  58%,
  62%,
  78%,
  82%,
  98%,
  100% {
    color: var(--aqua);
  }

  4%,
  16%,
  24%,
  36%,
  44%,
  56%,
  64%,
  76%,
  84%,
  96% {
    color: var(--mint);
  }

  6%,
  14%,
  26%,
  34%,
  46%,
  54%,
  66%,
  74%,
  86%,
  94% {
    color: var(--sky);
  }

  8%,
  12%,
  28%,
  32%,
  48%,
  52%,
  68%,
  72%,
  88%,
  92% {
    color: var(--deep);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    color: rgba(var(--navy-rgb), 0);
  }

  0%,
  100% {
    content: "frontend web developer";
  }

  20% {
    content: "creative coder";
  }

  40% {
    content: "digital ideation student";
  }

  60% {
    content: "gaymer";
  }

  80% {
    content: "powerpoint enthusiast";
  }
}

.me-container {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.me-container:hover .me-dark {
  animation-play-state: running;
}

.me {
  position: relative;
  width: 30vw;
  height: auto;
  opacity: 1;
  transition: opacity 0.3s linear;
  z-index: 3;
}

.me:hover {
  opacity: 0;
}

.me-glitch {
  position: absolute;
  left: 0;
  width: 30vw;
  z-index: 2;
}

.me-dark {
  position: absolute;
  left: 0;
  width: 30vw;
  height: auto;
  z-index: 1;
  animation: stretch 4s infinite ease-in-out;
  animation-play-state: paused;
}

@keyframes stretch {
  0% {
    transform: translate(0, 0) scale(1, 1);
  }

  50% {
    transform: translate(50%, 0) scale(0.75, 1);
  }

  100% {
    transform: translate(0, 0) scale(1, 1);
  }
}

.overlay,
.thatsme {
  position: absolute;
  padding: 1rem;
  width: 35vw;
  font-size: 2vw;
  background: linear-gradient(to right, white, var(--pink), var(--purple) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  white-space: nowrap;
  z-index: 4;
  pointer-events: none;
}

.title {
  position: relative;
  background: linear-gradient(to right, white, var(--aqua));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: transform 1s;
}

.title:hover {
  transform: translate(-5vw, 0);
}

.title::before {
  position: absolute;
  content: "Lukas Bucher";
  inset: 0;
  color: white;
  background-color: var(--navy);
  opacity: 1;
  z-index: 1;
  transition: opacity 1s;
}

.title:hover::before {
  opacity: 0;
}

.title:hover .thatsme {
  opacity: 1;
  transform: translate(-1vw, calc(-2.5rem - 2vw));
}

.me-container:hover .overlay {
  opacity: 1;
}

@media (max-width: 1200px) {

  .me-container {
    width: 85vw;
    overflow-x: hidden;
  }

  .me,
  .me-glitch,
  .me-dark {
    width: 75vw;
  }

  .overlay,
  .thatsme {
    width: 100%;
    font-size: 5vw;
  }
}
</style>