import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { getComponent } from '@utilities/getComponent'
import styles from './Nav.module.css'

type NavItem = {
  id: string;
  href: string
  test: string
  text: string
}

type Props = {
  navItems: NavItem[];
  iconsMap: Map<number, IconType>;
}

export default function Nav({ navItems, iconsMap }: Props) {
  return (
    <nav className={styles.nav}>
      {navItems?.map(item => (
        <Link key={item.id} to={item.href} data-test={item.test}>
          <span>{item.text}</span>
          {getComponent(iconsMap, item.id)}
        </Link>
      ))}
    </nav>
  )
}
