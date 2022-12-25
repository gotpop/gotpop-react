/* eslint-disable import/export */

import { MenuProvider } from '@context/MenuContext'
import { ReactElement } from 'react'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'
import { render } from '@testing-library/react'

type Props = {
  children: ReactElement
}

const AllTheProviders = ({ children }: Props) => {
  return (
    <ShoppingCartProvider>
      <MenuProvider>{children}</MenuProvider>
    </ShoppingCartProvider>
  )
}

const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: AllTheProviders })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

// override render export
export { customRender as render }
