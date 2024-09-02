import React from 'react'
import { Button, Alert } from 'react-native'
import { useMutation } from '@apollo/client'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { PAY_ORDER } from '@/apollo/PayMutation'

const PayButton = ({ orderId }) => {
  const [payOrder, { loading, error }] = useMutation(PAY_ORDER, {
    variables: { orderId },
    refetchQueries: ['GetOrders'],
    onCompleted: (data) => {
      Alert.alert('Payment Successful', `Order ${data.payOrder.id} is now ${data.payOrder.status}`)
    },
  })

  if (loading) return <ThemedText>Processing Payment...</ThemedText>
  if (error) return <ThemedText>Error: {error.message}</ThemedText>

  return (
    <ThemedView>
      <Button title="Pay Now" onPress={() => payOrder()} />
    </ThemedView>
  )
}

export default PayButton
