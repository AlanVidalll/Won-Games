import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Base from '.'

jest.mock('../../components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

// Mocking component Footer
jest.mock('../../components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base>', () => {
  it('Should render menu, footer and children ', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    // testing Menu component Mock
    expect(screen.getByTestId(/Mock Menu/i)).toBeInTheDocument()

    // testing Footer component Mock
    expect(screen.getByTestId(/Mock Footer/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
