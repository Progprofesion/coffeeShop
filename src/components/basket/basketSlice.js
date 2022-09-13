import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: 0,
    total: 0,
    basketIncr: 0,
    basketDecr: 0,
    items: []
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
        },
        activeBasketDecr: (state, action) => {
            state.basketDecr = action.payload
        },
        activeBasketIncr: (state, action) => {
            state.basketIncr = action.payload
        },
        addProduct: (state, action) => {
            state.items.push(action.payload);
            state.total = state.items.reduce((sum, obj) => {
                return obj.price + sum
            }, 0)
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { activeStateBasket, activeTotals, activeBasketDecr, activeBasketIncr, addProduct } = actions;
