import { apiSlice } from "./apiSlice";

const RESTAURANTS_URL = "/api/restaurant";

export const restaurantApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addMenu: builder.mutation({
            query: ({ token, ...data }) => ({
                url: `${RESTAURANTS_URL}/addMenu`, // The backend endpoint for adding a menu
                method: 'POST',
                body: data, // The menu data sent in the request body
                headers: {
                    Authorization: `Bearer ${token}`, // Ensure token is sent
                },
            }),
        }),

        getMenuList: builder.query({
            query: () => ({
                url: `${RESTAURANTS_URL}/menus`,
                method: 'GET',
            }),
        }),

    }),
});

export const { useAddMenuMutation, useGetMenuListQuery } = restaurantApiSlice;
