import { CSSProperties } from 'react';
import LinkIcon from '@ui/LinkIcon'
import macPic from '@images/mac.png'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'

type Props = {
  image: string;
  page: {
    title: string;
    excerpt: string;
    id: string;
    direction: string;
    link: {
      href: string;
      text: string;
    };
  };
};

const Panel = ({ image, page }: Props) => {
  const { link, excerpt, title, id, direction } = page
  const vars = { ['--local-direction']: 'rtl' } as CSSProperties

  return (
    <section style={direction === 'rtl' ? vars : undefined} className={styles.panel}>
      <div className={stylesContent.content}>
        <h3 id={`panel-${id}`}>{title}</h3>
        <p>{excerpt}</p>
        <LinkIcon href={link.href} />
      </div>
      <img
        className={styles.image}
        src={image}
        alt="Image alt"
        placeholder="blur"
      />
    </section>
  )
}

Panel.defaultProps = {
  image: macPic,
  page: {
    id: '1',
    direction: 'ltr',
    link: {
      href: '/cards',
      text: 'Find out more'
    },
    excerpt:
      'Size queries in Container Queries provide a way to query the size of a container, and conditionally apply CSS to the content of that container.',
    title: 'Panel title'
  }
}

export default Panel
