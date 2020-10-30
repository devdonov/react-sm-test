import { toJS } from "mobx";
import { Observer } from "mobx-react-lite";
import React from "react";
import { OrderListView } from "../view/OrdersList.view";
import { useStore } from "./StoreProvider";

export const OrderList = () => {
  const { ordersStore } = useStore();
  return (
    <Observer>
      {() => {
        const { orders } = ordersStore;
        return <OrderListView orders={toJS(orders)} />;
      }}
    </Observer>
  );
};
