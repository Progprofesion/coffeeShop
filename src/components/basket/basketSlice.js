import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: 0,
    total: 0,
    basketIncr: 0,
    basketDecr: 0,
    items: JSON.parse(localStorage.getItem('object')) || [],
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
            // const itemInCart = state.items.find((item) => item.id === action.payload.id);
            // if (itemInCart) {
            //     itemInCart.quantity++;
            // } else {
            //     state.items.push({ ...action.payload, quantity: 1 });
            // }
            state.items.push(action.payload);
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { activeStateBasket, activeTotals, activeBasketDecr, activeBasketIncr, addProduct } = actions;
