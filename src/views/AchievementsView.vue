<template>
    <div class="content">
        <h1>achievements</h1>
        <div class="stats" :class="{ 'all-unlocked': unlockedCount >= achievements.length }">
            <div class="stats-header">
                <span class="stat-value">{{ unlockedCount }} / {{ achievements.length }}</span>
                <span v-if="unlockedCount >= achievements.length">
                    {{currentLanguage === 'en' ? 'All unlocked!' : 'Alle freigeschaltet!'}}
                </span>
            </div>
            <div class="stats-bar">
                <div class="stats-bar-fill" :style="{ width: `${progressPercent}%` }"></div>
            </div>
        </div>

        <section class="achievement-grid">
            <AchievementItem v-for="achievement in achievements" :key="achievement.id" :achievement="achievement"
                :reward-claimed="achievement.rewardThemeId ? isThemeClaimed(achievement.rewardThemeId) : false"
                :can-claim-reward="Boolean(achievement.rewardThemeId && achievement.unlocked && !isThemeClaimed(achievement.rewardThemeId))"
                @claim-theme="claimAchievementTheme(achievement.id)" />
        </section>
        <a class="button-container">
            <button class="hoverable button-secondary reset-button" @click.prevent="resetAchievements">
                {{currentLanguage === 'en' ? 'Reset Achievements' : 'Achievements zurücksetzen'}}
                <font-awesome-icon icon="trash" />
            </button>
        </a>
    </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import AchievementItem from '@/components/AchievementItem.vue'
import { useAchievements } from '@/composables/useAchievements.js'

const { achievements, unlockedCount, resetAchievements, claimAchievementTheme, isThemeClaimed } = useAchievements()
const currentLanguage = inject('currentLanguage')

const progressPercent = computed(() => {
    if (!achievements.value.length) {
        return 0
    }

    return Math.round((unlockedCount.value / achievements.value.length) * 100)
})
</script>

<style scoped>
.content {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.stats {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.stats-header {
    position: absolute;
    transform: translateY(-2rem);
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: baseline;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--white);
}

.stats-bar {
    width: 100%;
    height: 1.5rem;
    background: linear-gradient(to right, var(--navy), var(--deep) 150%);
    overflow: hidden;
}

.stats-bar-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(60deg,
            var(--purple) 30%,
            var(--pink) 45%,
            var(--white) 50%,
            var(--pink) 55%,
            var(--purple) 70%);
    background-size: 400% 400%;
    animation: shine 3s ease infinite;
    transition: width 0.5s ease;
}

.stats.all-unlocked {

    .stats-header {
        color: var(--pink);
        font-weight: 700;
    }

    .stats-bar-fill {
        background: linear-gradient(60deg,
                var(--pink) 45%,
                var(--white) 50%,
                var(--pink) 55%);
        background-size: 400% 400%;
    }

}

@keyframes shine {

    0%,
    100% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

.reset-button:hover {
    background: linear-gradient(to right, var(--deep), var(--navy) 150%);

    svg {
        color: var(--pink);
        animation: jitter 0.2s infinite;
    }
}

@keyframes jitter {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(-1px, 1px);
    }

    50% {
        transform: translate(1px, -1px);
    }

    75% {
        transform: translate(-1px, -1px);
    }

    100% {
        transform: translate(0, 0);
    }
}

.achievement-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;
}

@media (max-width: 1200px) {
    .content {
        padding-top: 3.5rem;
    }

    .stats-header {
        transform: translateY(-1.5rem);
    }

    .achievement-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    .content {
        padding-top: 2rem;
    }

    .stats {
        max-width: 100%;
    }

    .achievement-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .reset-button {
        background: linear-gradient(to right, var(--deep), var(--navy) 150%);

        svg {
            color: var(--pink);
        }
    }

    .reset-button:hover {
        svg {
            animation: none;
        }
    }

    .stats-bar {
        height: 1rem;
    }
}
</style>