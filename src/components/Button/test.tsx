import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button>', () => {
  it('Should render the medium button by default ', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem' // toda propriedade que tenha hifen deve ser colocada entre aspas
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the small button is passed ', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem' // toda propriedade que tenha hifen deve ser colocada entre aspas
    })
  })

  it('Should render the large button is passed ', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem' // toda propriedade que tenha hifen deve ser colocada entre aspas
    })
  })

  it('Should render the fullWidth button is passed ', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('Should render an icon version ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Should render Button as a link ', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )
    debug(container) // Imprimi no console o html de como ele é.
    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
