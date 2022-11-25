import { AiFillHome } from 'react-icons/ai'
import LayoutStandard from '@components/layouts/LayoutStandard'
import LinkIcon from '@components/ui/LinkIcon'
import { useEffect } from 'react'

export function Page404() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <LayoutStandard>
      <>
        <h2>Page not found!</h2>
        <LinkIcon href="/" icon={<AiFillHome />}>
          Go back to homepage
        </LinkIcon>
      </>
    </LayoutStandard>
  )
}
