<template>
    <!-- class, tooltip, role, @click etc. fall through to the <svg> -->
    <component :is="component" v-if="component" class="app-icon" :class="{ 'app-icon-fw': fixedWidth }"
        :aria-hidden="$attrs['aria-label'] ? undefined : 'true'" />
</template>

<script setup>
import { computed } from 'vue'
import { icons } from '@/icons.js'

// names come from src/icons.js; an unknown name renders nothing and warns in the console
const props = defineProps({
    icon: { type: String, required: true },
    fixedWidth: { type: Boolean, default: false }
})

const component = computed(() => {
    const found = icons[props.icon]
    if (!found) {
        console.warn(`AppIcon: no icon named "${props.icon}" in src/icons.js`)
    }
    return found
})
</script>
