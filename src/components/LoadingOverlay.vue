<template>
    <div class="loading-overlay">
        <button class="loading-spinner" :aria-label="label" disabled>
            <AppIcon icon="spinner" />
        </button>
    </div>
</template>

<script setup>
defineProps({ label: { type: String, default: 'Loading' } })
</script>

<style scoped>
.loading-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    pointer-events: none;
    background: linear-gradient(to top, rgba(var(--deep-rgb), 0.2), rgba(var(--deep-rgb), 0));
}

.loading-spinner {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--white);
    background-color: rgba(var(--navy-rgb), 0.5);
    backdrop-filter: blur(0.5rem) saturate(2);
    cursor: default;
}
</style>
