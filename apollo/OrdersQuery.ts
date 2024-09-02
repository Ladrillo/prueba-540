import { gql } from '@apollo/client'

export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      merchantImage
      merchantName
      merchantLogo
      date
      nextDueAmount
      nextDueDate
      status
      reference
      price
      numberOfArticles
      shippedArticles
    }
  }
`
