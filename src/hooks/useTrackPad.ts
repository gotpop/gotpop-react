// @ts-nocheck

import { useEffect, useState } from 'react'

export function useTrackPad() {
    const [isTrackPad, setIsTrackPad] = useState(false)

    useEffect(() => {
        let timesEventFired = 0

        function handleWheel(e) {
            if (localStorage.getItem('trackPad') !== null) return

            timesEventFired++

            if (timesEventFired > 50) {
                setIsTrackPad(true)
                localStorage.setItem('trackPad', 'true')
            } else {
                setIsTrackPad(false)
            }

            setTimeout(() => {
                timesEventFired = 0
            }, 3000)
        }

        document.addEventListener('wheel', handleWheel, false)

        return () => document.removeEventListener('wheel', handleWheel, false)
    }, [])

    return isTrackPad;
}
