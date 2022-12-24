import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardsAdapter = createEntityAdapter();
const initialState = cardsAdapter.getInitialState({
    statePrice: {},
    total: localStorage.getItem('total') || 0,
    amount: localStorage.getItem('amount') || 0,
    items: JSON.parse(localStorage.getItem('object')!) || [],
    stateStartArr: JSON.parse(localStorage.getItem('stateArr')!) || [],
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
        activeIncrTotals: (state: any, action) => {
            if (state.statePrice.price) {
                let sum = (parseFloat(state.total.toString()) + action.payload).toFixed(2); // .toFixed(2)
                state.total = sum
            }
        },
        activeDecrTotals: (state: any, action) => {
            if (state.statePrice.price) {
                let sum = (parseFloat(state.total.toString()) - action.payload).toFixed(2); // .toFixed(2)
                state.total = sum
            }
        },
        basketAmount: (state) => {
            state.amount = state.items.reduce(
                (prev: any, current: any) => prev + current.quantity,
                0
            );
        },
        addProduct: (state, action) => {
            const itemInCart = state.items.find((item: any) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            const stateCartAmount = state.stateStartArr.find((item: any) => item.id === action.payload.id);
            stateCartAmount.quantity++;
        },
        addFavorite: (state, action) => {
            const item = state.items.find((item: any) => item.id === action.payload);
            if (item) {
                item.faivorite = true;
            }
            const cartFaivorite = state.stateStartArr.find((item: any) => item.id === action.payload);
            cartFaivorite.faivorite = true;
        },
        removeFaivorite: (state, action) => {
            const item = state.items.find((item: any) => item.id === action.payload);
            if (item) {
                item.faivorite = false;
            }
            const cartFaivorite = state.stateStartArr.find((item: any) => item.id === action.payload);
            cartFaivorite.faivorite = false;
        },
        incrQuantity: (state, action) => {
            const item = state.items.find((item: any) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
            const stateCartAmount = state.stateStartArr.find((item: any) => item.id === action.payload);
            if (stateCartAmount) {
                stateCartAmount.quantity++;
            }
        },
        decrQuantity: (state, action) => {
            const item = state.items.find((item: any) => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
                const stateCartAmount = state.stateStartArr.find((item: any) => item.id === action.payload);
                stateCartAmount.quantity--;
            }
        },
        removeProduct: (state, action) => {
            const item = state.items.find((item: any) => item.id === action.payload);
            if (item && item.quantity === 0) {
                const removeItem = state.items.filter((item: any) => item.id !== action.payload);
                state.items = removeItem;
            }
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors((state: any) => state.basket)

export const { statePrice,
    activeIncrTotals,
    activeDecrTotals,
    addProduct,
    incrQuantity,
    decrQuantity,
    basketAmount,
    removeProduct,
    startState,
    addFavorite,
    removeFaivorite
} = actions;
