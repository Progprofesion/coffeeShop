import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    stateBasket: {},
    total: localStorage.getItem('total') || 0,
    basketIncr: 0,
    basketDecr: 0,
    amountCart: 0,
    amount: localStorage.getItem('amount') || 0,
    items: JSON.parse(localStorage.getItem('object')) || [],
    stateArr: JSON.parse(localStorage.getItem('stateArr')) || [],
});

const cardsSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        stateArr: (state, action) => {
            state.stateArr = action.payload
        },
        activeStateBasket: (state, action) => {
            state.stateBasket = action.payload
        },
        activeIncrTotals: (state, action) => {
            if (state.stateBasket.price) {
                let sum = Number(state.total) + action.payload
                let rounded = Math.round(sum * 100) / 100;
                state.total = rounded
            }
        },
        activeDecrTotals: (state, action) => {
            if (state.stateBasket.price) {
                let sum = Number(state.total) - action.payload
                let rounded = Math.round(sum * 100) / 100;
                state.total = rounded
            }
        },
        activeBasketDecr: (state, action) => {
            state.basketDecr = action.payload;
        },
        activeBasketIncr: (state, action) => {
            state.basketIncr = action.payload;
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
            const stateCartAmount = state.stateArr.find((item) => item.id === action.payload.id);
            stateCartAmount.quantity++;
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
                const stateCartAmount = state.stateArr.find((item) => item.id === action.payload);
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

export const { activeStateBasket,
    activeIncrTotals,
    activeDecrTotals,
    activeBasketIncr,
    activeBasketDecr,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    basketAmount,
    removeProduct,
    stateArr,
} = actions;
