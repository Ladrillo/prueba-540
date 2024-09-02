import { render, waitFor } from '@testing-library/react-native'
import { ApolloProvider } from '@apollo/client'
import client from '@/apollo/client'
import OrdersScreen from '../index'

describe('<OrdersScreen />', () => {
  let screen: any
  beforeEach(() => {
    screen = render(
      <ApolloProvider client={client}>
        <OrdersScreen />
      </ApolloProvider>
    )
  })
  test('Text renders correctly on OrdersScreen', async () => {
    await waitFor(() => {
      screen.getByText('Amazon')
      screen.getByText('Ebay')
      screen.getByText('Costco')
      // screen.debug()
    })
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
