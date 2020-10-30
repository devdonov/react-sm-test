import React, { FC, PropsWithChildren } from "react";
import { OrdersStore } from "./OrdersStore";
import { ProductStore, productStore } from "./ProductStore";

type StoreContextValue = {
  productStore: ProductStore;
  ordersStore: OrdersStore;
};

declare global {
  interface Window {
    ordersStore: any;
  }
}

// const productStore = new ProductStore();
const ordersStore = new OrdersStore();
window.ordersStore = ordersStore;
const StoreContext = React.createContext<StoreContextValue>(
  {} as StoreContextValue
);

export const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreContext.Provider value={{ productStore, ordersStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
