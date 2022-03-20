import { fireEvent, screen } from '@testing-library/react'
import Menu from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Menu>', () => {
  it('Should render the menu ', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  })
  it('Should handle open/close mobile menu ', () => {
    renderWithTheme(<Menu />)
    //Descrever os passos lógicos antea de implementar

    //1- Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    //2- Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //3- Clicar no botão de abrir menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i)) //fireEvenet.click simula um click no elemento selecionado
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //4- Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('Should show register box when logged out ', () => {
    renderWithTheme(<Menu />)
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
  })
  it('Should show my account and wishlist  when logged in ', () => {
    renderWithTheme(<Menu username="Alan" />)
    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()

    //getByText => espera que o elemento exista
    //queryByText => o elemento pode existir ou não ele não quebra o teste difetemente do getByText
  })
})
