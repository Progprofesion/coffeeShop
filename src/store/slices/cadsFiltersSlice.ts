import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from 'src/store/index';
import { useHttp } from 'src/hooks/http.hook';

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    searchCoffee: '',
});

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { request } = useHttp();
        return await request('https://my-json-server.typicode.com/Progprofesion/coffeeShop/filters')
    }
);

const cardsSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        },
        activeSearchCoffee: (state, action) => {
            state.searchCoffee = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {
                state.filtersLoadingStatus = 'loading'
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle'
                cardsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLoadingStatus = 'error'
            })
            .addDefaultCase(() => { })
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors((state: RootState) => state.filters);

export const { activeFilterChanged, activeSearchCoffee } = actions;
