import React from 'react'
import { OrderForm } from './OrderForm'
import { OrderList } from './OrderList'
import { StoreProvider } from './StoreProvider'

export const MobxApp = () => {
  return (
    <StoreProvider>
      <OrderList />
      <OrderForm />
    </StoreProvider>
  )
}