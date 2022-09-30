import create from 'zustand'

export type SlideStore = {
    showHint: boolean
    setShowHint: (value: boolean) => void
    slidesLength: number
    setSlidesLength: (length: number) => void
    activeSlide: number
    setActiveSlide: (index: number) => void
    nextSlide: () => void
    previousSlide: () => void
}

export const useSlideStore = create<SlideStore>((set) => ({
    showHint: false,
    setShowHint: (value) => set(() => ({ showHint: value })),
    slidesLength: 0,
    setSlidesLength: (length) =>
        set(() => ({ slidesLength: length > 0 ? length : 0 })),
    activeSlide: 0,
    setActiveSlide: (index) =>
        set((state) => {
            let newIndex = index
            if (index >= state.slidesLength || index < 0) {
                console.error('Tried to set activeSlide outside of valid range')
                newIndex = 0
            }
            return { activeSlide: newIndex, showHint: false }
        }),
    nextSlide: () =>
        set((state) => ({
            activeSlide:
                state.activeSlide < state.slidesLength - 1
                    ? state.activeSlide + 1
                    : state.activeSlide,
            showHint: false,
        })),
    previousSlide: () =>
        set((state) => ({
            activeSlide:
                state.activeSlide > 0
                    ? state.activeSlide - 1
                    : state.activeSlide,

            showHint: false,
        })),
}))
