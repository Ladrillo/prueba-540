import { gql } from '@apollo/client'

export const PAY_ORDER = gql`
  mutation PayOrder($orderId: ID!) {
    payOrder(orderId: $orderId) {
      id
      merchantName
      status
      nextDueAmount
      nextDueDate
    }
  }
`
