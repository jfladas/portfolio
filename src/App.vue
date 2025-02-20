<template>
  <header class="hoverable">
    <router-link to="/about">
      <div class="logo" :class="{ reverse: $route.path !== '/about' }">jfladas</div>
    </router-link>
    <nav>
      <router-link to="/about" class="nav-item left" :class="{ selected: $route.path === '/about' }">
        about
      </router-link>
      <router-link to="/projects" class="nav-item right" :class="{ selected: $route.path.startsWith('/projects') }">
        projects
      </router-link>
    </nav>
  </header>
  <div class="more hoverable" :class="{ open: moreVisible }">
    <font-awesome-icon icon="caret-left" class="more-icon tooltip" tooltip="more" @click="moreVisible = !moreVisible" />
    <div class="more-items">
      <!--
      //TODO: language change
      <div class="more-item tooltip" tooltip="en/de" @click="toggleLanguage">
        <font-awesome-icon icon="language" fixed-width />
      </div>
      -->
      <div v-if="!isMobile" class="more-item tooltip" tooltip="cursor" @click="toggleCursor">
        <font-awesome-icon icon="arrow-pointer" fixed-width />
      </div>
      <!--
      //TODO: achievements
      <div class="more-item tooltip" tooltip="earned">
        <router-link to="/achievements" @click="moreVisible = !moreVisible">
          <font-awesome-icon icon="trophy" fixed-width />
        </router-link>
      </div>
      -->
    </div>
  </div>
  <router-view />
  <div id="toast"></div>
  <div class="fade-out"></div>
  <footer>
    <p>
      made with
      <font-awesome-icon icon="heart" class="heart hoverable tooltip" tooltip="love" />
      by jfladas
    </p>
    <p>
      <a href="https://github.com/jfladas/" target="_blank" class="social hoverable tooltip" tooltip="github">
        <font-awesome-icon icon="fa-brands fa-github-alt" />
      </a>
      <a href="https://jfladas.itch.io/" target="_blank" class="social hoverable tooltip" tooltip="itch.io">
        <font-awesome-icon icon="fa-brands fa-itch-io" />
      </a>
      <a href="https://www.linkedin.com/in/lukas-bucher-0926bb282/" target="_blank" class="social hoverable tooltip"
        tooltip="linkedin">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/jfla.das/" target="_blank" class="social hoverable tooltip" tooltip="insta">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a href="mailto:lukas.bucherr@gmail.com" class="social hoverable tooltip" tooltip="email">
        <font-awesome-icon icon="fa-solid fa-envelope" />
      </a>
    </p>
    <p>
      <router-link to="/about" class="bold hoverable">
        about
      </router-link>
      <font-awesome-icon icon="minus" rotation="90" />
      <router-link to="/projects" class="bold hoverable">
        projects
      </router-link>
    </p>
    <br>
    <p class="copyright">&copy; 2025 jfladas</p>
  </footer>
  <div ref="cursor" class="custom-cursor">
    <span ref="tooltip" class="tooltip-container"></span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const isMobile = ref(false)

const checkIsMobile = () => {
  const userAgent = navigator.userAgent || window.opera
  isMobile.value = /android|iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream
}

const moreVisible = ref(false)
const isCursorVisible = ref(true)
const currentLanguage = ref('en')

watch(() => route.path, (to, from) => {
  removeCursorHover();
  removeTooltip();
})

const cursor = ref(null)
const tooltip = ref(null)

const updateCursor = (e) => {
  if (cursor.value) {
    cursor.value.style.display = 'block'
    cursor.value.style.left = `${e.clientX}px`
    cursor.value.style.top = `${e.clientY}px`
  }
}

const addCursorHover = () => {
  if (cursor.value) {
    cursor.value.classList.add('hover')
  }
}

const removeCursorHover = () => {
  if (cursor.value) {
    cursor.value.classList.remove('hover')
  }
}

let tooltipTimeout = null;

const addTooltip = (text) => {
  if (tooltip.value) {
    tooltip.value.textContent = text
    tooltip.value.style.opacity = 1
  }
}

const removeTooltip = () => {
  clearTimeout(tooltipTimeout);
  if (tooltip.value) {
    tooltip.value.style.opacity = 0
  }
}

const addHoverListeners = (elements) => {
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      addCursorHover();
    })
    el.addEventListener('mouseleave', () => {
      removeCursorHover();
    })
  })
}

