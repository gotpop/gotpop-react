import { ILinkIcon } from '@types'
import { Link } from "react-router-dom";
import styles from './LinkIcon.module.css'

const LinkIcon = ({ icon, children, href, vars }: ILinkIcon) => {
  return (
    <Link className={styles.link} to={href} style={vars}>
      <>
        <span>{children}</span>
        {icon}
      </>
    </Link>
  )
}

LinkIcon.defaultProps = {
  children: 'Visit',
  href: '/',
  icon: null,
  vars: null
}

export default LinkIcon
