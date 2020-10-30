import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../type";

type Props = {
  goods: {
    burgers: Product[];
    drinks: Product[];
  };
  test?: {
    [key: string]: any;
  };
  onSubmitForm: (arg: any) => void;
};

export const OrderFormView: FC<Props> = ({ goods, onSubmitForm }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(onSubmitForm);

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Make an order</legend>
        <label htmlFor="burgers">Burgers</label>
        <select ref={register} id="burgers" name="burgers">
          {goods.burgers.map((product) => (
            <option key={product.name} value={product.name}>
              {product.displayName} - ${product.price}
            </option>
          ))}
        </select>
        <label htmlFor="drinks">Drinks</label>
        <select ref={register} id="drinks" name="drinks">
          {goods.drinks.map((product) => (
            <option key={product.name} value={product.name}>
              {product.displayName} - ${product.price}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};
