<template>
  <div>
    <h1>Projects</h1>
    <div v-for="project in projects" :key="project.id">
      <ProjectItem :project="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectItem from '@/components/ProjectItem.vue'
import { projects } from '@/data/projects.js'
</script>
