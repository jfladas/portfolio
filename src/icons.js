// The site's icons: one name per meaning, mapped to the icon that draws it.
// Templates and src/data/projects.js only use these names (<AppIcon icon="file-pdf" />, icon: 'file-pdf').
// unplugin-icons compiles each import into the bundle at build time, so nothing loads from the internet.
// To add or swap an icon, change it here: icons.remixicon.com for Remix Icon, icones.js.org for every set.
// Credit for Remix Icon, Font Awesome and pixelarticons is in the footer (App.vue).

// Remix Icon (Apache 2.0)
import RiAccountCircleFill from '~icons/ri/account-circle-fill'
import RiAlertFill from '~icons/ri/alert-fill'
import RiAppleFill from '~icons/ri/apple-fill'
import RiArrowLeftLongLine from '~icons/ri/arrow-left-long-line'
import RiArrowLeftSFill from '~icons/ri/arrow-left-s-fill'
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line'
import RiArrowRightFill from '~icons/ri/arrow-right-fill'
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line'
import RiArrowRightUpFill from '~icons/ri/arrow-right-up-fill'
import RiArrowUpSLine from '~icons/ri/arrow-up-s-line'
import RiAtFill from '~icons/ri/at-fill'
import RiBehanceFill from '~icons/ri/behance-fill'
import RiBox3Fill from '~icons/ri/box-3-fill'
import RiBriefcase4Fill from '~icons/ri/briefcase-4-fill'
import RiCheckFill from '~icons/ri/check-fill'
import RiCodeSSlashFill from '~icons/ri/code-s-slash-fill'
import RiCollapseDiagonalFill from '~icons/ri/collapse-diagonal-fill'
import RiCursorFill from '~icons/ri/cursor-fill'
import RiDeleteBinFill from '~icons/ri/delete-bin-fill'
import RiDiscordFill from '~icons/ri/discord-fill'
import RiDownload2Fill from '~icons/ri/download-2-fill'
import RiEmotionSadFill from '~icons/ri/emotion-sad-fill'
import RiExpandDiagonalFill from '~icons/ri/expand-diagonal-fill'
import RiFigmaFill from '~icons/ri/figma-fill'
import RiFileImageFill from '~icons/ri/file-image-fill'
import RiFilePaper2Fill from '~icons/ri/file-paper-2-fill'
import RiFilePdf2Fill from '~icons/ri/file-pdf-2-fill'
import RiFilePptFill from '~icons/ri/file-ppt-fill'
import RiFileVideoFill from '~icons/ri/file-video-fill'
import RiFileZipFill from '~icons/ri/file-zip-fill'
import RiFilterFill from '~icons/ri/filter-fill'
import RiFireFill from '~icons/ri/fire-fill'
import RiFlashlightFill from '~icons/ri/flashlight-fill'
import RiFlowerFill from '~icons/ri/flower-fill'
import RiGamepadFill from '~icons/ri/gamepad-fill'
import RiGiftFill from '~icons/ri/gift-fill'
import RiGlobalFill from '~icons/ri/global-fill'
import RiGraduationCapFill from '~icons/ri/graduation-cap-fill'
import RiGroupFill from '~icons/ri/group-fill'
import RiInstagramFill from '~icons/ri/instagram-fill'
import RiLayoutGridFill from '~icons/ri/layout-grid-fill'
import RiLinkedinFill from '~icons/ri/linkedin-fill'
import RiMenuFill from '~icons/ri/menu-fill'
import RiMicrosoftFill from '~icons/ri/microsoft-fill'
import RiMusic2Fill from '~icons/ri/music-2-fill'
import RiPaletteFill from '~icons/ri/palette-fill'
import RiPauseFill from '~icons/ri/pause-fill'
import RiPenNibFill from '~icons/ri/pen-nib-fill'
import RiPlayFill from '~icons/ri/play-fill'
import RiQrCodeFill from '~icons/ri/qr-code-fill'
import RiResetLeftFill from '~icons/ri/reset-left-fill'
import RiResetRightFill from '~icons/ri/reset-right-fill'
import RiRocket2Fill from '~icons/ri/rocket-2-fill'
import RiSpotifyFill from '~icons/ri/spotify-fill'
import RiSubtractFill from '~icons/ri/subtract-fill'
import RiTranslate2 from '~icons/ri/translate-2'
import RiTrophyFill from '~icons/ri/trophy-fill'
import RiUser2Fill from '~icons/ri/user-2-fill'
import RiUserFill from '~icons/ri/user-fill'
import RiVerifiedBadgeFill from '~icons/ri/verified-badge-fill'
import RiVideoOnFill from '~icons/ri/video-on-fill'
import RiVolumeMuteFill from '~icons/ri/volume-mute-fill'
import RiVolumeUpFill from '~icons/ri/volume-up-fill'
import RiYoutubeFill from '~icons/ri/youtube-fill'
// Font Awesome 7 Brands (CC BY 4.0): logos Remix doesn't have, or in the version the site always used
import FaDuolingo from '~icons/fa7-brands/duolingo'
import FaGithubAlt from '~icons/fa7-brands/github-alt'
import FaItchIo from '~icons/fa7-brands/itch-io'
// SVG Spinners (MIT)
import SpinnerBarsRotateFade from '~icons/svg-spinners/bars-rotate-fade'
// pixel hearts in src/assets/icons/pixel, drawn on the pixelarticons grid
import PixelHeart from '~icons/pixel/heart'
import PixelHeartCrack from '~icons/pixel/heart-crack'

