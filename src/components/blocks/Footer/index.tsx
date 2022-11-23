import { AiFillHome } from 'react-icons/ai'
import { CSSProperties } from 'react'
import { GoZap } from 'react-icons/go'
import Grid from '@components/ui/Grid'
import GridWrap from '@components/ui/GridWrap'
import Nav from '@ui/Nav'
import { TfiGithub } from 'react-icons/tfi'
import { navSecondary } from 'data/nav-secondary'
import styles from './Footer.module.css'

const icons = new Map([
  [1, AiFillHome],
  [2, TfiGithub],
  [3, GoZap]
])

type props = {
  vars: CSSProperties
}

const Footer = ({ vars }: props) => {
  return (
    <footer className={styles.footer}>
      <GridWrap>
        <Grid>
          <>
            <Nav navItems={navSecondary} iconsMap={icons} />
            <span>
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </span>
          </>
        </Grid>
      </GridWrap>
    </footer>
  )
}

Footer.defaultProps = {
  vars: null
}

export default Footer
