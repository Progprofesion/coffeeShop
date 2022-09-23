import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: 0,
    total: localStorage.getItem('total') || 0,
    basketIncr: 0,
    basketDecr: 0,
    amount: localStorage.getItem('amount') || 0,
    items: JSON.parse(localStorage.getItem('object')) || [],
});

const cardsSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        activeStateBasket: (state, action) => {
            state.stateBasket = action.payload
        },
        activeIncrTotals: (state, action) => {
            if (state.stateBasket.price) {
                let sum = Number(state.total) + action.payload
                let rounded = Math.trunc(sum * 100) / 100;
                state.total = rounded
            }
        },
        activeDecrTotals: (state, action) => {
            if (state.stateBasket.price) {
                let sum = Number(state.total) - action.payload
                let rounded = Math.trunc(sum * 100) / 100;
                state.total = rounded
            }
        },
        activeBasketDecr: (state, action) => {
            state.basketDecr = action.payload;
        },
        activeBasketIncr: (state, action) => {
            state.basketIncr = action.payload;
        },
        activeIncrBasketAmount: (state) => {
            const sumAmount = state.items.reduce(
                (prev, current) => prev + current.quantity,
                0
            );
            state.amount = sumAmount
        },
        activeDecrBasketAmount: (state) => {
            // // state.amount = state.amount - 1
            // const sumAmount = state.items.reduce(
            //     (prev, current) => prev - current.quantity,
            //     0
            // );
            // state.amount = sumAmount
        },
        addProduct: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeProduct: (state, action) => {
            const removeItem = state.items.filter((item) => item.id !== action.payload);
            state.items = removeItem;
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { activeStateBasket,
    activeIncrTotals,
    activeDecrTotals,
    activeBasketDecr,
    activeBasketIncr,
    activeIncrBasketAmount,
    activeDecrBasketAmount,
    addProduct,
    removeProduct } = actions;
