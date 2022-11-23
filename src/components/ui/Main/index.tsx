import Grid from '../Grid'
import GridWrap from '../GridWrap'
import styles from './Main.module.css'

type Props = {
  children: JSX.Element
}

export default function Main({ children }: Props) {
  return (
    <main className={styles.main} style={{ gridArea: 'main' }}>
      <GridWrap>
        <Grid>{children}</Grid>
      </GridWrap>
    </main>
  )
}
