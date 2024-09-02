import { render } from '@testing-library/react-native'
import MerchantCard from '../MerchCard'

const order1 = {
  id: '1',
  merchantName: 'Amazon',
  merchantImage: 'https://res.cloudinary.com/caskchain/image/upload/v1717158058/Sequra/amazon.png',
  merchantLogo: 'https://cdn.iconscout.com/icon/free/png-512/free-amazon-1543560-1306063.png',
  date: '2021-10-01',
  nextDueAmount: 100,
  nextDueDate: '2021-11-01',
  status: 'pending',
  reference: '123456789',
  price: 100,
  numberOfArticles: 5,
  shippedArticles: 2,
}

describe('<MerchantCard />', () => {
  test('Text renders correctly on MerchantCard', () => {
    const screen = render(<MerchantCard data={order1} handlePress={Function.prototype} />)
    screen.getByText('100 €')
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
