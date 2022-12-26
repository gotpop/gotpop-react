import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@utilities/test-utils'

import { CartItem } from './index'
import { data } from './CartItem.data'

describe('Shopping area', () => {
  it('loads and displays products', async () => {
    render(<CartItem id={data.id} quantity={data.quantity} />)

    // await waitFor(() => {
    //   const element = screen.queryByTestId('product')
    //   expect(element).toBeDefined()
    // })

    // await waitFor(() => {
    //   products.forEach(product => {
    //     expect(
    //       screen.getByRole('heading', { name: product.name, level: 3 })
    //     ).toBeDefined()
    //   })
    // })
  })
})
