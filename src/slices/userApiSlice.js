import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/user";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            }),
        }),

        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),

        getUserProfile: builder.query({
            query: () => ({
                url: "/profile", // Endpoint to fetch user profile
                method: "GET",
            }),
        }),

        assignRole: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/assignRole`,
              method: "POST",
              body: data,
            }),
            invalidatesTags: ["User"], // Invalidate cache if needed
          }),

    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
    useGetUserProfileQuery, } = userApiSlice;