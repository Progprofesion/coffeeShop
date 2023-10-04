import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-json-server.typicode.com/Progprofesion/coffeeShop' }),
    tagTypes: ['Products'],
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        getProductsId: builder.query({
            query: (id) => `/products/${id}`
        })
    })
});



export const { useGetProductsQuery, useGetProductsIdQuery } = apiSlice;







