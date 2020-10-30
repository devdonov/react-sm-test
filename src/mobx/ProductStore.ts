import { action, makeObservable, observable, runInAction } from "mobx";
import { Product } from "../type";
import { getBurgers, getDrinks } from "../api";

export class ProductStore {
  @observable
  drinks: Product[] = [];
  @observable
  burgers: Product[] = [];
  @observable
  isLoading = true;

  constructor() {
    makeObservable(this)
  }

  @action
  fetchProducts = async () => {
    const drinks = await getDrinks();
    const burgers = await getBurgers();

    runInAction(() => {
      this.isLoading = false;
      this.drinks = drinks;
      this.burgers = burgers;
    });
  }
}

export const productStore = new ProductStore();