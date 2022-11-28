import { useEffect, useState } from 'react'

import Hero from '@components/ui/Hero'
import { IPage } from '@types'
import LayoutFull from '@components/layouts/LayoutFull'
import Panel from '@components/ui/Panel'
import booksPic from '@images/books.png'
import { getImage } from '@utilities/getComponent'
import htmlPic from '@images/html.png'
import keyboardPic from '@images/keyboard.png'
import macPic from '@images/mac.png'
import { pages } from '@data/pages'
import { useTrackPad } from '@hooks/useTrackPad'

const imagesMap = new Map([
  [1, booksPic],
  [2, htmlPic],
  [3, keyboardPic],
  [4, macPic]
])

const trackPadActive = () => {
  localStorage.setItem('trackPad', 'true')
  document.documentElement.style.setProperty('--scroll-type', 'proximity')
}

export function Home() {
  const isTrackPad = useTrackPad()
  const [trackPadTrigger, setTrackPadTrigger] = useState(false)

  useEffect(() => {
    if (isTrackPad) {
      setTrackPadTrigger(true)
      trackPadActive()
    }
  }, [isTrackPad])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutFull>
      <>
        <Hero />
        <div>
          {pages.map((page: IPage, i) => (
            <Panel
              key={i}
              compact={trackPadTrigger}
              image={getImage(imagesMap, page.id)}
              page={page}
            />
          ))}
        </div>
      </>
    </LayoutFull>
  )
}
