import { expect, it } from 'vitest'
import {
  render,
  screen,
  userEvent,
  waitFor,
  waitForElementToBeRemoved
} from '../../../utils/test-utils'

import { MenuProvider } from '@context/MenuContext'
import Shop from './index'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'
import { products } from '../../../mocks/handlers'

const URL = 'https://gotpop-simple-server.up.railway.app'

it('loads and displays greeting', async () => {
  render(
    <ShoppingCartProvider>
      <MenuProvider>
        <Shop url={URL} />
      </MenuProvider>
    </ShoppingCartProvider>
  )

  await waitFor(() => {
    const element = screen.queryByTestId('product')
    expect(element).toBeDefined()
  })
    
  expect(
    screen.getByRole('heading', { name: 'Html & CSS', level: 3 })
  ).toBeDefined()

  await waitFor(() => {
    products.forEach((product) => {
      expect(
        screen.getByRole('heading', { name: product.name, level: 3 })
      ).toBeDefined()
    })
  })
})
