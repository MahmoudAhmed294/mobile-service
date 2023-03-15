import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OrderBillResponse, OrderDetails, OrderResponse } from "./types";

export const orderApi = createApi({
  reducerPath: "order",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    order: builder.mutation<OrderResponse[], string>({
      query: (payload) => ({
        url: `/orders?${payload}`,
        method: "get",
      }),
    }),
    orderOnload: builder.query<OrderResponse[], any>({
      query: (payload) => ({
        url: `/getOrder/${payload}`,
        method: "get",
      }),
    }),
    deleteOrder: builder.mutation<string, any>({
      query: (payload) => ({
        url: `/orders/${payload.id}`,
        method: "delete",
        body: payload,
      }),
    }),
    addOrder: builder.query<OrderBillResponse, OrderDetails>({
      query: (payload) => ({
        url: `/orders`,
        method: "post",
        body: payload,
      }),
    }),
    updateOrder: builder.mutation<string, any>({
      query: (payload) => ({
        url: `/orders`,
        method: "put",
        body: payload,
      }),
    }),
  }),
});

export const {
  useOrderMutation,
  useOrderOnloadQuery,
  useDeleteOrderMutation,
  useAddOrderQuery,
  useUpdateOrderMutation,
} = orderApi;
