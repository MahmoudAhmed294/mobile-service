import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderResponse } from "../api/types";
import { RootState } from "./store";

interface  OrdersState {
  orders: OrderResponse[],
  count:number 
}
const initialState:OrdersState = {
  orders:[],
  count:0
  };

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state , action:PayloadAction<OrderResponse | any>) => {
      state.orders =action.payload.rows
      state.count =action.payload.count
    },
    deleteOrderFromState: (state, action:PayloadAction<number>) => {
      state.orders = state.orders.filter((value)=>(
        value.id !== action.payload
      ))
    }
  },
});

export const { setOrder ,deleteOrderFromState } = orderSlice.actions;
export const getOrders =(state: RootState) => state.orders.orders
export const getCount =(state: RootState) => state.orders.count
export default orderSlice.reducer;
