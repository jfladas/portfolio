<template>
    <LiveCard v-if="visible" data-umami-event="live card" data-umami-event-name="duolingo" :href="`https://www.duolingo.com/profile/${username}`" :active="practicedToday"
        :state="stateLabel" :title="streakLabel" :detail="currentLanguage === 'en' ? 'on Duolingo' : 'auf Duolingo'">
        <template #media>
            <!-- drawn here instead of with <AppIcon> so the flame can have a gradient -->
            <svg class="duolingo-flame" :class="{ lit: practicedToday }" :viewBox="flame.viewBox" shape-rendering="crispEdges"
                aria-hidden="true">
                <defs>
                    <linearGradient :id="gradientId" x1="0" x2="0" y1="1" y2="0">
                        <stop offset="0" class="flame-bottom" />
                        <stop offset="0.5" class="flame-middle" />
                        <stop offset="1" class="flame-top" />
                    </linearGradient>
                </defs>
                <path :d="flame.d" :fill="`url(#${gradientId})`" />
            </svg>
        </template>
    </LiveCard>
</template>

<script setup>
import { computed, inject, onMounted, ref, useId } from 'vue'
import fireSvg from '~icons/pixelarticons/fire?raw'
import LiveCard from '@/components/LiveCard.vue'

// preview: sample data instead of the live file, for the dev-only preview page (src/views/LiveCardsPreview.vue)
const props = defineProps({ preview: { type: Object, default: null } })

// written every 30 minutes by .github/workflows/duolingo.yml (Cronitor);
// `npm run dev` reads a local copy instead (`npm run duolingo`)
const DATA_URL = import.meta.env.DEV
    ? '/duolingo.json'
    : 'https://raw.githubusercontent.com/jfladas/portfolio/duolingo-data/duolingo.json'
const DAY = 24 * 60 * 60 * 1000

// pixelarticons' fire, like the achievement icons, as shape data for the gradient-filled path
const flame = {
    viewBox: fireSvg.match(/viewBox="([^"]+)"/)[1],
    d: [...fireSvg.matchAll(/ d="([^"]+)"/g)].map((match) => match[1]).join(' ')
}
const gradientId = `${useId()}-flame`
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

const apply = (data) => {
    username.value = data.username || username.value
    streak.value = data.streak ?? 0
    lastPracticed.value = data.lastPracticed ?? null
}

onMounted(async () => {
    if (props.preview) return apply(props.preview)

    try {
        const response = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: 'no-store' })
        if (response.ok) apply(await response.json())
    } catch {
        // no data, no card
    }
})
</script>

<style scoped>
.duolingo-flame {
    flex: none;
    height: 100%;
    aspect-ratio: 1;
    transform: scale(0.8);
    transition: transform 0.5s ease;
}

.live-card.hoverable:hover {
    .duolingo-flame {
        transform: scale(1);
    }
}

.flame-bottom {
    stop-color: var(--navy);
}

.flame-middle {
    stop-color: var(--navy);
}

.flame-top {
    stop-color: var(--navy);
}

.lit {
    .flame-bottom {
        stop-color: var(--aqua);
    }

    .flame-middle {
        stop-color: var(--white);
    }

    .flame-top {
        stop-color: var(--pink);
    }
}
</style>
