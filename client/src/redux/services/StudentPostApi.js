import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentPostApi = createApi({
  reducerPath: "StudentPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/student-posts",
  }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["Upload-Post", "All-Post", "Single-Post", "Delete-Post"],
  endpoints: (builder) => ({
    //Create a post for learning subject
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "/uploadPost",
        method: "POST",
        body: newPost,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Upload-Post"],
    }),

    //Get all posts
    getAllPost: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["All-Post"],
    }),

    //Get Single Post
    getSinglePost: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Single-Post"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/del-post/${id}`,
        method: "DELETE",
      }),
      providesTags: ["Delete-Post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetSinglePostQuery,
  useDeletePostMutation,
  usePrefetch,
} = studentPostApi;
