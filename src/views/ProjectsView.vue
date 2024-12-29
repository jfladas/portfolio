<template>
  <div class="content">
    <h1>projects</h1>
    <div class="filter-container hoverable" :class="{ expanded: filterMode }">
      <p class="filter" @click="toggleFilter('all')" :class="{ selected: allSelected }">all</p>
      <font-awesome-icon icon="filter" class="filter-toggle filter" :class="{ selected: filterMode }"
        @click="toggleFilter('filter')" />
      <div class="filters" :class="{ expanded: filterMode }">
        <font-awesome-icon v-for="(icon, key) in categories" :icon="icon" :key="key" class="filter tooltip"
          :tooltip="key" :class="{ selected: selectedFilters.includes(key) }" @click="toggleFilter(key)" />
      </div>
    </div>
    <div v-for="project in filteredProjects" :key="project.id" class="project hoverable">
      <ProjectItem :project="project" />
    </div>
    <div v-if="filteredProjects.length > 0 && filteredProjects.length < projects.length" class="disclaimer">
      <p>
        <font-awesome-icon icon="filter" />
        showing {{ filteredProjects.length }} of {{ projects.length }} projects |
        <span class="a hoverable" @click="toggleFilter('all')">see all</span>
      </p>
    </div>
    <div v-if="filteredProjects.length === 0" class="disclaimer">
      <h3>
        no matching projects found
        <font-awesome-icon icon="face-frown-open" />
      </h3>
      <p>try adjusting the filters</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ProjectItem from '@/components/ProjectItem.vue'
import { projects, categories } from '@/data/projects.js'

const selectedFilters = ref(Object.keys(categories))
const filterMode = ref(false)

const allSelected = computed(() => selectedFilters.value.length === Object.keys(categories).length || !filterMode.value)

const toggleFilter = (filter) => {
  if (filter === 'all' || filter === 'filter') {
    toggleFilterMode()
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
}

const toggleFilterMode = () => {
  filterMode.value = !filterMode.value
}

watch(selectedFilters, (newFilters) => {
  if (!newFilters.includes('solo') && !newFilters.includes('team')) {
    selectedFilters.value.push('solo')
  }
})

const filteredProjects = computed(() => {
  if (
    selectedFilters.value.length === 0 ||
    allSelected.value
  ) {
    return projects
  }
  return projects.filter(project => {
    const hasSelectedCategory = project.categories.some(category => selectedFilters.value.includes(category))
    const hasOtherFilter = selectedFilters.value.some(filter => filter !== 'solo' && filter !== 'team' && project.categories.includes(filter))
    const isExcluded =
      (!selectedFilters.value.includes('solo') && !project.categories.includes('team')) ||
      (!selectedFilters.value.includes('team') && !project.categories.includes('solo'))
    return hasSelectedCategory && hasOtherFilter && !isExcluded
  })
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
  min-width: calc(4rem * 13);
  width: calc(4rem * 13);
  opacity: 1;
}

.filter {
  font-family: "Funnel Display", sans-serif;
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
}

.filter.selected {
  color: var(--aqua);
  background: linear-gradient(to top, var(--deep), rgba(var(--navy-rgb), 0));
}

.filter:hover {
  color: var(--sky);
}

.filter:active {
  color: var(--mint);
}

.disclaimer {
  color: var(--sky);
}

.a {
  color: var(--aqua);
  text-decoration: underline;
}

.a:hover {
  color: var(--mint);
}

.a:active {
  color: white;
}
</style>