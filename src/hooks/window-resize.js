import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

const useWindowResize = (callback) => {
    useEffect(() => {
        const handleWindowResize = debounce(callback, 100)
        window.addEventListener('resize', handleWindowResize)
        handleWindowResize()

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [callback])
}

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useWindowResize(() =>
        setIsMobile(window && window.matchMedia(`(max-width: 767px)`).matches)
    )

    return isMobile
}

export const useIsTablet = () => {
    const [isTablet, setIsTablet] = useState(false)

    useWindowResize(() =>
        setIsTablet(window && window.matchMedia(`(max-width: 1012px)`).matches)
    )
    return isTablet
}
