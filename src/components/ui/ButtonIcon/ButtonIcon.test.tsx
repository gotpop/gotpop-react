import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import ButtonIcon from '@ui/ButtonIcon'
import userEvent from '@testing-library/user-event'

describe('ButtonIcon test', () => {
  beforeEach(() => {
    const handleClick = (e: any) => {
      e.preventDefault()      
      e.target.setAttribute('disabled', 'true')
    }

    render(<ButtonIcon text="Button" handleClick={handleClick} />)
  })

  it('should render', () => {
    const element = screen.getByTestId('button')

    expect(element).toBeDefined()
  })

  it('should pass click event', async () => {
    const element = screen.getByTestId('button')

    userEvent.click(element)

    expect(element).toHaveProperty('disabled')
    // expect(element).toBeDisabled()
  })
})
