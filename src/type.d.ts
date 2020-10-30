export type Product = {
  name: string,
  displayName: string,
  price: number
}

export type Order = {
  burger: Product;
  drink: Product;
  totalPrice: number;
}