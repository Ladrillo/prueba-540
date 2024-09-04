import OrdersContainer from '@/containers/OrdersContainer'
import { useLocalSearchParams, useRouter } from 'expo-router'
import OrderDetails from '@/components/OrderDetails'

/**
 * Details component renders the order details screen.
 *
 * This component retrieves the `orderId` from the local search parameters and uses
 * it to display the order details through the `OrderDetails` component. It also
 * provides a back navigation handler to return to the orders list screen.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the order details screen.
 *
 * @example
 * // Basic usage of the Details component
 * <Details />
 */
const Details = () => {
  const { orderId } = useLocalSearchParams()
  const router = useRouter()

  const handleBackPress = () => {
    router.replace('/orders')
  }

  return (
    <OrdersContainer>
      <OrderDetails orderId={orderId} handleBackPress={handleBackPress} />
    </OrdersContainer>
  )
}

export default Details
