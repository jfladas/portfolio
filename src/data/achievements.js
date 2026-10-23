// Icons are pixelarticons (https://pixelarticons.com/docs/), imported by name from the npm package.
// To use another one, import pixelarticons/svg/<name>.svg?raw and pass it through pixels().
import balloonIcon from 'pixelarticons/svg/balloon.svg?raw'
import eyeIcon from 'pixelarticons/svg/eye.svg?raw'
import crownIcon from 'pixelarticons/svg/crown.svg?raw'
import atSignIcon from 'pixelarticons/svg/at-sign.svg?raw'
import languagesIcon from 'pixelarticons/svg/languages.svg?raw'
import cursorMinimalIcon from 'pixelarticons/svg/cursor-minimal.svg?raw'
import smileIcon from 'pixelarticons/svg/smile.svg?raw'
import sparkleIcon from 'pixelarticons/svg/sparkle.svg?raw'
import moonIcon from 'pixelarticons/svg/moon.svg?raw'
import gamepadIcon from 'pixelarticons/svg/gamepad.svg?raw'
import fireIcon from 'pixelarticons/svg/fire.svg?raw'
import featherIcon from 'pixelarticons/svg/feather.svg?raw'
import skullIcon from 'pixelarticons/svg/skull.svg?raw'
import smartphoneIcon from 'pixelarticons/svg/smartphone.svg?raw'
import heartIcon from 'pixelarticons/svg/heart.svg?raw'
import zapIcon from 'pixelarticons/svg/zap.svg?raw'

// path data of an icon file, for the <path> in AchievementItem.vue
const pixels = (svg) => [...svg.matchAll(/ d="([^"]+)"/g)].map((match) => match[1]).join('')

export const achievementDefinitions = [
    {
        id: 'curious',
        title: 'curious?',
        description: 'Checked out your first project.',
        descriptionDe: 'Auf dein erstes Projekt geklickt.',
        rewardThemeId: 'light',
        svg: pixels(balloonIcon)
    },
    {
        id: 'explorer',
        title: 'explorer',
        description: 'Viewed 10 different projects.',
        descriptionDe: '10 verschiedene Projekte angesehen.',
        svg: pixels(eyeIcon)
    },
    {
        id: 'completionist',
        title: 'completionist',
        description: 'Explored all projects in the portfolio.',
        descriptionDe: 'Alle Projekte im Portfolio erkundet.',
        rewardThemeId: 'milo',
        svg: pixels(crownIcon)
    },
    {
        id: 'get-in-touch',
        title: 'get in touch',
        description: 'Clicked on email button.',
        descriptionDe: 'Auf den E-Mail-Button geklickt.',
        svg: pixels(atSignIcon)
    },
    {
        id: 'bilingual',
        title: 'zweisprachig',
        description: 'Switched language.',
        descriptionDe: 'Die Sprache gewechselt.',
        svg: pixels(languagesIcon)
    },
    {
        id: 'cursor-connaisseur',
        title: 'cursor connaisseur',
        description: 'Tried out the custom cursor.',
        descriptionDe: 'Den Custom Cursor ausprobiert.',
        svg: pixels(cursorMinimalIcon)
    },
    {
        id: 'you-again',
        title: 'you again...',
        description: 'Returned to the site 5 or more times.',
        descriptionDe: 'Die Seite 5-mal oder öfter besucht.',
        svg: pixels(smileIcon)
    },
    {
        id: 'tokyo-stories',
        title: 'tokyo stories',
        description: 'Revealed all the japanese text.',
        descriptionDe: 'Den gesamten japanischen Text aufgedeckt.',
        svg: pixels(sparkleIcon)
    },
    {
        id: 'nocturnal',
        title: 'nocturnal',
        description: 'Visited the site between midnight and 3 a.m.',
        descriptionDe: 'Die Seite zwischen Mitternacht und 3 Uhr morgens besucht.',
        svg: pixels(moonIcon)
    },
    {
        id: 'gamer',
        title: 'gamer',
        description: 'Filtered by games.',
        descriptionDe: 'Nach Games gefiltert.',
        rewardThemeId: 'sweet',
        svg: pixels(gamepadIcon)
    },
    {
        id: 'horse-fan',
        title: 'horse fan',
        description: 'Took a closer look at shirtless Mr. Horse.',
        descriptionDe: 'Sich Mr. Horse oben ohne näher angesehen.',
        rewardThemeId: 'had',
        svg: pixels(fireIcon)
    },
    {
        id: 'owl-fan',
        title: 'owl fan',
        description: 'Visited my Duolingo profile.',
        descriptionDe: 'Mein Duolingo-Profil besucht.',
        svg: pixels(featherIcon)
    },
    {
        id: '404',
        title: '404',
        description: 'Found a invalid project page.',
        descriptionDe: 'Eine ungültige Projektseite gefunden.',
        svg: pixels(skullIcon)
    },
    {
        id: 'yes-its-responsive',
        title: 'yes, it\’s responsive',
        description: 'Viewed page in desktop and mobile mode.',
        descriptionDe: 'Die Seite im Desktop- und Mobile-Modus angesehen.',
        svg: pixels(smartphoneIcon)
    },
    {
        id: 'i-love-love',
        title: 'i love love',
        description: 'Clicked on heart in footer.',
        descriptionDe: 'Auf das Herz im Footer geklickt.',
        svg: pixels(heartIcon)
    },
    {
        id: 'heartbreaker',
        title: 'heartbreaker',
        description: 'Cracked a project heart with too much love.',
        descriptionDe: 'Ein Projekt-Herz mit zu viel Liebe zum Brechen gebracht.',
        svg: pixels(zapIcon)
    }
]