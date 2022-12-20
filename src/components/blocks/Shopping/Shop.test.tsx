// // import API mocking utilities from Mock Service Worker

// import '@testing-library/jest-dom'

// import {fireEvent, prettyDOM, render, screen, waitFor} from '@testing-library/react'

// import {rest} from 'msw'
// import {setupServer} from 'msw/node'

// // import react-testing methods

// const URL = 'https://gotpop-api.vercel.app/api'
// const data = [
//   { id: 1, name: 'Liam', price: 10.99, url: '/books.png' }
// ]
// // add custom jest matchers from jest-dom

// // declare which API requests to mock
// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get(URL, (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({greeting: 'hello there'}))
//   }),
// )

// // establish API mocking before all tests
// beforeAll(() => {
//   // hello

//   return  server.listen()
// })
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers())
// // clean up once the tests are done
// afterAll(() => server.close())

// // ...

// test('handles server error', async () => {

//   server.use(
//     // override the initial "GET /greeting" request handler
//     // to return a 500 Server Error
//     rest.get(URL, (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )
// })

import '@testing-library/jest-dom'
import '@testing-library/jest-dom'

import {
  fireEvent,
  getByText,
  prettyDOM,
  render,
  screen,
  waitFor
} from '@testing-library/react'

import { MenuProvider } from '@context/MenuContext'
import React from 'react'
import Shop from './index'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// const URL = 'https://gotpop-api.vercel.app/api'
// const URL = 'localhost:3000/api/'
const URL = 'https://gotpop-simple-server.up.railway.app'
// const data = [{ id: 1, name: 'Liam', price: 10.99, url: '/books.png' }]
const dataLiam = [
  { id: 1, name: 'HTML & JS', price: 10.99, url: '/books.png' },
  // { id: 2, name: 'Stunning CSS', price: 19.99, url: '/html.png' },
  // { id: 3, name: 'Keyboard', price: 120, url: '/keyboard.png' },
  // { id: 4, name: 'MacBook Pro', price: 1200, url: '/mac.png' }
]

const server = setupServer(
  rest.get('https://gotpop-simple-server.up.railway.app', (req, res, ctx) => {
    // console.log('req, res, ctx :', req, res)

    return res(ctx.status(200), ctx.json(dataLiam))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(
    <ShoppingCartProvider>
      <MenuProvider>
        <Shop url={URL} />
      </MenuProvider>
    </ShoppingCartProvider>
  )

  screen.debug()
  
  await waitFor(() => {
    expect(screen.getByText('HTML & JS')).toBeInTheDocument()
    screen.debug()
  })
})
