import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Shopping from '@blocks/Shopping'

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

// const URL = 'https://gotpop-api.vercel.app/api'
const URL = 'https://gotpop-simple-server.up.railway.app'

export function Shop() {

  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        <Shopping url={URL} />

      </>
    </LayoutStandard>
  )
}
