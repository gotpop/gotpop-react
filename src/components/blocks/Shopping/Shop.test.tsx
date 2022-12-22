import { afterAll, afterEach, beforeAll, expect, test } from 'vitest'
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
import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const posts = [
  { id: 1, name: 'HTML & JS22', price: 10.99, url: '/books.png' },
  { id: 2, name: 'Stunning CSS', price: 19.99, url: '/html.png' },
  { id: 3, name: 'Keyboard', price: 120, url: '/keyboard.png' },
  { id: 4, name: 'MacBook Pro', price: 1200, url: '/mac.png' }
]

export const restHandlers = [
  rest.get('https://gotpop-simple-server.up.railway.app', (req, res, ctx) => {
    console.log('req :', req)
    return res(ctx.status(200), ctx.json(posts))
  })
]
const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

const URL = 'https://gotpop-simple-server.up.railway.app'

test('loads and displays greeting', async () => {
  render(
    <ShoppingCartProvider>
      <MenuProvider>
        <Shop url={URL} />
      </MenuProvider>
    </ShoppingCartProvider>
  )

  // screen.debug()

  // await waitFor(() => {
  //   // expect(screen.getByText()).toBeTruthy()
  //   expect(screen.getByText('HTML & JS22')).toBeDefined()
  //   // screen.debug()
  //   // posts.forEach((post) => {
  //   //   // expect(screen.getByRole('heading', { name: post.title, level: 2 })).toBeDefined()
  //   //   expect(screen.getByText(post.name)).toBeDefined()
  //   // })
  // })
})
