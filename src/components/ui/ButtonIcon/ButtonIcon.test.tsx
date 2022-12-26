import { beforeEach, describe, expect, test } from 'vitest'
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

  test('should render', () => {
    const element = screen.getByTestId('button')

    expect(element).toBeDefined()
  })

  // test('should pass click event', async () => {
  //   const element = screen.getByTestId('button')
  //   const user = userEvent.setup()

  //   await user.click(element)

  //   expect(element).toHaveProperty('disabled')
  // })
})
