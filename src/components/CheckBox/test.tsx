import { renderWithTheme } from 'utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'

describe('<CheckBox>', () => {
  it('Should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)

    // Pegando input a partir do papel dele.
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // Pegando o input a partir da label associada.
    expect(screen.getByLabelText(/Checkbox label/i)).toBeInTheDocument()

    // Pegando a label através do texto da mesma.
    expect(screen.getByText(/Checkbox label/i)).toHaveAttribute('for', 'check')
  })
  it('Should render without label', () => {
    renderWithTheme(<Checkbox />)

    // Sempre que testar algo que não queira encontrar, use o 'query'.
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('Should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/Checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render with white label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)

    expect(screen.getByText(/Checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(true)
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })
  it('should be ', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()
  })
})
