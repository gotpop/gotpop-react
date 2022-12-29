import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Drawer } from '@ui/Drawer'

const open = 'var(--local-drawer-open)'
const closed = 'var(--local-drawer-closed)'

describe('Drawer', () => {
  it('should render', () => {
    render(
      <Drawer isOpen={true}>
        <h3>Drawer</h3>
      </Drawer>
    )

    expect(
      screen.getByRole('heading', { name: 'Drawer', level: 3 })
    ).toBeDefined()
  })

  it('should render the open css variable', () => {
    render(
      <Drawer isOpen={true}>
        <h3>Drawer</h3>
      </Drawer>
    )

    const element = screen.getByTestId('drawer')
    const state = element.style.getPropertyValue('--local-drawer-state')

    expect(state).toEqual(open)
  })

  it('should render the closed css variable', () => {
    render(
      <Drawer isOpen={false}>
        <h3>Drawer</h3>
      </Drawer>
    )

    const element = screen.getByTestId('drawer')
    const state = element.style.getPropertyValue('--local-drawer-state')

    expect(state).toEqual(closed)
  })
})
