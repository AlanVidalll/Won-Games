import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCardSlider from '.'

describe('<GameCardSlider>', () => {
  it('Should render the heading ', () => {
    const { container } = renderWithTheme(<GameCardSlider />)

    expect(
      screen.getByRole('heading', { name: /GameCardSlider/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
