import { render } from '@testing-library/react-native'
import MerchCard from '../MerchCard'

const order1 = {
  id: '1',
  merchantName: 'Amazon',
  merchantImage: 'https://res.cloudinary.com/etc.png',
  merchantLogo: 'https://cdn.iconscout.com/etc.png',
  date: '2021-10-01',
  nextDueAmount: 100,
  nextDueDate: '2021-11-01',
  status: 'pending',
  reference: '123456789',
  price: 100,
  numberOfArticles: 5,
  shippedArticles: 2,
}

describe('<MerchCard />', () => {
  test('Text renders correctly on MerchCard', () => {
    const screen = render(
      <MerchCard order={order1} handlePress={Function.prototype} />
    )
    screen.getByText('100 €')
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