export const icons = {
    // navigation & controls
    'caret-left': RiArrowLeftSFill,
    'chevron-left': RiArrowLeftSLine,
    'chevron-right': RiArrowRightSLine,
    'angle-up': RiArrowUpSLine,
    'arrow-left-long': RiArrowLeftLongLine,
    minus: RiSubtractFill,
    filter: RiFilterFill,
    grip: RiLayoutGridFill,
    'grip-lines': RiMenuFill,
    check: RiCheckFill,
    trash: RiDeleteBinFill,
    language: RiTranslate2,
    'arrow-pointer': RiCursorFill,
    palette: RiPaletteFill,
    trophy: RiTrophyFill,
    gift: RiGiftFill,
    heart: PixelHeart,
    'heart-crack': PixelHeartCrack,
    'face-frown-open': RiEmotionSadFill,
    envelope: RiAtFill,
    play: RiPlayFill,
    pause: RiPauseFill,
    'rotate-left': RiResetLeftFill,
    'rotate-right': RiResetRightFill,
    spinner: SpinnerBarsRotateFade,
    'volume-up': RiVolumeUpFill,
    'volume-mute': RiVolumeMuteFill,
    'up-right-and-down-left-from-center': RiExpandDiagonalFill,
    'down-left-and-up-right-to-center': RiCollapseDiagonalFill,

    // project categories
    user: RiUserFill,
    users: RiGroupFill,
    code: RiCodeSSlashFill,
    'pen-nib': RiPenNibFill,
    globe: RiGlobalFill,
    gamepad: RiGamepadFill,
    'circle-user': RiAccountCircleFill,
    scroll: RiFilePaper2Fill,
    'dice-d6': RiBox3Fill,
    video: RiVideoOnFill,

    // content
    teammate: RiUser2Fill,
    'graduation-cap': RiGraduationCapFill,
    briefcase: RiBriefcase4Fill,
    certificate: RiVerifiedBadgeFill,
    bolt: RiFlashlightFill,
    'fire-flame-curved': RiFireFill,
    music: RiMusic2Fill,
    spa: RiFlowerFill,
    'triangle-exclamation': RiAlertFill,
    'arrow-right': RiArrowRightFill,
    'circle-arrow-down': RiDownload2Fill,
    rocket: RiRocket2Fill,
    qrcode: RiQrCodeFill,

    // links & downloads
    'file-pdf': RiFilePdf2Fill,
    'file-powerpoint': RiFilePptFill,
    'file-video': RiFileVideoFill,
    'file-image': RiFileImageFill,
    'file-zipper': RiFileZipFill,
    'external-link': RiArrowRightUpFill,

    // logos
    github: FaGithubAlt,
    'itch-io': FaItchIo,
    duolingo: FaDuolingo,
    linkedin: RiLinkedinFill,
    instagram: RiInstagramFill,
    youtube: RiYoutubeFill,
    spotify: RiSpotifyFill,
    discord: RiDiscordFill,
    behance: RiBehanceFill,
    figma: RiFigmaFill,
    apple: RiAppleFill,
    microsoft: RiMicrosoftFill,
}
