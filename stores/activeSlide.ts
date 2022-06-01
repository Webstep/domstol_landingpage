import create from 'zustand'

export type SlideStore = {
    slidesLength: number
    setSlidesLength: (length: number) => void
    activeSlide: number
    setActiveSlide: (index: number) => void
    nextSlide: () => void
    previousSlide: () => void
}

export const useSlideStore = create<SlideStore>((set) => ({
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
            return { activeSlide: newIndex }
        }),
    nextSlide: () =>
        set((state) => ({
            activeSlide:
                state.activeSlide < state.slidesLength - 1
                    ? state.activeSlide + 1
                    : state.activeSlide,
        })),
    previousSlide: () =>
        set((state) => ({
            activeSlide:
                state.activeSlide > 0
                    ? state.activeSlide - 1
                    : state.activeSlide,
        })),
}))
