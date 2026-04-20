<template>
    <div class="achievement-item" :class="{ unlocked: achievement.unlocked }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="achievement-svg" viewBox="0 0 24 24">
            <path :d="achievement.svg" />
            <defs>
                <linearGradient id="gradient-locked" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color: var(--deep); stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: var(--navy); stop-opacity: 0" />
                </linearGradient>
                <linearGradient id="gradient-unlocked" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color: var(--pink); stop-opacity: 0.1" />
                    <stop offset="50%" style="stop-color: var(--pink); stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: var(--purple); stop-opacity: 1" />
                </linearGradient>
            </defs>
        </svg>
        <h2 class="achievement-title">{{ achievement.title }}</h2>
        <p v-if="achievement.unlocked" class="achievement-description">{{ localizedDescription }}</p>
        <div v-if="achievement.rewardThemeId" class="achievement-reward">
            <span class="reward-label">
                {{ currentLanguage === 'de' ? 'Belohnung: Theme ' : 'Reward: Theme ' }}
                {{ achievement.rewardThemeId }}
            </span>
            <a v-if="canClaimReward" class="button-container">
                <button class="hoverable button-primary reward-button" @click="emit('claim-theme')">
                    Claim
                </button>
            </a>
            <a v-else-if="rewardClaimed" class="button-container disabled">
                <button class="button-primary reward-button">
                    Claimed
                    <font-awesome-icon icon="check" />
                </button>
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
    achievement: {
        type: Object,
        required: true
    },
    rewardClaimed: {
        type: Boolean,
        default: false
    },
    canClaimReward: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['claim-theme'])

const currentLanguage = inject('currentLanguage')

const localizedDescription = computed(() => {
    const isGerman = currentLanguage.value === 'de'
    if (isGerman && props.achievement.descriptionDe) {
        return props.achievement.descriptionDe
    }
    return props.achievement.description
})
</script>

<style scoped>
.achievement-item {
    position: relative;
    height: calc(5vw + 8rem);
    min-height: fit-content;
    padding: 1rem 1.5rem;
    background: linear-gradient(to right, var(--deep), var(--navy));
    overflow: hidden;
    user-select: none;
    transition: all 0.5s;
}

.achievement-svg {
    position: absolute;
    top: 0;
    left: 25%;
    fill: url("#gradient-locked");
    height: 120%;
}

.achievement-title {
    position: relative;
    font-family: 'Funnel Display', sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 800;
    width: 75%;
    margin: 0.2rem 2rem 0.5rem 0;
    color: var(--sky);
}

.achievement-description {
    position: relative;
    color: var(--deep);
    font-size: 1.5rem;
    font-weight: 700;
    width: 75%;
}

.achievement-reward {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    color: var(--sky);
}

.achievement-item.unlocked {
    background: linear-gradient(to right,
            var(--white) 50%,
            var(--pink),
            var(--purple));
    grid-column: span 2;

    .achievement-svg {
        left: 40%;
        fill: url("#gradient-unlocked");
    }

    .achievement-title {
        font-size: 2.5rem;
        line-height: 2.5rem;
        color: var(--navy);
    }

    .achievement-reward {
        font-size: 1.5rem;
        color: var(--deep);
    }
}

.achievement-item.unlocked:hover {
    background: linear-gradient(to right,
            var(--white) 50%,
            var(--pink),
            var(--purple));
}

@media (max-width: 1200px) {
    .achievement-description {
        font-size: 1.2rem;
    }

    .achievement-item.unlocked {
        .achievement-title {
            font-size: 2rem;
            line-height: 2rem;
        }

        .achievement-reward {
            font-size: 1.2rem;
        }
    }
}

@media (max-width: 600px) {
    .achievement-title {
        width: 120%;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-bottom: 0.5rem;
        margin-bottom: 0;
    }

    .achievement-svg {
        width: 120%;
        height: auto;
    }

    .achievement-item.unlocked {
        grid-column: span 2;

        .achievement-svg {
            left: 35%;
            width: 60%;
        }
    }
}
</style>