// @ts-nocheck

import { RefObject, useEffect, useRef, useState } from 'react'

export function useTrackPad() {
    const [isTrackPad, setIsTrackPad] = useState(false)

    useEffect(() => {
        let timesEventFired = 0

        function handler(e) {
            if (localStorage.getItem('trackPad') !== null) return
            let root = document.documentElement

            timesEventFired++

            if (timesEventFired > 50) {
                root.style.setProperty('--scroll-type', 'proximity')
                setIsTrackPad(true)
                localStorage.setItem('trackPad', 'true')
            } else {
                root.style.setProperty('--scroll-type', 'mandatory')
            }

            setTimeout(() => {
                timesEventFired = 0
            }, 3000)
        }

        document.addEventListener('wheel', handler, false)

        return () => document.removeEventListener('wheel', handler, false)

    }, [])

    return isTrackPad;
}
