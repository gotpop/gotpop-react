// import { expect, it } from 'vitest'
// import {
//   fireEvent,
//   prettyDOM,
//   render,
//   screen,
//   waitFor,
//   waitForElementToBeRemoved
// } from '@testing-library/react'

// import Liam from './Liam'
// import {logRoles} from '@testing-library/dom'
// import { posts } from '../mocks/handlers'
// import userEvent from '@testing-library/user-event'

import { expect, it } from 'vitest'
// import { ApolloProvider } from '@apollo/client'
// import { client } from './ApolloClient'
import {
  render,
  screen,
  userEvent,
  waitFor,
  waitForElementToBeRemoved
} from '../utils/test-utils'

import Liam from './Liam'
// import App from './App'
import { posts } from '../mocks/handlers'

// import { posts } from './mocks/handlers'

// import { userEvent } from '../utils/test-utils'

it('Should return posts when clicking fetch button', async () => {
  render(<Liam />)

  expect(
    screen.getByRole('heading', {
      name: 'MSW Testing Library Example',
      level: 1
    })
  ).toBeDefined()

  const element = screen.queryByTestId('custom-loading')
  const element2 = screen.queryByRole('loading')

  userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }))

  // await waitForElementToBeRemoved(() => screen.queryByRole('loading'))
  
  // await waitFor(() => {
  //   expect(element).not.toBeDefined()
  // })

  await waitFor(() => {
    const element = screen.queryByTestId('liam')
    expect(element).toBeDefined()
  })

  expect(
    screen.getByRole('heading', { name: 'rich first post title', level: 2 })
  ).toBeDefined()

  posts.forEach(post => {
    expect(
      screen.getByRole('heading', { name: post.title, level: 2 })
    ).toBeDefined()
    expect(screen.getByText(post.body)).toBeDefined()
  })
})
