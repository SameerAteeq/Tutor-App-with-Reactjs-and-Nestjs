import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/proposals",
//   headers: () => {
//     const token = store.getState().user.token;
//     return {
//       Authorization: `Bearer ${token}`,
//     };
//   },
// });
export const proposalApi = createApi({
  reducerPath: "ProposalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/proposals",
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    //Create a Proposal
    createProposal: builder.mutation({
      query: (newProposal) => ({
        url: "/uploadProposal",
        method: "POST",
        body: newProposal,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    //Get all request of single proposal which is sent by tutors
    singlePostRequest: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),

    //Accepting proposal by Student
    acceptProposal: builder.mutation({
      query: (updatePost) => ({
        url: `/update`,
        method: "PUT",
        body: updatePost,
      }),
    }),

    //Deleting proposal
    deleteProposal: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),

    //All Proposal of a single tutor which he has sent
    getSingleTutorProposal: builder.query({
      query: (id) => ({
        url: `/tutor/${id}`,
        method: "GET",
      }),
    }),

    //Get all accepted adn pending proposals by status
    getAllMyProposals: builder.query({
      query: (status) => ({
        url: `/my-proposals/${status}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getAllProposalByAdmin: builder.query({
      query: () => ({
        url: "/getAllProposals",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProposalMutation,
  useSinglePostRequestQuery,
  useAcceptProposalMutation,
  useDeleteProposalMutation,
  useGetSingleTutorProposalQuery,
  useGetAllMyProposalsQuery,
  useGetAllProposalByAdminQuery,
} = proposalApi;
