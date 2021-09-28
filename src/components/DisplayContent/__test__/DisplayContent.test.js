import { render, screen } from '@testing-library/react'
import DisplayContent from '../DisplayContent'

describe('Display content', () => {
  it('should render correctly', () => {

    render(
      <DisplayContent title="Teste title">
        <div>test</div>
      </DisplayContent>
    )

    const wrapper = screen.queryByTestId('wrapper')
    const title = screen.queryByTestId('title')

    expect(title.textContent).toBe('Teste title')
    expect(wrapper.children[2].textContent).toBe('test')
  })
})