const addTooltipListeners = (elements) => {
  elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      removeTooltip();
      tooltipTimeout = setTimeout(() => {
        addTooltip(el.getAttribute('tooltip'));
      }, isMobile.value ? 0 : 500);
    })
    el.addEventListener('mouseleave', () => {
      removeTooltip();
    })
  })
}

const addCopyListeners = (elements) => {
  elements.forEach(el => {
    el.addEventListener('click', () => {
      toClipboard(el.textContent);
    });
  });
}

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'de' : 'en';
  // TODO: language change
  showToast(currentLanguage.value === 'en' ? 'Language set to English' : 'Sprache auf Deutsch gesetzt');
  moreVisible.value = false;
}

const toggleCursor = () => {
  removeTooltip();
  isCursorVisible.value = !isCursorVisible.value;
  const existingLink = document.getElementById('cursor-style');
  if (existingLink) {
    existingLink.remove();
  }
  const link = document.createElement('link');
  link.id = 'cursor-style';
  link.rel = 'stylesheet';
  link.href = new URL(`/src/assets/${isCursorVisible.value ? 'custom-cursor.css' : 'default-cursor.css'}`, import.meta.url).href;
  document.head.appendChild(link);

  showToast(isCursorVisible.value ? 'Custom cursor enabled' : 'Default cursor enabled');
  moreVisible.value = false;
}

const showToast = (message) => {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  setTimeout(() => {
    toast.classList.add('visible');
  }, 100);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => {

    }, 500);
  }, 3000);
};

const toClipboard = (text) => {
  navigator.clipboard.writeText(text);
  showToast('copied to clipboard');
}

const handleTouchMove = (e) => {
  if (cursor.value) {
    cursor.value.style.display = 'none';
  }
}

let cursorTimeout = null;

const handleTouchStart = (e) => {
  clearTimeout(cursorTimeout);
  removeTooltip();
  if (cursor.value) {
    cursor.value.style.animation = '';
    cursor.value.style.opacity = 1;
  }
}

const handleTouchEnd = (e) => {
  if (cursor.value) {
    cursorTimeout = setTimeout(() => {
      removeTooltip();
      cursor.value.style.animation = 'fadeout 0.5s forwards';
    }, 1000);
  }
}

onMounted(() => {

  checkIsMobile()

  window.addEventListener('mousemove', updateCursor);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchstart', handleTouchStart, { passive: false });
  window.addEventListener('touchend', handleTouchEnd, { passive: false });

  const hoverElements = document.querySelectorAll('.hoverable')
  addHoverListeners(hoverElements)

  const tooltipElements = document.querySelectorAll('.tooltip')
  addTooltipListeners(tooltipElements)

  const copyElements = document.querySelectorAll('.copy')
  addCopyListeners(copyElements)

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.classList.contains('hoverable')) {
              addHoverListeners([node])
            } else {
              const nestedElements = node.querySelectorAll('.hoverable')
              addHoverListeners(nestedElements)
            }
            if (node.classList.contains('tooltip')) {
              addTooltipListeners([node])
            } else {
              const nestedElements = node.querySelectorAll('.tooltip')
              addTooltipListeners(nestedElements)
            }
            if (node.classList.contains('copy')) {
              addCopyListeners([node])
            } else {
              const nestedElements = node.querySelectorAll('.copy')
              addCopyListeners(nestedElements)
            }
          }
        })
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })

  const link = document.createElement('link');
  link.id = 'cursor-style';
  link.rel = 'stylesheet';
  link.href = new URL('/src/assets/custom-cursor.css', import.meta.url).href;
  document.head.appendChild(link);

  onUnmounted(() => {
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('mousemove', updateCursor)
    hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', addCursorHover)
      el.removeEventListener('mouseleave', removeCursorHover)
    })
    tooltipElements.forEach(el => {
      el.removeEventListener('mouseenter', () => { })
      el.removeEventListener('mouseleave', () => { })
    })
    copyElements.forEach(el => {
      el.removeEventListener('click', () => { })
    })
    observer.disconnect()
  })
})
</script>

<style scoped>
header {
  background-color: rgba(var(--navy-rgb), 0.5);
  backdrop-filter: blur(1rem);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  width: 50vw;
  font-family: 'Funnel Sans', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--sky);
  text-align: center;
  padding: 1.5rem 0;
}

.nav-item.left {
  margin-right: 6rem;
}

.nav-item.right {
  margin-left: 6rem;
}

