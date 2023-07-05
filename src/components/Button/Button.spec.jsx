import { render, screen } from '@testing-library/react'
import { Button } from '.'
import userEvent from '@testing-library/user-event'


describe('<Button />', () => {
  test('should render the button with the text', () => {
    render(<Button text="Load more" />)
    const button = screen.getByRole('button', { name: /load more/i })

    expect(button).toBeInTheDocument()
  })

  test('should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text="Load more" onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })

    userEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(1)

  })

  test('should be disabled when disabled is true', () => {
    render(<Button text="Load more" disabled={true} />)
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeDisabled()
  })

  test('should be enabled when disabled is false', () => {
    const fn = jest.fn()
    render(<Button text="Load more" disabled={false} onClick={fn} />)
    const button = screen.getByRole('button', { name: /load more/i })
    expect(button).toBeEnabled()
  })

  test('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />)
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
  })
})