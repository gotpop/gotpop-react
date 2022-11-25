import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import { useEffect } from 'react'

const content = {
  title: 'About',
  text: 'Find out more about us here.'
}

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
      </>
    </LayoutStandard>
  )
}
