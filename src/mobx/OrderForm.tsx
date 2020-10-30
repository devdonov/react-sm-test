import React, { useEffect, useCallback } from "react";
import { Observer } from "mobx-react-lite";
import { OrderFormView } from "../view/OrderForm.view";
import { useStore } from "./StoreProvider";
import { toJS } from "mobx";

export const OrderForm = () => {
  const { productStore, ordersStore } = useStore();
  const { fetchProducts } = productStore;

  const addOrder = useCallback((data: { [key: string]: string }) => {
    console.log(data);
    ordersStore.addOrder(data.drinks, data.burgers);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Observer>
      {() => {
        const { isLoading, burgers, drinks } = productStore;
        if (isLoading) return <>Loading ...</>;

        return (
          <OrderFormView
            onSubmitForm={addOrder}
            goods={{ burgers: toJS(burgers), drinks: toJS(drinks) }}
          />
        );
      }}
    </Observer>
  );
};
