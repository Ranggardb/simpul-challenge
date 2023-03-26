import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
    getAllUsers: builder.query({
      query: () => `users`,
    }),
    getUserByName: builder.query({
      query: (name) => `users/search?q=${name}`,
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserByName,
} = userApi;
