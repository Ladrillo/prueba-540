import { useRouter } from 'expo-router'
import OrdersContainer from '@/containers/OrdersContainer'
import OrdersList from '@/components/OrdersList'

/**
 * OrdersScreen component renders the screen that displays a list of orders.
 *
 * This component uses the `OrdersContainer` to provide the necessary data
 * (orders) to the `OrdersList` component. The `goToOrderDetails` function is
 * passed down to handle navigation to a detailed view of a specific order.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the orders screen.
 *
 * @example
 * // Basic usage of OrdersScreen
 * <OrdersScreen />
 */
const OrdersScreen = () => {
  const router = useRouter()
  const goToOrderDetails = (orderId: string) => {
    router.push(`/orders/${orderId}`)
  }
  return (
    <OrdersContainer>
      <OrdersList goToOrderDetails={goToOrderDetails} />
    </OrdersContainer>
  )
}

export default OrdersScreen
