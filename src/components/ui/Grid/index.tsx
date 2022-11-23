import styles from './Grid.module.css'

type props = {
  children: JSX.Element
}

export default function Grid({ children }: props) {
  return <div className={styles.grid}>{children}</div>
}
