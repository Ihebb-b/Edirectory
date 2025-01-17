import { apiSlice } from "./apiSlice";

const RECIPE_URL = "/api/recipe";

export const recipeSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      

        addRecipe: builder.mutation({
            query: ({ token, formData }) => ({
              url: `${RECIPE_URL}/addRecipe`,
              method: 'POST',
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`, // Ensure token is sent
            }, // Form data (including the image file) sent in the request body
            }),
          }),

          getRecipeList: builder.query({
            query: () => ({
                url: `${RECIPE_URL}/getRecipeList`,
                method: 'GET',
            }),
        }),

        getRecipes: builder.query({
            query: () => ({
                url: `${RECIPE_URL}/getRecipes`,
                method: 'GET',
            }),
        }),




}),

});

export const { 
    useAddRecipeMutation,
    useGetRecipeListQuery,
    useGetRecipesQuery,

 } = recipeSlice;
