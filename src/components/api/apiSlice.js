import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Products'],
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        getfilters: builder.query({
            query: () => '/filters',
            invalidatesTags: ['Products']
        }),
        getProductsId: builder.query({
            query: (id) => `/products/${id}`,
            invalidatesTags: ['Products']
        })
    })
});



export const { useGetProductsQuery, useGetfiltersQuery, useGetProductsIdQuery } = apiSlice;







