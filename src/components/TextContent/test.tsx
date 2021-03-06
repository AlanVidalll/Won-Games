import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextContent from '.'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent>', () => {
  it('Should render the title and content ', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /Description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })

  it('Should render without title ', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /Description/i })
    ).not.toBeInTheDocument()
  })
  it('Should render the title and content ', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /Description/i
    }).parentElement // here get o parentElemennt

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })

    expect(wrapper).toHaveStyleRule(
      'color',
      '#030517',

      {
        media: '(min-width: 768px)'
      }
    )
    expect(wrapper).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
