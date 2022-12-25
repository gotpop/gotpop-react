import { describe, expect, it } from 'vitest'
import {
  render,
  screen,
  waitFor,
} from '../../../utils/test-utils'

import Shop from './index'
import { products } from '../../../mocks/handlers'

const URL = 'https://gotpop-simple-server.up.railway.app'

describe('Shopping area', () => {
  it('loads and displays products', async () => {
    render(<Shop url={URL} />)

    await waitFor(() => {
      const element = screen.queryByTestId('product')
      expect(element).toBeDefined()
    })

    expect(
      screen.getByRole('heading', { name: 'Html & CSS', level: 3 })
    ).toBeDefined()

    await waitFor(() => {
      products.forEach(product => {
        expect(
          screen.getByRole('heading', { name: product.name, level: 3 })
        ).toBeDefined()
      })
    })
  })
})
