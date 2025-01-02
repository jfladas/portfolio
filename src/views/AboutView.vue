<template>
  <div class="content">
    <div class="content-left">
      <h1 class="title hoverable">
        <p class="jap thatsme" ref="typedtext2">
        </p>
        Lukas Bucher
      </h1>
      <h2 class="subtitle"></h2>
      <h3>
        Hi there!
      </h3>
      <div class="quoted-container">
        <p class="text quoted">
          <font-awesome-icon icon="quote-left" class="quote-left" />
          <span class="bottom-corner">
            <font-awesome-icon icon="quote-right" class="quote-right" />
          </span>
          I'm currently studying
          <a href="https://www.hslu.ch/en/lucerne-school-of-information-technology/degree-programs/bachelor/digital-ideation/"
            class="bold hoverable" target="_blank">Digital Ideation</a>
          at the Lucerne University of Applied Sciences and Arts, an interdisciplinary program combining design and
          computer science to create digital solutions.
          I love exploring all of the possibilities of how technology and creativity can be combined.
          My focus mainly lies in web development, but other aspects I can explore with my studies also intrigue me,
          ranging from game design & development to digital art.
          After I've attained my bachelor of science, I aim to work in the field of
          frontend web development, creating unique and interactive user experiences.
          But who knows what the future may hold?
        </p>
      </div>
      <h3>
        Explore my work! Get in touch!
      </h3>
      <div class="buttons">
        <div class="button-container">
          <router-link to="/projects">
            <button class="button-primary hoverable">
              My Projects
              <font-awesome-icon icon="rocket" />
            </button>
          </router-link>
        </div>
        <a class="button-container" href="mailto:lukas.bucherr@gmail.com">
          <button class="button-secondary hoverable">
            E-Mail
            <font-awesome-icon icon="paper-plane" />
          </button>
        </a>
      </div>
      <h3>
        More about me...
      </h3>
      <p class="text">
        Beyond my passion for technology and design, music plays a big role in my life. I play the saxophone in the
        local orchestra
        '<a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>',
        which has been an amazing way to connect with others and immerse myself in the joy of
        creating music. My love for music doesn't stop there. I'm also a fan of K-pop and enjoy attending concerts
        whenever I can.
      </p>
      <p class="text">
        Learning Japanese has been another fulfilling journey, deepening my interest in East Asian culture. Through
        self-study, school courses, and visiting different parts of Japan, I have developed quite an appreciation of its
        many facets and it has become my favorite travel destination.
      </p>
    </div>
    <div class="content-right">
      <div class="me-container hoverable">
        <p class="jap overlay" ref="typedtext"></p>
        <img src="/src/assets/me.png" alt="me" class="me" />
        <img src="/src/assets/me_glitch.png" alt="me" class="me-glitch" />
        <img src="/src/assets/me_dark.png" alt="me" class="me-dark" />
      </div>
      <h3>Links & Downloads</h3>
      <a href="https://github.com/jfladas/" class="link hoverable" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github-alt" />
        GitHub
      </a>
      <a href="https://jfladas.itch.io/" class="link hoverable" target="_blank">
        <font-awesome-icon icon="fa-brands fa-itch-io" />
        Itch.io
      </a>
      <a href="https://www.linkedin.com/in/lukas-bucher-0926bb282/" class="link hoverable" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        LinkedIn
      </a>
      <a href="https://www.instagram.com/jfla.das/" class="link hoverable" target="_blank">
        <font-awesome-icon icon="fa-brands fa-instagram" />
        Instagram
      </a>
      <a href="https://youtube.com/@jfladas/" class="link hoverable" target="_blank">
        <font-awesome-icon icon="fa-brands fa-youtube" />
        YouTube
      </a>
      <a :href="aboutFiles['../assets/about/Resume.pdf'].default" class="download hoverable" target="_blank">
        <font-awesome-icon icon="circle-arrow-down" />
        Resume
      </a>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      speed: 100,

      text: [
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
      ],
      index: 0,
      length: 0,
      pos: 0,
      content: '',
      row: 0,
      timeout: null,
      blinkTimeout: null,
      isBlinking: false,

      text2: "それが私の名前です！",
      pos2: 0,
      timeout2: null,
      blinkTimeout2: null,
      isBlinking2: false
    };
  },
  setup() {
    const aboutFiles = ref(import.meta.glob('../assets/about/*', { eager: true }));
    return { aboutFiles };
  },
  mounted() {
    this.length = this.text[0].length;
    const meContainer = this.$el.querySelector('.me-container');
    meContainer.addEventListener('mouseover', () => {
      this.resetTypewriter();
      this.typewriter()
    });
    meContainer.addEventListener('mouseleave', this.resetTypewriter);

    const title = this.$el.querySelector('.title');
    title.addEventListener('mouseover', () => {
      this.resetTypewriter2();
      this.typewriter2();
    });
    title.addEventListener('mouseleave', this.resetTypewriter2);
  },
  methods: {
    resetTypewriter() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      if (this.blinkTimeout) {
        clearTimeout(this.blinkTimeout);
      }
      this.content = '';
      this.index = 0;
      this.pos = 0;
      this.length = this.text[0].length;
      this.isBlinking = false;
    },
    typewriter() {
      this.content = '';
      this.row = 0;
      const destination = this.$refs.typedtext;

      while (this.row < this.index) {
        this.content += this.text[this.row++] + '<br />';
      }
      if (this.index < this.text.length - 1) {
        destination.innerHTML = this.content + this.text[this.index].substring(0, this.pos) + "★";
      }
      if (this.pos++ === this.length) {
        this.pos = 0;
        this.index++;
        if (this.index !== this.text.length - 1) {
          if (this.text[this.index]) {
            this.length = this.text[this.index].length;
          }
          this.timeout = setTimeout(this.typewriter, this.speed * 4);
        } else {
          this.blinkStar();
        }
      } else {
        this.timeout = setTimeout(this.typewriter, this.speed);
      }
    },
    blinkStar() {
      const destination = this.$refs.typedtext;
      if (this.isBlinking) {
        destination.innerHTML = this.content + "★";
      } else {
        destination.innerHTML = this.content;
      }
      this.isBlinking = !this.isBlinking;
      this.blinkTimeout = setTimeout(this.blinkStar, this.speed * 4);
    },
    resetTypewriter2() {
      if (this.timeout2) {
        clearTimeout(this.timeout2);
      }
      if (this.blinkTimeout2) {
        clearTimeout(this.blinkTimeout2);
      }
      this.pos2 = 0;
      this.isBlinking2 = false;
    },
    typewriter2() {
      const destination = this.$refs.typedtext2;

      this.pos2++;
      if (this.pos2 < this.text2.length + 1) {
        destination.innerHTML = "☞" + this.text2.substring(0, this.pos2);
      } else {
        this.blinkHand();
        return;
      }
      this.timeout2 = setTimeout(this.typewriter2, this.speed);
    },
    blinkHand() {
      const destination = this.$refs.typedtext2;
      if (this.isBlinking2) {
        destination.innerHTML = this.text2;
      } else {
        destination.innerHTML = "☞" + this.text2;
      }
      this.isBlinking2 = !this.isBlinking2;
      this.blinkTimeout2 = setTimeout(this.blinkHand, this.speed * 4);
    },
  }
};
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

p {
  margin-bottom: 0.5rem;
}

p,
.buttons {
  margin-left: 2rem;
}

@media (max-width: 1200px) {

  p,
  .buttons {
    margin-left: 0;
  }

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