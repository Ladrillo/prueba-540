import React, { ReactElement } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '@/apollo/OrdersQuery'

export interface OrdersContainerProps {
  children: ReactElement
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
})

const OrdersContainer = ({ children }: OrdersContainerProps) => {
  const { loading, error, data } = useQuery(GET_ORDERS)
  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    )
  }
  if (error) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText style={styles.errorText}>Error: {error.message}</ThemedText>
      </ThemedView>
    )
  }
  return (
    <ThemedView style={styles.container}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { orders: data.orders })
      })}
    </ThemedView>
  )
}

export default OrdersContainer
