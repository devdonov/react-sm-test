import React from "react";
import { useSelector } from "react-redux";
import { OrderListView } from "../view/OrdersList.view";
import { RootState } from "./store";

export const OrderList = () => {
  const orders = useSelector<RootState, RootState["orders"]>(
    (state) => state.orders
  );
  return <OrderListView orders={orders} />;
};
