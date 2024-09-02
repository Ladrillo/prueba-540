export interface Order {
  id: string
  merchantName: string
  date: string
  nextDueAmount: number
  nextDueDate: string
  status: "pending" | "completed"
  reference: string
  price: number
  numberOfArticles: number
  shippedArticles: number
  merchantImage: string
  merchantLogo: string
}
