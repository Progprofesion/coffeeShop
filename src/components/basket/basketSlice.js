import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: [],
    total: ''
});

const cardsSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        activeStateBasket: (state, action) => {
            state.stateBasket = action.payload
        },
        activeTotals: (state, action) => {
            state.stateBasket = action.payload
        }
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { activeStateBasket, activeTotals } = actions;
