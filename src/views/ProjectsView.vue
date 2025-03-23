<template>
  <div class="content">
    <h1>
      {{ currentLanguage === 'en' ? 'projects' : 'projekte' }}
    </h1>
    <div class="filter-container hoverable" :class="{ expanded: filterMode }">
      <p class="filter toggle" @click="toggleFilter('all')" :class="{ selected: allSelected && !filterMode }">
        {{ currentLanguage === 'en' ? 'all' : 'alle' }}
      </p>
      <font-awesome-icon icon="filter" class="filter toggle" :class="{ selected: filterMode }"
        @click="toggleFilter('filter')" />
      <div class="filters" :class="{ expanded: filterMode }">
        <font-awesome-icon v-for="(icon, key) in categories" :icon="icon" :key="key" class="filter tooltip"
          :tooltip="key" :class="{ selected: selectedFilters.includes(key) }" @click="toggleFilter(key)" />
      </div>
    </div>
    <ProjectItem v-for="project in filteredProjects" :key="project.id" :project="project" />
    <div v-if="filteredProjects.length > 0 && filteredProjects.length < projects.length" class="disclaimer">
      <p>
        <font-awesome-icon icon="filter" />
        {{ currentLanguage === 'en' ? 'showing' : 'zeige' }} {{ filteredProjects.length }} {{ currentLanguage === 'en' ?
          'of' : 'von' }} {{ projects.length }} {{ currentLanguage === 'en' ? 'projects' : 'Projekte' }} |
        <span class="a hoverable" @click="() => { toggleFilter('all'); scrollToTop() }">{{ currentLanguage === 'en' ?
          'see all' : 'alle anzeigen' }}</span>
      </p>
    </div>
    <div v-if="filteredProjects.length === 0" class="disclaimer">
      <h3>
        {{ currentLanguage === 'en' ? 'no matching projects found' : 'keine passenden Projekte gefunden' }}
        <font-awesome-icon icon="face-frown-open" />
      </h3>
      <p>
        {{ currentLanguage === 'en' ? 'try adjusting the filters or' : 'Versuche die Filter anzupassen oder' }}
        <span class="a hoverable" @click="() => { toggleFilter('all'); scrollToTop() }">
          {{ currentLanguage === 'en' ? 'see all' : 'alle anzeigen' }}
        </span>
      </p>
    </div>
    <router-link v-else to="#" class="to-top hoverable tooltip" :tooltip="currentLanguage === 'en' ? 'to top' : 'rauf'"
      @click.prevent="scrollToTop">
      <font-awesome-icon icon="angle-up" />
    </router-link>
    <div class="bottom-spacer"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, inject } from 'vue'
import ProjectItem from '@/components/ProjectItem.vue'
import { projects as enProjects, categories } from '@/data/projects.js'
import { projekte as deProjects } from '@/data/projekte.js'

const selectedFilters = ref(['solo', 'team'])
const filterMode = ref(false)
const currentLanguage = inject('currentLanguage')

const allSelected = computed(() => selectedFilters.value.length === Object.keys(categories).length || !filterMode.value)

const toggleFilter = (filter) => {
  if (filter === 'all' || filter === 'filter') {
    filterMode.value = !filterMode.value
  } else {
    if (selectedFilters.value.includes(filter)) {
      selectedFilters.value = selectedFilters.value.filter(f => f !== filter)
      if (filter === 'solo' || filter === 'team') {
        const otherFilter = filter === 'solo' ? 'team' : 'solo'
        if (!selectedFilters.value.includes(otherFilter)) {
          selectedFilters.value.push(otherFilter)
        }
      }
    } else {
      selectedFilters.value.push(filter)
    }
  }
  localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters.value))
  localStorage.setItem('filterMode', JSON.stringify(filterMode.value))
}

watch(selectedFilters, (newFilters) => {
  if (!newFilters.includes('solo') && !newFilters.includes('team')) {
    selectedFilters.value.push('solo')
  }
})

const projects = computed(() => currentLanguage.value === 'en' ? enProjects : deProjects)

const filteredProjects = computed(() => {
  if (
    selectedFilters.value.length === 0 ||
    allSelected.value
  ) {
    return projects.value
  }

  const nonPersonFilters = selectedFilters.value.filter(filter => filter !== 'solo' && filter !== 'team')
  const personFilters = selectedFilters.value.filter(filter => filter === 'solo' || filter === 'team')

  if (nonPersonFilters.length === 0) {
    nonPersonFilters.push(...Object.keys(categories).filter(filter => filter !== 'solo' && filter !== 'team'))
  }

  return projects.value.filter(project => {
    const hasSelectedCategory = project.categories.some(category => nonPersonFilters.includes(category))
    const hasOtherFilter = nonPersonFilters.some(filter => project.categories.includes(filter))
    const isExcluded =
      (!personFilters.includes('solo') && !project.categories.includes('team')) ||
      (!personFilters.includes('team') && !project.categories.includes('solo'))
    return hasSelectedCategory && hasOtherFilter && !isExcluded
  })
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  const savedFilters = JSON.parse(localStorage.getItem('selectedFilters'))
  const savedFilterMode = JSON.parse(localStorage.getItem('filterMode'))
  if (savedFilters) {
    selectedFilters.value = savedFilters
  }
  if (savedFilterMode) {
    filterMode.value = savedFilterMode
  }
})


</script>

<style scoped>
.content {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.filters {
  display: flex;
  flex-direction: row;
  min-width: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition: min-width 1s, width 1s, opacity 1s;
}

.filters.expanded {
  min-width: calc(4rem * 10);
  opacity: 1;
}

.filter {
  font-family: "Funnel Display", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--deep);
  margin: 0;
  padding: 0.5rem 1rem;
  height: 1.5rem;
  min-width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
}

.filter.selected {
  color: var(--aqua);
  background: linear-gradient(to top, var(--deep), rgba(var(--navy-rgb), 0));
}

.filter.toggle.selected {
  background: linear-gradient(to top, var(--sky), var(--deep), rgba(var(--navy-rgb), 0));
}

.filter:hover {
  color: var(--sky);
}

.filter:active {
  color: var(--mint);
}

.a {
  color: var(--aqua);
  text-decoration: underline;
  cursor: pointer;
}

.a:hover {
  color: var(--mint);
}

.a:active {
  color: var(--white);
}

.bottom-spacer {
  height: 6rem;
}

.to-top {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -4rem);
  color: var(--deep);
  transition: all 0.5s;
  font-size: 3rem;
}

.to-top:hover {
  transform: translate(-50%, -5rem);
  color: var(--sky);
}

@media (max-width: 1200px) {
  .content {
    padding-top: 0;
  }

  .filter {
    padding: 0.6rem 1rem;
  }

  .filters {
    transition: min-width 1s, width 1s, opacity 1s;
  }

  .filters.expanded {
    min-width: calc(100% - 4rem);
    flex-wrap: wrap;
    transition: opacity 1s;
  }

  .bottom-spacer {
    height: 50vh;
  }

  .to-top {
    transform: translate(-50%, -40vh);
  }

  .to-top:hover {
    transform: translate(-50%, calc(-40vh - 1rem));
  }
}

@media (max-width: 600px) {
  .filter {
    font-size: 1.2rem;
    padding: 0.4rem 0.4rem;
    height: 1.2rem;
  }
}
</style>