import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails>', () => {
  it('Should render the blocks ', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /Release Date/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Platforms/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Publisher/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Rating/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Genres/i
      })
    ).toBeInTheDocument()
  })

  it('Should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('Should render the format date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('Should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('Should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('Should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('Should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Walktrough/i)).toBeInTheDocument()
  })

  it('Should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
