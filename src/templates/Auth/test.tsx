import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Auth from '.'

describe('<Auth>', () => {
  it('Should render all components and children ', () => {
    renderWithTheme(
      <Auth title="Sign-in">
        <input type="text" />
      </Auth>
    )
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    // render all logos

    expect(
      screen.getByRole('heading', { name: /Sign-in/i })
    ).toBeInTheDocument()
    // Render Title

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()
    // render title important of banner

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()
    //Render Subtitle

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // Render input "children"
  })
})
