import { beforeAll, describe, expect, it } from 'vitest'
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved
} from '@utilities/test-utils'

import { CartItem } from './index'
import { data } from './CartItem.data'

beforeAll(() => {
  render(<CartItem id={data.id} quantity={data.quantity} />)
})

describe('Cart item', () => {
  it('loads and displays cart items', async () => {
    expect(
      screen.getByRole('heading', { name: 'HTML & JS x 5', level: 3 })
    ).toBeDefined()
  })

  it('removes item on click', async () => {
    render(<CartItem id={data.id} quantity={data.quantity} />)

    userEvent.click(screen.getByText('Remove'))

    const TEXT = 'HTML & JS'
    const headerText = screen.getByText(TEXT)

    waitForElementToBeRemoved(headerText).then(() => {
      const title = screen.queryByText(TEXT)

      expect(title).toBeNull()
    })
  })
})
