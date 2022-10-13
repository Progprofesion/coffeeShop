import { configureStore } from '@reduxjs/toolkit';
import filters from '../components/cardsFilters/cadsFiltersSlice';
import basket from '../components/basket/basketSlice';

import user from '../store/slices/userSlice';
import { apiSlice } from '../components/api/apiSlice';

const store = configureStore({
    reducer: {
        filters, basket, user,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware),
    devtools: process.env.NODE_ENV !== 'production'
});

export default store;