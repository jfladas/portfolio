<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/about">About</RouterLink>
      <h1>jfladas</h1>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
