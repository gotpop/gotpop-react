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
import { useEffect } from 'react'

const content = {
  title: 'About',
  text: 'Find out more about us here.'
}

const imagesMap = new Map([
  [1, booksPic],
  [2, htmlPic],
  [3, keyboardPic],
  [4, macPic]
])

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutFull>
      <>
        <Hero />
        <div>
          {pages.map((page: IPage, i) => (
            <Panel key={i} image={getImage(imagesMap, page.id)} page={page} />
          ))}
        </div>
      </>
    </LayoutFull>
  )
}
