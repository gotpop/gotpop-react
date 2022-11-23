import { CSSProperties } from 'react'
import styles from './GridWrap.module.css'

type props = {
  children: JSX.Element
}

export default function GridWrap({ children }: props) {
  return (
    <div className={styles.gridwrap}>
      {children}
    </div>
  )
}
