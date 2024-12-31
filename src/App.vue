<template>
  <header class="hoverable">
    <div class="logo" :class="{ reverse: $route.path !== '/about' }">jfladas</div>
    <nav>
      <router-link to="/about" class="nav-item left" :class="{ selected: $route.path === '/about' }">
        about
      </router-link>
      <router-link to="/projects" class="nav-item right" :class="{ selected: $route.path.startsWith('/projects') }">
        projects
      </router-link>
    </nav>
  </header>
  <router-view />
  <div class="fade-out"></div>
  <footer>
    <p>made with <font-awesome-icon icon="heart" class="heart hoverable tooltip" tooltip="love" /> by jfladas</p>
  </footer>
  <div ref="cursor" class="custom-cursor">
    <span class="tooltip-container"></span>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

watch(() => route.path, (to, from) => {
  removeCursorHover();
  removeTooltip();
})

const cursor = ref(null)

const updateCursor = (e) => {
  if (cursor.value) {
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
  tooltipTimeout = setTimeout(() => {
    const tooltip = cursor.value.querySelector('.tooltip-container')
    if (tooltip) {
      tooltip.textContent = text
      tooltip.style.opacity = 1
    }
  }, 500);
}

const removeTooltip = () => {
  clearTimeout(tooltipTimeout);
  const tooltip = cursor.value.querySelector('.tooltip-container')
  if (tooltip) {
    tooltip.style.opacity = 0
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
      addTooltip(el.getAttribute('tooltip'));
    })
    el.addEventListener('mouseleave', () => {
      removeTooltip();
    })
  })
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  const hoverElements = document.querySelectorAll('.hoverable')
  addHoverListeners(hoverElements)

  const tooltipElements = document.querySelectorAll('.tooltip')
  addTooltipListeners(tooltipElements)

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
          }
        })
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursor)
    hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', addCursorHover)
      el.removeEventListener('mouseleave', removeCursorHover)
    })
    tooltipElements.forEach(el => {
      el.removeEventListener('mouseenter', () => { })
      el.removeEventListener('mouseleave', () => { })
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
  font-family: 'Funnel Display', sans-serif;
  font-size: 1.2rem;
  color: var(--sky);
  text-align: center;
  padding: 1.5rem;
}

.nav-item.left {
  padding-right: 6rem;
}

.nav-item.right {
  padding-left: 6rem;
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
  background: linear-gradient(to bottom, var(--deep), rgba(var(--navy-rgb), 0));
  margin-top: 6rem;
  padding-top: 1rem;
  padding-bottom: 6rem;
}

.heart {
  color: var(--pink);
  transition: color 0.5s ease;
}

.heart:hover {
  color: white;
}

.custom-cursor {
  position: fixed;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  box-shadow: 0 0 1rem 0.5rem rgba(var(--deep-rgb), 0.1);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 100;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-cursor::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(var(--aqua-rgb), 0.1);
  backdrop-filter: blur(0.2rem);
  mask: radial-gradient(circle, white, white);
  border-radius: 50%;
  transition: background-color 0.2s ease, mask 0.2s ease;
}

.custom-cursor.hover::before {
  background-color: rgba(var(--deep-rgb), 0.2);
  mask: radial-gradient(circle, transparent 20%, white);
}

.custom-cursor.hover {
  transform: translate(-50%, -50%) scale(1.5);
  box-shadow: 0 0 1rem 0.5rem rgba(var(--navy-rgb), 0.5);
}

.tooltip-container {
  position: absolute;
  inset: 0;
  z-index: -1;
  padding-top: 1.7rem;
  text-align: center;
  font-size: 0.65rem;
  color: white;
  text-shadow: 0 0 0.5rem var(--navy);
  opacity: 1;
  transition: opacity 0.2s ease;
}

.tooltip-container::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  border-radius: 50%;
  background: radial-gradient(circle at center bottom,
      rgba(var(--navy-rgb), 0.5),
      rgba(var(--navy-rgb), 0) 75%),
    radial-gradient(circle at center top,
      rgba(var(--navy-rgb), 0) 75%,
      rgba(255, 255, 255, 0.8));
}
</style>