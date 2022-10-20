import { configureStore } from '@reduxjs/toolkit';
import filters from 'src/store/slices/cadsFiltersSlice';
import basket from 'src/store/slices/basketSlice';

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