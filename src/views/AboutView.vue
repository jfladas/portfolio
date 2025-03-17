<template>
  <FullOverlay :isOverlayVisible="isOverlayVisible" :overlayType="overlayType" />
  <div class="content">
    <div class="content-left">
      <h1 class="title hoverable">
        <p class="jap thatsme" ref="typedtext2"></p>
        {{ aboutContent.title }}
      </h1>
      <h2 class="subtitle"></h2>
      <div id="contact"></div>
      <ContentSections :sections="aboutContent.sections" :currentIndexes="currentIndexes"
        :isOverlayVisible="isOverlayVisible" :overlayIndex="overlayIndex" @toggle-overlay="toggleOverlay"
        @next-slide="nextSlide" @prev-slide="prevSlide" />
    </div>
    <div class="content-right">
      <div class="me-container hoverable">
        <p class="jap overtext" ref="typedtext"></p>
        <img src="/src/assets/me.png" alt="me" class="me" />
        <img src="/src/assets/me_glitch.png" alt="me" class="me-glitch" />
        <img src="/src/assets/me_dark.png" alt="me" class="me-dark" />
      </div>
      <div class="right-container">
        <LinksDownloads :links="aboutContent.links" :downloads="aboutContent.downloads" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, inject } from 'vue'
import { aboutContent as enAbout } from '@/data/projects.js'
import { ueberContent as deAbout } from '@/data/projekte.js'
import ContentSections from '@/components/ContentSections.vue'
import LinksDownloads from '@/components/LinksDownloads.vue'
import FullOverlay from '@/components/FullOverlay.vue'

const currentLanguage = inject('currentLanguage')
const aboutContent = computed(() => currentLanguage.value === 'en' ? enAbout : deAbout)

const isOverlayVisible = ref(false)
const overlayType = ref('')
const overlayIndex = ref(null)
const currentIndexes = ref([])

const nextSlide = (index) => {
  currentIndexes.value[index] = (currentIndexes.value[index] + 1) % aboutContent.value.sections[index].images.length
}

const prevSlide = (index) => {
  currentIndexes.value[index] = (currentIndexes.value[index] - 1 + aboutContent.value.sections[index].images.length) % aboutContent.value.sections[index].images.length
}

const toggleOverlay = (type, index) => {
  overlayType.value = type
  overlayIndex.value = index
  isOverlayVisible.value = !isOverlayVisible.value
}


const typedtext = ref(null)
const typedtext2 = ref(null)
const speed = ref(100);

const text = ref([
  "東京にいる私",
  "雨上がりの光が踊る街",
  "静かな夜に漂うネオンの輝き",
  "見知らぬ道を歩く私",
  "ビルの隙間にのぞく赤い灯",
  "透明な傘に映る街の色",
  "光と影が交差する夜",
  "ひとりの旅が描く物語",
  "足元で流れる雨のリズム",
  "",
  ""
]);

const index = ref(0);
const length = ref(text.value[0].length);
const pos = ref(0);
const content = ref('');
const row = ref(0);
const timeout = ref(null);
const blinkTimeout = ref(null);
const isBlinking = ref(false);

const text2 = ref("それが私の名前です！");
const pos2 = ref(0);
const timeout2 = ref(null);
const blinkTimeout2 = ref(null);
const isBlinking2 = ref(false);

const resetTypewriter = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  if (blinkTimeout.value) {
    clearTimeout(blinkTimeout.value);
  }
  content.value = '';
  index.value = 0;
  pos.value = 0;
  length.value = text.value[0].length;
  isBlinking.value = false;
};
const typewriter = () => {
  content.value = '';
  row.value = 0;
  const destination = typedtext.value;
  row.value = 0;

  while (row.value < index.value) {
    content.value += text.value[row.value++] + '<br />';
  }
  if (index.value < text.value.length - 1) {
    destination.innerHTML = content.value + text.value[index.value].substring(0, pos.value) + "★";
  }
  if (pos.value++ === length.value) {
    pos.value = 0;
    index.value++;
    if (index.value !== text.value.length - 1) {
      if (text.value[index.value]) {
        length.value = text.value[index.value].length;
      }
      timeout.value = setTimeout(typewriter, speed.value * 4);
    } else {
      blinkStar();
    }
  } else {
    timeout.value = setTimeout(typewriter, speed.value);
  }
};
const blinkStar = () => {
  const destination = typedtext.value;
  if (isBlinking.value) {
    destination.innerHTML = content.value + "★";
  } else {
    destination.innerHTML = content.value;
  }
  isBlinking.value = !isBlinking.value;
  blinkTimeout.value = setTimeout(blinkStar, speed.value * 4);
};

const resetTypewriter2 = () => {
  if (timeout2.value) {
    clearTimeout(timeout2.value);
  }
  if (blinkTimeout2.value) {
    clearTimeout(blinkTimeout2.value);
  }
  pos2.value = 0;
  isBlinking2.value = false;
};

const blinkHand = () => {
  const destination = typedtext2.value;
  if (isBlinking2.value) {
    destination.innerHTML = text2.value;
  } else {
    destination.innerHTML = "☞" + text2.value;
  }
  isBlinking2.value = !isBlinking2.value;
  blinkTimeout2.value = setTimeout(blinkHand, speed.value * 4);
};

const typewriter2 = () => {
  const destination = typedtext2.value;

  pos2.value++;
  if (pos2.value < text2.value.length + 1) {
    destination.innerHTML = "☞" + text2.value.substring(0, pos2.value);
  } else {
    blinkHand();
    return;
  }
  timeout2.value = setTimeout(typewriter2, speed.value);
};

onMounted(() => {
  if (aboutContent.value) {
    aboutContent.value.sections.forEach((section, index) => {
      if (section.type === 'images') {
        currentIndexes.value[index] = 0
      }
    })
  }
  length.value = text.value[0].length;
  const meContainer = document.querySelector('.me-container');
  meContainer.addEventListener('mouseover', () => {
    resetTypewriter();
    typewriter();
  });
  meContainer.addEventListener('mouseleave', resetTypewriter);

  const title = document.querySelector('.title');
  title.addEventListener('mouseover', () => {
    resetTypewriter2();
    typewriter2();
  });
  title.addEventListener('mouseleave', resetTypewriter2);
});
</script>

<style scoped>
#contact {
  position: relative;
  transform: translate(0, 6rem);
}

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

.overtext,
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
  background: linear-gradient(to left, white 50%, var(--aqua));
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

.me-container:hover .overtext {
  opacity: 1;
}

@media (max-width: 1200px) {

  .me-container {
    width: 85vw;
    overflow: hidden;
  }

  .me,
  .me-glitch,
  .me-dark {
    width: 40vw;
  }

  .overtext,
  .thatsme {
    width: 100%;
    font-size: 3vw;
  }

  .overtext {
    margin-left: 40vw;
    padding-top: 0;
  }
}

@media (max-width: 600px) {

  .me,
  .me-glitch,
  .me-dark {
    width: 75vw;
  }

  .overtext,
  .thatsme {
    font-size: 5vw;
  }

  .overtext {
    margin-left: 0;
  }

}
</style>