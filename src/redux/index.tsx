import React from "react";
import { Provider } from "react-redux";
import { OrderList } from "./OrderList";
import { OrderForm } from "./OrderForm";
import { store } from "./store";

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      <OrderList />
      <OrderForm />
    </Provider>
  );
};
