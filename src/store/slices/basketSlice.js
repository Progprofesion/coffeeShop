import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import Big from 'big.js';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    statePrice: {},
    total: localStorage.getItem('total') || 0,
    amount: localStorage.getItem('amount') || 0,
    items: JSON.parse(localStorage.getItem('object')) || [],
    stateStartArr: JSON.parse(localStorage.getItem('stateArr')) || [],
});

const cardsSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        startState: (state, action) => {
            state.stateStartArr = action.payload
        },
        statePrice: (state, action) => {
            state.statePrice = action.payload
        },
        activeIncrTotals: (state, action) => {
            if (state.statePrice.price) {
                // let sum = Number(state.total) + Number(action.payload).toFixed(12);
                let sum = (parseFloat(state.total) + action.payload).toFixed(2);
                // let x = new Big(state.total).round(2).plus(action.payload);
                state.total = sum
            }
        },
        activeDecrTotals: (state, action) => {
            if (state.statePrice.price) {
                // let x = new Big(state.total).round(2).minus(action.payload);
                // state.total = x;
                let sum = (parseFloat(state.total) - action.payload).toFixed(2);
                // let x = new Big(state.total).round(2).plus(action.payload);
                state.total = sum
            }
        },
        basketAmount: (state) => {
            state.amount = state.items.reduce(
                (prev, current) => prev + current.quantity,
                0
            );
        },
        addProduct: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            const stateCartAmount = state.stateStartArr.find((item) => item.id === action.payload.id);
            stateCartAmount.quantity++;
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
            const stateCartAmount = state.stateStartArr.find((item) => item.id === action.payload);
            stateCartAmount.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
                const stateCartAmount = state.stateStartArr.find((item) => item.id === action.payload);
                stateCartAmount.quantity--;
            }
        },
        removeProduct: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity === 0) {
                const removeItem = state.items.filter((item) => item.id !== action.payload);
                state.items = removeItem;
            }
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors(state => state.basket)

export const { statePrice,
    activeIncrTotals,
    activeDecrTotals,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    startState,
} = actions;
