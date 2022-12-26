import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@utilities/test-utils'

import Shop from './index'
import { products } from '@mocks/handlers'

const URL = 'https://gotpop-simple-server.up.railway.app'

describe('Shopping area', () => {
  it('loads and displays products', async () => {
    render(<Shop url={URL} />)

    await waitFor(() => {
      const element = screen.queryByTestId('product')
      expect(element).toBeDefined()
    })

    await waitFor(() => {
      products.forEach(product => {
        expect(
          screen.getByRole('heading', { name: product.name, level: 3 })
        ).toBeDefined()
      })
    })
  })
})
