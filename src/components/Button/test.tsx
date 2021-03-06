import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button>', () => {
  it('Should render the medium button by default ', () => {
    renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem' // toda propriedade que tenha hifen deve ser colocada entre aspas
    })
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

  it('Should render a minimal version ', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy Now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('Should render Button as a link ', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )
    debug(container) // Imprimi no console o html de como ele ??.
    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