.nav-item:hover {
  color: var(--aqua);
}

.nav-item.left:hover {
  background: linear-gradient(to right, var(--deep) 0%, rgba(var(--navy-rgb), 0) 50%);
}

.nav-item.right:hover {
  background: linear-gradient(to left, var(--deep) 0%, rgba(var(--navy-rgb), 0) 50%);
}

.nav-item.selected {
  color: white;
}

.nav-item.left.selected {
  background: linear-gradient(to right,
      var(--aqua) 0%,
      var(--mint) 10%,
      var(--sky) 20%,
      var(--deep) 35%,
      rgba(var(--navy-rgb), 0));
}

.nav-item.right.selected {
  background: linear-gradient(to left,
      var(--aqua) 0%,
      var(--mint) 10%,
      var(--sky) 20%,
      var(--deep) 35%,
      rgba(var(--navy-rgb), 0) 100%);
}

.nav-item:active {
  color: white;
}

.nav-item.left:active {
  background: linear-gradient(to right,
      white,
      var(--aqua) 10%,
      var(--mint) 20%,
      var(--sky) 30%,
      var(--deep) 45%,
      rgba(var(--navy-rgb), 0));
}

.nav-item.right:active {
  background: linear-gradient(to left,
      white,
      var(--aqua) 10%,
      var(--mint) 20%,
      var(--sky) 30%,
      var(--deep) 45%,
      rgba(var(--navy-rgb), 0) 100%);
}

.logo {
  font-family: 'Funnel Display', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  background: linear-gradient(to right, var(--aqua), var(--mint), var(--sky), var(--deep));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo.reverse {
  background: linear-gradient(to left, var(--aqua), var(--mint), var(--sky), var(--deep));
  background-clip: text;
  -webkit-background-clip: text;
}

.more {
  position: fixed;
  bottom: 2rem;
  right: 0;
  width: fit-content;
  transform: translate(calc(100% - 4rem), 0);
  height: 2.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  font-size: 2rem;
  background-color: rgba(var(--deep-rgb), 0.2);
  backdrop-filter: blur(1rem);
  color: var(--sky);
  z-index: 10;
  transition: all 0.5s;
}

.more:hover {
  background-color: rgba(var(--deep-rgb), 0.5);
}

.more:active {
  background-color: rgba(var(--deep-rgb), 0.7);
}

.more-icon {
  padding: 0.5rem 1rem;
  transform: rotate(0);
  cursor: pointer;
  transition: transform 0.5s;
}

.more.open {
  transform: translate(2rem, 0);
}

.more.open .more-icon {
  transform: rotate(-180deg);
}

.more:has(.more-icon:nth-of-type(1):hover) {
  transform: translate(calc(100% - 5rem), 0);
}

.more.open:has(.more-icon:nth-of-type(1):hover) {
  transform: translate(3rem, 0);
}

.more-items {
  display: flex;
  gap: 1.5rem;
}

.more-item {
  font-size: 1.5rem;
  color: var(--sky);
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s;
}

.more-icon:hover,
.more-item:hover {
  color: var(--aqua);
}

.more-icon:active,
.more-item:active {
  color: var(--mint);
}

.more.open .more-item {
  opacity: 1;
}

#toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1rem 2rem;
  background: rgba(var(--deep-rgb), 0.2);
  backdrop-filter: blur(1rem);
  color: white;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
}

#toast.visible {
  opacity: 1;
}

.fade-out {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  pointer-events: none;
  backdrop-filter: blur(1rem);
  mask: linear-gradient(to bottom, transparent, white);
  z-index: 10;
}

footer {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--mint);
  background: linear-gradient(to bottom, var(--deep), transparent 75%);
  margin-top: 6rem;
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.heart {
  color: var(--pink);
  transition: color 0.5s ease;
}

.heart:hover {
  color: white;
}

.social {
  font-size: 1.2rem;
  color: var(--mint);
  margin: 1rem 0.5rem;
  transition: color 0.5s ease;
}

.social:hover {
  color: var(--pink);
}

.copyright {
  font-weight: 700;
  color: var(--deep);
}

@media (max-width: 600px) {
  .nav-item {
    font-size: 1rem;
    padding: 1.2rem 0;
  }

  .nav-item.left {
    margin-right: 2rem;
  }

  .nav-item.right {
    margin-left: 2rem;
  }

  .logo {
    font-size: 2rem;
  }
}
</style>