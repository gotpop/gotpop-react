import { beforeAll, describe, expect, it } from 'vitest'
import { render, screen } from '@utilities/test-utils'

import Footer from './index'

const message = `Copyright © ${new Date().getFullYear()}. All rights reserved.`

beforeAll(() => {
  render(<Footer />)
})

describe('Footer', () => {
  it('loads and displays footer', async () => {
    expect(screen.getByText(message)).toBeDefined()
  })
})
