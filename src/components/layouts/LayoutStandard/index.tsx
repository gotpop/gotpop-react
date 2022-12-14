import { CSSProperties, ReactElement, useEffect } from 'react'

import Footer from '@blocks/Footer'
import Grid from '@components/ui/Grid'
import GridWrap from '@components/ui/GridWrap'
import Header from '@blocks/Header'
import Main from '@components/ui/Main'
import Trigger from '@components/ui/Trigger'
import { getScrollBarWidth } from '@utilities/scrollBarWidth'
import styles from './Site.module.css'

type props = {
  children: ReactElement
}

const area = (value: string) => ({ ['--local-grid-area']: `${value}` })

export default function LayoutStandard({ children }: props) {
  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header />
      <Main>
        <>
          <Trigger />
          {children}
        </>
      </Main>
      <Footer />
    </div>
  )
}
