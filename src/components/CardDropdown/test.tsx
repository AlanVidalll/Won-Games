import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CardDropdown from '.'

import items from 'components/CartList/mock'

describe('<CardDropdown>', () => {
  it('Should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CardDropdown items={items} total={'R$ 300,00'} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })
  it('Should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CardDropdown items={items} total={'R$ 300,00'} />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(/borderlands 3/i)).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
