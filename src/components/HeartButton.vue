<template>
    <div class="heart-counter" :style="{ '--heat-color': heatColor }">
        <!-- the +1s sit next to the button, not in it, so they don't scale with the heart -->
        <div class="heart-slot">
            <button type="button" class="heart-tap hoverable" :class="{ cracked, healed, grown }" :aria-label="label"
                :aria-disabled="cracked" @click="onTap">
                <AppIcon :icon="cracked ? 'heart-crack' : 'heart'" />
            </button>
            <span v-for="pop in pops" :key="pop.id" class="pop" :style="{ '--dx': pop.dx }" aria-hidden="true">+1</span>
        </div>
        <!-- fades in when the count arrives after the page (not when it's already known from the last visit) -->
        <span class="heart-count" aria-live="polite">
            <Transition name="count-in"><span v-if="total != null">{{ total }}</span></Transition>
        </span>
    </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'
import { useHeart, CRACK_AT } from '@/composables/useHearts.js'
import { useAchievements } from '@/composables/useAchievements.js'

const props = defineProps({
    projectId: {
        type: String,
        required: true
    }
})

const currentLanguage = inject('currentLanguage')
const { total, pending, cracked, tap } = useHeart(() => props.projectId)
const { unlockAchievement } = useAchievements()

const label = computed(() => {
    if (cracked.value) {
        return currentLanguage.value === 'en' ? 'too much love' : 'zu viel liebe'
    }

    return currentLanguage.value === 'en' ? 'love' : 'liebe'
})

// the heart heats up with the taps that are still waiting to be sent (only fast tapping builds them up):
// aqua at rest, white at 45 unsent taps, fully pink from 90, purple when cracked; it cools down as the taps are delivered
const WHITE_AT = 0.45 * CRACK_AT
const PINK_AT = 0.9 * CRACK_AT

const heatColor = computed(() => {
    if (cracked.value) {
        return 'var(--purple)'
    }

    if (pending.value <= WHITE_AT) {
        return `color-mix(in srgb, var(--white) ${Math.round(pending.value / WHITE_AT * 100)}%, var(--aqua))`
    }

    const toPink = Math.min((pending.value - WHITE_AT) / (PINK_AT - WHITE_AT), 1)
    return `color-mix(in srgb, var(--pink) ${Math.round(toPink * 100)}%, var(--white))`
})

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const pops = ref([])
let popId = 0

// every tap grows the heart; while taps keep coming it stays big, and it shrinks back after a short pause
const GROWN_FOR = 100 // ms
const grown = ref(false)
let shrinkTimer = null

const onTap = () => {
    if (!tap()) {
        return
    }

    // this tap was the one that cracked the heart
    if (cracked.value) {
        unlockAchievement('heartbreaker')
    }

    if (reducedMotion) {
        return
    }

    grown.value = true
    clearTimeout(shrinkTimer)
    shrinkTimer = setTimeout(() => {
        grown.value = false
    }, GROWN_FOR)

    const pop = { id: popId++, dx: `${Math.round(Math.random() * 40 - 20)}px` }
    pops.value.push(pop)
    setTimeout(() => {
        pops.value = pops.value.filter((p) => p !== pop)
    }, 800)
}

// a short pop when a cracked heart has sent all its taps and works again
const healed = ref(false)
watch(cracked, (now, before) => {
    if (before && !now) {
        healed.value = true
        setTimeout(() => {
            healed.value = false
        }, 600)
    }
})
</script>

<style scoped>
.heart-counter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.heart-slot {
    position: relative;
    display: grid;
}

.heart-tap {
    padding: 0;
    font-size: 1.5rem;
    color: var(--heat-color);
    background: none;
    transition: color 0.3s ease, transform 0.1s ease;
    touch-action: manipulation;
}

.heart-tap.grown {
    transform: scale(1.2);
}

.heart-tap.cracked {
    cursor: default;
    animation: shiver 0.4s ease-in-out;
}

.heart-tap.healed {
    animation: heal 0.6s ease-out;
}

.pop {
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--heat-color);
    pointer-events: none;
    white-space: nowrap;
    animation: rise 0.8s ease-out forwards;
}

.heart-count {
    font-family: "Funnel Display Variable", sans-serif;
    font-size: 1.5rem;
    color: var(--heat-color);
    font-variant-numeric: tabular-nums;
    transition: color 0.3s ease;
}

.count-in-enter-active {
    transition: opacity 0.3s ease;
}

.count-in-enter-from {
    opacity: 0;
}

@keyframes rise {
    to {
        transform: translate(calc(-50% + var(--dx)), -2.5rem);
        opacity: 0;
    }
}

@keyframes shiver {
    25% {
        transform: translateX(-3px) rotate(-4deg);
    }

    75% {
        transform: translateX(3px) rotate(4deg);
    }
}

@keyframes heal {
    50% {
        transform: scale(1.35);
    }
}

@media (prefers-reduced-motion: reduce) {

    .heart-tap.cracked,
    .heart-tap.healed {
        animation: none;
    }
}
</style>
