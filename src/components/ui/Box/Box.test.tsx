import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Box from '@ui/Box'

describe('Box test', () => {
  test('should show title all the time', () => {
    render(
      <Box>
        <h4>Content</h4>
      </Box>
    )

    expect(screen.getByText(/Content/i)).toBeDefined()
  })
})
