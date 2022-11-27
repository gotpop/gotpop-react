import { CSSProperties, useEffect } from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'
import Grid from '../Grid'
import GridWrap from '../GridWrap'
import LinkIcon from '@ui/LinkIcon'
import macPic from '@images/mac.png'
import styles from './Panel.module.css'
import stylesContent from './PanelContent.module.css'
import { useOnScreen } from '@hooks/useOnScreen'
import { useRef } from 'react'

type Props = {
  image: string | null | undefined
  page: {
    title: string
    excerpt: string
    id: string
    direction: string
    link: {
      href: string
      text: string
    }
  }
}

const contentIn = {
  transform: ['translatex(-20%)', 'translatex(0%)'],
  opacity: [0, 1],
  easing: 'ease-out'
}

const animateImage = {
  transform: ['translatex(20%)', 'translatex(0%)'],
  opacity: [0, 1],
  easing: 'ease-out'
}

const contentTiming = {
  duration: 400,
  delay: 200,
  fill: 'both'
}

const Panel = ({ image, page }: Props) => {
  const { link, excerpt, title, id, direction } = page
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const isOnScreen = useOnScreen(sectionRef)

  const vars = { ['--local-direction']: 'rtl' } as CSSProperties
  const varsGrid = { ['--local-min-height']: '100vh' } as CSSProperties

  useEffect(() => {
    const contentVar = contentRef.current
    const content = contentVar?.animate(
      contentIn,
      contentTiming as KeyframeAnimationOptions
    )
    content?.pause()

    const imageVar = imageRef.current
    const image = imageVar?.animate(
      animateImage,
      contentTiming as KeyframeAnimationOptions
    )
    image?.pause()

    if (isOnScreen) {
      content?.play()
      image?.play()
    } else {
      content?.reverse()
      image?.reverse()
    }
  }, [isOnScreen])

  return (
    <section
      style={direction === 'rtl' ? vars : undefined}
      className={styles.panel}
      id={`panel-${id}`}
      ref={sectionRef}
    >
      <GridWrap>
        <Grid vars={varsGrid}>
          <>
            <div ref={contentRef} className={stylesContent.content}>
              <h3>{title}</h3>
              <p>{excerpt}</p>
              <LinkIcon href={link.href} icon={<AiOutlineArrowRight />}>
                Buy now
              </LinkIcon>
            </div>
            <img
              className={styles.image}
              src={image as string}
              alt="Image alt"
              ref={imageRef}
            />
          </>
        </Grid>
      </GridWrap>
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
