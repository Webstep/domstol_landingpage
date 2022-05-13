import create from 'zustand'

export type SlideStore = {
    slidesLength: number
    setSlidesLength: (length: number) => void
    activeSlide: number
    nextSlide: () => void
    previousSlide: () => void
}

export const useSlideStore = create<SlideStore>((set) => ({
    slidesLength: 0,
    setSlidesLength: (length) =>
        set(() => ({ slidesLength: length > 0 ? length : 0 })),
    activeSlide: 0,
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
