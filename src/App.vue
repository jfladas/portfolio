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
    <p>made with <font-awesome-icon icon="heart" class="heart hoverable" /> by jfladas</p>
  </footer>
  <div ref="cursor" class="custom-cursor"></div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

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

const addHoverListeners = (elements) => {
  elements.forEach(el => {
    el.addEventListener('mouseenter', addCursorHover)
    el.addEventListener('mouseleave', removeCursorHover)
  })
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  const initialElements = document.querySelectorAll('.hoverable')
  addHoverListeners(initialElements)

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
          }
        })
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateCursor)
    initialElements.forEach(el => {
      el.removeEventListener('mouseenter', addCursorHover)
      el.removeEventListener('mouseleave', removeCursorHover)
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
  background: linear-gradient(to right, var(--aqua) 0%, var(--mint) 10%, var(--sky) 20%, var(--deep) 35%, rgba(var(--navy-rgb), 0) 100%);
}

.nav-item.right.selected {
  background: linear-gradient(to left, var(--aqua) 0%, var(--mint) 10%, var(--sky) 20%, var(--deep) 35%, rgba(var(--navy-rgb), 0) 100%);
}

.nav-item:active {
  color: white;
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
  background: var(--deep);
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
  background-color: rgba(var(--deep-rgb), 0.1);
  mask: radial-gradient(circle, transparent 20%, rgba(255, 255, 255, 0.5) 40%, white);
}

.custom-cursor.hover {
  transform: translate(-50%, -50%) scale(1.5);
  box-shadow: 0 0 1rem 0.5rem rgba(var(--navy-rgb), 0.5);
}
</style>