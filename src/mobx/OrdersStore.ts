import { action, makeObservable, observable } from "mobx";
import { Order } from "../type";
import { productStore } from "./ProductStore";

export class OrdersStore {
  @observable
  orders: Order[] = []

  constructor() {
    makeObservable(this);
  }

  @action
  addOrder(drinkName: string, burgerName: string) {
    const { burgers, drinks } = productStore;
    const burger = burgers.find(b => b.name === burgerName);
    const drink = drinks.find(d => d.name === drinkName);
    if (!burger || !drink) return;

    this.orders.push({
      burger,
      drink,
      totalPrice: burger.price + drink.price
    })
  }
}