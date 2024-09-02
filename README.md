# Welcome to your Expo app 👋

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Requirements

- Node
- XCode
- Android Studio
- eas-cli

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run android
   npm run ios
   ```

3. Run Tests

   ```bash
   npm run test
   ```

4. Bundle the app (Android)

   ```bash
   eas build --profile preview --platform android
   ```

## API

### Orders Endpoint: `POST https://api.mentiragorda.com/graphql`

- Description:

   This endpoint retrieves a list of orders including details such as the merchant, date, due amounts, and the status of the orders.

   ```graphql
   {
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
   ```

- Example Response:

   ```json
   {
      "data": {
         "orders": [
            {
            "id": "1",
            "merchantImage": "https://res.cloudinary.com/etc/amazon.png",
            "merchantName": "Amazon",
            "merchantLogo": "https://cdn.iconscout.com/etc.png",
            "date": "2021-10-01",
            "nextDueAmount": 100,
            "nextDueDate": "2021-11-01",
            "status": "completed",
            "reference": "123456789",
            "price": 100,
            "numberOfArticles": 5,
            "shippedArticles": 2
            }
         ]
      }
   }
   ```

### Pay Order Endpoint: `POST https://api.mentiragorda.com/graphql`

- Description:

   This endpoint pays for an order of the given id.

   ```graphql
   mutation {
      payOrder(orderId: "1") {
         id
         merchantName
         status
         nextDueAmount
         nextDueDate
      }
   }
   ```

### Reset Orders Endpoint: `POST https://api.mentiragorda.com/graphql`

- Description:

   This endpoint resets the status of orders to initial state (meant for dev).

   ```graphql
   mutation {
      resetOrders {
         id
         merchantName
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
   ```
