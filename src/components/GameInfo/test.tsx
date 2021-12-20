import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game description',
  price: '210.00'
}

describe('<GameInfo>', () => {
  it('Should render game informations ', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // check for a heading
    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument()

    // check for a description
    expect(screen.getByText(/Game description/i)).toBeInTheDocument()

    // check for a price
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('Should render buttons ', () => {
    renderWithTheme(<GameInfo {...props} />)

    //check button add to card
    expect(
      screen.getByRole('button', { name: /add to card/i })
    ).toBeInTheDocument()

    //check button wish list
    expect(
      screen.getByRole('button', { name: /Wishlist/i })
    ).toBeInTheDocument()
  })
})
