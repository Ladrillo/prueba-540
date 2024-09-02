import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'
import MerchantCard from '@/components/MerchCard'
import { ThemedText } from '@/components/ThemedText'
import { Order } from '@/types/order'

export interface OrdersListProps {
  orders: Order[]
  goToOrderDetails: (id: string) => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 15,
    marginTop: 40,
  },
  scrollViewContent: {
    paddingBottom: 80,
  }
})

const OrdersList: React.FC<OrdersListProps> = ({ orders = [], goToOrderDetails }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={styles.title} type="title">Orders</ThemedText>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {
          orders.length
            ? orders.map((ord: Order) => {
              return (
                <MerchantCard
                  key={ord.id}
                  order={ord}
                  handlePress={() => goToOrderDetails(ord.id)}
                />
              )
            })
            : <Text>No orders here...</Text>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrdersList
