import GridAuto from '../GridAuto'
import GridWrap from '../GridWrap'
import { ReactElement } from 'react'
import styles from './Main.module.css'

type Props = {
  children: ReactElement
}

export default function Main({ children }: Props) {
  return (
    <main className={styles.main}>
      <GridWrap>
        <GridAuto>{children}</GridAuto>
      </GridWrap>
    </main>
  )
}
