<template>
    <a v-if="visible" class="duolingo hoverable" :href="`https://www.duolingo.com/profile/${username}`" target="_blank"
        rel="noopener noreferrer">
        <font-awesome-icon icon="fire-flame-curved" class="duolingo-flame" :class="{ lit: practicedToday }" />
        <div class="duolingo-info">
            <p class="duolingo-state">{{ stateLabel }}</p>
            <p class="duolingo-streak">{{ streakLabel }}</p>
            <p class="duolingo-source">{{ currentLanguage === 'en' ? 'on Duolingo' : 'auf Duolingo' }}</p>
        </div>
    </a>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue'

// written every hour by .github/workflows/duolingo.yml; `npm run dev` reads a local copy instead (`npm run duolingo`)
const DATA_URL = import.meta.env.DEV
    ? '/duolingo.json'
    : 'https://raw.githubusercontent.com/jfladas/portfolio/duolingo-data/duolingo.json'
const DAY = 24 * 60 * 60 * 1000

const currentLanguage = inject('currentLanguage')
const username = ref('jfladas')
const streak = ref(0)
const lastPracticed = ref(null)

// Duolingo counts days in my time zone, so "today" is today in Switzerland, wherever the visitor is
const todayInSwitzerland = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(new Date())
const daysSincePracticed = computed(() =>
    lastPracticed.value ? Math.round((Date.parse(todayInSwitzerland()) - Date.parse(lastPracticed.value)) / DAY) : null
)
const practicedToday = computed(() => daysSincePracticed.value === 0)
// a gap of two days means the streak is over or the data is outdated, so the card stays hidden
const visible = computed(() => streak.value > 0 && daysSincePracticed.value !== null && daysSincePracticed.value <= 1)

const stateLabel = computed(() => {
    if (currentLanguage.value === 'en') return practicedToday.value ? 'practiced today' : 'not practiced yet today'
    return practicedToday.value ? 'heute geübt' : 'heute noch nicht geübt'
})
const streakLabel = computed(() =>
    currentLanguage.value === 'en' ? `${streak.value} day streak` : `${streak.value} Tage in Folge`
)

onMounted(async () => {
    try {
        const response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (!response.ok) return
        const data = await response.json()
        username.value = data.username || username.value
        streak.value = data.streak ?? 0
        lastPracticed.value = data.lastPracticed ?? null
    } catch {
        // no data, no card
    }
})
</script>

<style scoped>
.duolingo {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    margin-bottom: 2rem;
    width: calc(100% - 2rem);
    color: var(--white);
    background: linear-gradient(to right, rgba(var(--deep-rgb), 0.5), var(--navy));
    text-decoration: none;
    transition: all 0.5s ease;
}

.duolingo:hover {
    gap: 1.2rem;
    background: linear-gradient(to right, rgba(var(--deep-rgb), 1), var(--navy));

    .duolingo-flame {
        transform: scale(1.2);
    }
}

.duolingo-flame {
    width: 4rem;
    height: 3rem;
    color: rgba(var(--white-rgb), 0.25);
    transition: all 0.5s ease;
}

.duolingo-flame.lit {
    color: var(--pink);
}

.duolingo-info {
    min-width: 0;
}

.duolingo-state {
    color: var(--pink);
    font-size: 1rem;
    margin-bottom: 0.1rem;
}

.duolingo-streak {
    font-family: "Funnel Display Variable", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
}

.duolingo-source {
    font-size: 1rem;
    color: var(--aqua);
}
</style>
