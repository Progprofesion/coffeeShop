import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';
import Cards from '../cardsListItem/cardsListItem';

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    searchCoffee: '',
    // page: null
});



export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const { request } = useHttp();
        return await request('http://localhost:3001/filters')
    }
)



export const fetchSingleCoffee = createAsyncThunk(
    'products/fetchSingleCoffee',
    async () => {
        const { request } = useHttp();
        const { page } = Cards;
        return await request(`http://localhost:3000/ourcoffee/${page}`)
    }

)


const cardsSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        },
        activeSearchCoffee: (state, action) => {
            state.searchCoffee = action.payload
        },
        // activePage: (state, action) => {
        //     state.page = action.payload
        // }
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

export const { selectAll } = cardsAdapter.getSelectors(state => state.filters)

export const { activeFilterChanged, activeSearchCoffee } = actions;
