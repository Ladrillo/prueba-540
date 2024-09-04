import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { FontAwesome } from '@expo/vector-icons'
import PayButton from '@/containers/PayButtonContainer'
import { Order } from '@/types/order'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  merchantInfo: {
    position: 'absolute',
    top: 80,
    left: 15,
  },
  merchantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  dateAndReference: {
    flexDirection: 'column',
    marginTop: 5,
  },
  date: {
    color: '#fff',
    marginBottom: 5,
  },
  reference: {
    color: '#fff',
    fontSize: 12,
  },
  paymentDetailsContainer: {
    padding: 15,
    marginTop: 10,
  },
  paymentInfoBox: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
  day: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  month: {
    fontSize: 16,
    color: '#000',
  },
  paymentInfoText: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentSubtext: {
    fontSize: 14,
    color: '#7e7e7e',
  },
})

export interface OrderDetails {
  orders: Order[]
  handleBackPress: () => void
  orderId: string
}

const OrderDetails = ({ orders = [], orderId, handleBackPress }: OrderDetails) => {
  const order = orders.find(ord => ord.id == orderId)
  if (!order) {
    return <View style={styles.container}><ThemedText>Oops</ThemedText></View>
  }
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={{ uri: order.merchantImage }} style={styles.backgroundImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <FontAwesome name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Merchant Info */}
      <View style={styles.merchantInfo}>
        <ThemedText style={styles.merchantName}>{order.merchantName}</ThemedText>
        <View style={styles.dateAndReference}>
          <ThemedText style={styles.date}>
            {new Date(order.nextDueDate).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </ThemedText>
          <ThemedText style={styles.reference}>ref. {order.reference}</ThemedText>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetailsContainer}>
        <ThemedText type="subtitle">Estado del Pago</ThemedText>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {
            order.status == 'pending'
              ? (
                <>
                  <View style={styles.paymentInfoBox}>
                    <ThemedText style={styles.day}>{new Date(order.nextDueDate).getDate()}</ThemedText>
                    <ThemedText style={styles.month}>
                      {new Date(order.nextDueDate).toLocaleDateString('es-ES', { month: 'long' })}
                    </ThemedText>
                  </View>
                  <View style={styles.paymentInfoText}>
                    <ThemedText style={styles.paymentLabel}>Cobro programado</ThemedText>
                    <ThemedText style={styles.paymentSubtext}>
                      Recibirás la compra pronto
                    </ThemedText>
                  </View>
                </>
              )
              : (
                <ThemedText style={styles.paymentSubtext}>
                  Pago completado
                </ThemedText>
              )
          }
        </View>
        {
          order.status == 'pending' && (
            <>
              <ThemedText type="subtitle">Total: {order.nextDueAmount} €</ThemedText>
              <PayButton orderId={orderId} />
            </>
          )
        }
      </View>
    </View>
  )
}

export default OrderDetails
