// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (body) => ({
        url: `products`,
        method: "POST",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductByName: builder.query({
      query: (name) => `products/search?q=${name}`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useGetProductByNameQuery,
  useGetProductByIdQuery,
} = productApi;
