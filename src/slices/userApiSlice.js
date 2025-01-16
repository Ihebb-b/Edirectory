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
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, 
                  },
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


        getAllRestaurants: builder.query({
            query: () => ({
                url: `${USERS_URL}/getAllRestaurants`,
                method: 'GET',
            }),
          }),

        getAllRestaurantsPagi: builder.query({
            query: ({ page = 1, limit = 5 }) => ({
              url: `${USERS_URL}/getAllRestaurantsPagi?page=${page}&limit=${limit}`,
              method: "GET",
            }),
          }),

          getrestaurantById: builder.query({
            query: (id) => ({
                url: `${USERS_URL}/restaurant/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
    useGetUserProfileQuery,
    useGetAllRestaurantsQuery,
    useGetAllRestaurantsPagiQuery,
    useGetrestaurantByIdQuery, } = userApiSlice;