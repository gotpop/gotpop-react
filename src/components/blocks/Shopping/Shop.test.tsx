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
import { posts } from '../../../mocks/handlers'

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
    const element = screen.queryByTestId('liamz')
    expect(element).toBeDefined()
  })
    
  // expect(screen.queryByText('HTML & JS22')).toBeDefined()

  expect(
    screen.getByRole('heading', { name: 'Liam is the best', level: 3 })
  ).toBeDefined()

  // await waitFor(() => {
  //   // expect(screen.getByText()).toBeTruthy()
  //   // screen.debug()
  //   // posts.forEach((post) => {
  //   //   // expect(screen.getByRole('heading', { name: post.title, level: 2 })).toBeDefined()
  //   //   expect(screen.getByText(post.name)).toBeDefined()
  //   // })
  // })
})
