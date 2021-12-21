import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Gallery from '.'

import mockItems from './mock'

describe('<Gallery>', () => {
  it('Should render thumbnails as buttons ', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('Should handle open modal ', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // select modal
    const modal = screen.getByLabelText('modal')

    // check modal close
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    // check modal is open on click
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('Should open modal with selected image ', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // clicked thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // I hope the thumbnail image opens
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    // get parent to parent
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('Should handle close modal whwn overlay or button clicked ', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // select modal
    const modal = screen.getByLabelText('modal')

    // check modal is open on click
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    // clicked for close
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('Should handle close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    // select modal
    const modal = screen.getByLabelText('modal')

    // check modal is open on click
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    // clicked for close
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
