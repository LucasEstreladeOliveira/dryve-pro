import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('should render button correctly', () => {
    render(<Button label="test button" size="small" />)

    const button = screen.queryByTestId('button').children[0]

    expect(button.textContent).toBe('test button')
    expect(button.classList).toContain('MuiButton-containedSizeSmall')
  })
})