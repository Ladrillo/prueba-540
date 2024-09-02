import OrdersContainer from '@/containers/OrdersContainer'
import { useLocalSearchParams, useRouter } from 'expo-router'
import OrderDetails from '@/components/OrderDetails'

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
