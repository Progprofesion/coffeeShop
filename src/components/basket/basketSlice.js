import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: 0,
    total: 0
});

const cardsSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        activeStateBasket: (state, action) => {
            state.stateBasket = action.payload
        },
        activeTotals: (state, action) => {
            state.total = action.payload
        }
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { activeStateBasket, activeTotals } = actions;
