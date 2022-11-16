import { configureStore } from '@reduxjs/toolkit';
import filters from 'src/store/slices/cadsFiltersSlice';
import basket from 'src/store/slices/basketSlice';

import user from './slices/userSlice';
import { apiSlice } from '../components/api/apiSlice';

const store = configureStore({
    reducer: {
        filters, basket, user,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;