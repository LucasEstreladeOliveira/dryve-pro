import { render, screen } from '@testing-library/react'
import Address from '../Address'

describe('Address', () => {
  it('should render input default value correctly', () => {
    const user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }

    render(<Address user={user} />)

    const value = screen.queryByTestId('cep').children[0].children[0].children[1].children[0].defaultValue

    expect(value).toBe(user.address.zipcode)
  })

})