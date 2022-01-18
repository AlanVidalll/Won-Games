import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import ProfileMenu from '.'

describe('<ProfileMenu>', () => {
  it('Should render the links ', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i }).getAttribute('href')
    ).toEqual('/profile/me')

    expect(
      screen.getByRole('link', { name: /my cards/i }).getAttribute('href')
    ).toEqual('/profile/cards')

    expect(
      screen.getByRole('link', { name: /my orders/i }).getAttribute('href')
    ).toEqual('/profile/orders')

    expect(
      screen.getByRole('link', { name: /sign out/i }).getAttribute('href')
    ).toEqual('/logout')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render them menu with an active link define', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA'
    })
  })
})
