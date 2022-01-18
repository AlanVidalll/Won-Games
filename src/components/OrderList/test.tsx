import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import OrderList from '.'

import mockItems from './mock'

jest.mock('../../components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('../../components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrderList>', () => {
  it('Should render the Game Items ', () => {
    renderWithTheme(<OrderList items={mockItems} />)

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('Should render empty state ', () => {
    renderWithTheme(<OrderList items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })

  it('Should render empty state ', () => {
    renderWithTheme(<OrderList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
