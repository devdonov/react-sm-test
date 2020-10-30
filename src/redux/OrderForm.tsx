import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderFormView } from "../view/OrderForm.view";
import { submitOrder } from "./OrderSlice";
import { fetchProducts } from "./ProductSlice";
import { RootState } from "./store";

export const OrderForm = () => {
  const products = useSelector<RootState, RootState["products"]>(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const { isLoading, burgers, drinks } = products;
  const addOrder = useCallback((data: { [key: string]: string }) => {
    dispatch(submitOrder(data.drinks, data.burgers));
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <>Loading ...</>;
  }

  return <OrderFormView goods={{ burgers, drinks }} onSubmitForm={addOrder} />;
};
