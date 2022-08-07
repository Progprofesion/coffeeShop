import { configureStore } from '@reduxjs/toolkit';
import filters from '../components/cardsFilters/cadsFiltersSlice';

import { apiSlice } from '../components/api/apiSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};


const store = configureStore({
    reducer: {
        filters,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devtools: process.env.NODE_ENV !== 'production'
})

export default store;