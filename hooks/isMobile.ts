import { useEffect, useState } from 'react'

const screenWidthBreakpoint = 1200

function useIsScreenThin(): boolean {
    const [screenWidth, setScreenWidth] = useState<number>(1400)
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

    useEffect(() => {
        //only set new state if the new state would be different to the previous one
        if (screenWidth >= screenWidthBreakpoint && isSmallScreen) {
            setIsSmallScreen(false)
        }
        if (screenWidth < screenWidthBreakpoint && !isSmallScreen) {
            setIsSmallScreen(true)
        }
        console.log(screenWidth < screenWidthBreakpoint, isSmallScreen)
    }, [isSmallScreen, screenWidth])

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    return isSmallScreen
}

export default useIsScreenThin
