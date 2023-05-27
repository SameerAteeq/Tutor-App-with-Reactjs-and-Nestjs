import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    //Creating user
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: newUser,
      }),
    }),

    //login User
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    //Get all Users
    getUsers: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
    }),
    options: {
      refetchQueries: ["getUsers"],
    },
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useGetUsersQuery } =
  UserApi;
