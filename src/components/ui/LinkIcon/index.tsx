import { Link } from "react-router-dom";
import { ReactElement } from "react";
import styles from './LinkIcon.module.css'

type ILinkIcon = {
  text?: string;
  children?: string;
  vars?: object;
  properties?: { local: string; global: string }[];
  icon?: ReactElement<any, any>;
  href: string;
}

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
