import { useEffect, useState } from 'react'

const useOneTimeSwitch = (flip: boolean): boolean => {
    const [hasSwitched, setHasSwitched] = useState<boolean>(false)

    useEffect(() => {
        if (flip && !hasSwitched) {
            setHasSwitched(true)
        }
    }, [flip, hasSwitched])

    return hasSwitched
}

export default useOneTimeSwitch
