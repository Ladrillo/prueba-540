# Prueba 540 👋

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Video Walkthrough

[Video on YouTube](https://youtu.be/sHhFERPXLSQ)

## Design Files

[Design files on Figma](https://www.figma.com/design/O3OAwL9U95aJVhra4XOooH/Challenge-FrontEnd)

## Requirements for Dev

- Node
- XCode
- Android Studio
- eas-cli

## Get started

1. Install dependencies and start

   ```bash
   npm install
   npm run android
   npm run ios
   ```

2. Run Tests

   ```bash
   npm run test
   ```

3. Bundle the app

   ```bash
   eas build --profile preview --platform android
   eas build --profile preview --platform ios
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
