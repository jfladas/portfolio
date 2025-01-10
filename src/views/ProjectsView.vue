<template>
  <div class="content">
    <h1>projects</h1>
    <div class="filter-container hoverable" :class="{ expanded: filterMode }">
      <p class="filter toggle" @click="toggleFilter('all')" :class="{ selected: allSelected && !filterMode }">all</p>
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

const selectedFilters = ref(['solo', 'team'])
const filterMode = ref(false)

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

  const nonPersonFilters = selectedFilters.value.filter(filter => filter !== 'solo' && filter !== 'team')
  const personFilters = selectedFilters.value.filter(filter => filter === 'solo' || filter === 'team')

  if (nonPersonFilters.length === 0) {
    nonPersonFilters.push(...Object.keys(categories).filter(filter => filter !== 'solo' && filter !== 'team'))
  }

  return projects.filter(project => {
    const hasSelectedCategory = project.categories.some(category => nonPersonFilters.includes(category))
    const hasOtherFilter = nonPersonFilters.some(filter => project.categories.includes(filter))
    const isExcluded =
      (!personFilters.includes('solo') && !project.categories.includes('team')) ||
      (!personFilters.includes('team') && !project.categories.includes('solo'))
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
  width: 0;
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

@media (max-width: 1200px) {
  .content {
    padding-top: 0;
  }

  .filters.expanded {
    flex-wrap: wrap;
    min-width: 12rem;
  }
}
</style>