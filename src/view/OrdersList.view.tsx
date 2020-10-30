import React, { FC } from "react";
import { Order } from "../type";

type Props = {
  orders: Order[]
}

export const OrderListView: FC<Props> = ({ orders }) => {
  if (!orders.length) {
    return <p>No orders</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Burger</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, ind) => (
            <tr key={ind}>
              <td>
                {order.drink.name}
              </td>
              <td>
                {order.burger.name}
              </td>
              <td>
                {order.totalPrice}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}