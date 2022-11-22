import { AiFillHome } from 'react-icons/ai'
import LinkIcon from '@components/ui/LinkIcon'

export function Page404() {
  return (
    <>
      <h2>Page not found!</h2>
      <LinkIcon href="/" icon={<AiFillHome />}>Go back to homepage</LinkIcon>
    </>
  )
}
