import Footer from '@blocks/Footer'
import Header from '@blocks/Header'
import { getScrollBarWidth } from '@utilities/scrollBarWidth'
import styles from './Site.module.css'
import stylesMain from './Main.module.css'
import { useEffect } from 'react'

type props = {
  children: JSX.Element;
}

export default function LayoutStandard({ children }: props) {
  useEffect(() => {
    getScrollBarWidth()
  }, [])

  return (
    <div className={styles.site}>
      <Header />
      <div className={stylesMain.mainwrap}>
        <main className={stylesMain.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
