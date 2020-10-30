import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../type";
import { AppThunk } from "./store";

const initialState: Order[] = [];

const slice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload)
    }
  }
});

export default slice.reducer;

const {addOrder} = slice.actions;

export const submitOrder = (drinkName: string, burgerName: string): AppThunk => (dispatch, getState) => {
  const { products } = getState();
  const burger = products.burgers.find(b => b.name === burgerName);
  const drink = products.drinks.find(d => d.name === drinkName);

  if (!burger || !drink) return;

  const totalPrice = burger.price + drink.price;
  const order = { burger, drink, totalPrice };
  dispatch(addOrder(order))
}
