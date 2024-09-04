import { View, ImageBackground, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { FontAwesome } from '@expo/vector-icons'
import { Order } from '@/types/order'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    margin: 20,
    marginBottom: 0,
  },
  backgroundImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  merchantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  merchantLogoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  merchantLogo: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  merchantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  dateAndArticles: {
    flexDirection: 'row',
    marginTop: 5,
  },
  date: {
    color: '#fff',
    marginRight: 10,
  },
  articles: {
    color: '#fff',
  },
  paymentInfo: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateBox: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 14,
  },
  amountInfo: {
    alignItems: 'flex-end',
  },
  amountLabel: {
    fontSize: 14,
    color: '#7e7e7e',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  completedInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  completedText: {
    fontSize: 14,
    color: '#7e7e7e',
    marginLeft: 10,
    marginBottom: 20,
  },
})

const formatDateLong = date => {
  return new Date(date)
    .toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}
const getMonthLong = date => {
  return new Date(date)
  .toLocaleDateString('es-ES', { month: 'long' })
}

export interface MerchCardProps {
  order: Order
  handlePress: () => void
}

const MerchantCard = ({ order, handlePress }: MerchCardProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>

        {/* Background Image */}
        <ImageBackground source={{ uri: order.merchantImage }} style={styles.backgroundImage}>

          {/* Merchant Info */}
          <View style={styles.merchantInfo}>
            <View>
              <ThemedText style={styles.merchantName}>{order.merchantName}</ThemedText>
              <View style={styles.dateAndArticles}>
                <ThemedText style={styles.date}>{formatDateLong(order.nextDueDate)}
                </ThemedText>
                <ThemedText style={styles.articles}>
                  <FontAwesome name="shopping-bag" size={14} /> {order.numberOfArticles} artículos
                </ThemedText>
              </View>
            </View>
            <View style={styles.merchantLogoContainer}>
              <Image source={{ uri: order.merchantLogo }} style={styles.merchantLogo} />
            </View>
          </View>
        </ImageBackground>

        {/* Payment Info */}
        {order.status === 'pending' && (
          <View style={styles.paymentInfo}>
            <View style={styles.dateBox}>
              <Text style={styles.day}>{new Date(order.nextDueDate).getDate()}</Text>
              <Text style={styles.month}>{getMonthLong(order.nextDueDate)}</Text>
            </View>
            <View style={styles.amountInfo}>
              <ThemedText style={styles.amountLabel}>Cobro de:</ThemedText>
              <ThemedText style={styles.amount}>{order.nextDueAmount} €</ThemedText>
            </View>
          </View>
        )}

        {/* Completed Order Info */}
        {order.status === 'completed' && (
          <View style={styles.completedInfo}>
            {/* <FontAwesome name="check-circle" style={styles.checkmark} /> */}
            <ThemedText style={styles.completedText}>
              Compra completada {formatDateLong(order.date)}
            </ThemedText>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default MerchantCard
