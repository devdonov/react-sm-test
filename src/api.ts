import { Product } from "./type";

export const getDrinks = async (): Promise<Product[]> => [
  { name: "cola", displayName: "Cola", price: 3 },
  { name: "water", displayName: "Water", price: 2 },
  { name: "juice", displayName: "Juice", price: 7 },
]

export const getBurgers = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "beef", displayName: "Beef Burger", price: 7 },
        { name: "cheese", displayName: "Cheese Burger", price: 13 },
        { name: "classic", displayName: "Classic Burger", price: 9 },
      ])
    }, 1500)
  })
}

export const getDrinksSync = (): Product[] => [
  { name: "cola", displayName: "Cola", price: 3 },
  { name: "water", displayName: "Water", price: 2 },
  { name: "juice", displayName: "Juice", price: 7 },
]

export const getBurgersSync = (): Product[] => [
  { name: "beef", displayName: "Beef Burger", price: 7 },
  { name: "cheese", displayName: "Cheese Burger", price: 13 },
  { name: "classic", displayName: "Classic Burger", price: 9 },
]