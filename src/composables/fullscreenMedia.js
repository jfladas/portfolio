// Helpers for media that fills the fullscreen overlay with object-fit: contain

// Touch screens have no hover, so there a tap on fullscreen media shows its controls instead of closing it
export const isTouchScreen = () => window.matchMedia('(hover: none), (pointer: coarse)').matches

// Whether a click hit the picture itself (image or video), not the empty space object-fit: contain leaves around it
export const isOnMedia = (event) => {
    const media = event.target.closest?.('img, video')
    const mediaWidth = media?.naturalWidth || media?.videoWidth
    const mediaHeight = media?.naturalHeight || media?.videoHeight

    if (!mediaWidth || !mediaHeight) {
        return false
    }

    const box = media.getBoundingClientRect()
    const scale = Math.min(box.width / mediaWidth, box.height / mediaHeight)
    const width = mediaWidth * scale
    const height = mediaHeight * scale
    const left = box.left + (box.width - width) / 2
    const top = box.top + (box.height - height) / 2

    return event.clientX >= left && event.clientX <= left + width && event.clientY >= top && event.clientY <= top + height
}
