import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple  description'
}
describe('<Empty>', () => {
  it('Should render correctly ', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a counch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /A simple title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/A simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /go back to store/i
      })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('Should not render link when hasLink is not passed ', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', {
        name: /go back to store/i
      })
    ).not.toBeInTheDocument()
  })
})
