import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export interface basketSliceInterface {
    statePrice: {
        price?: number
    }
    total: number | string
    amount: number
    items: []
    stateStartArr: []
}

type basketType = {
    amount: number
    items: any[]
    stateStartArr: {
        quantity: number
        faivorite: boolean
        id: number
    }[]
    quantity?: number
}

type TgetSelector = {
    basket: {
        ids: string[]
        entities: {}
    }
}

const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState({
    statePrice: 0,
    total: localStorage.getItem('total') || 0,
    amount: localStorage.getItem('amount') || 0,
    items: JSON.parse(localStorage.getItem('object')!) || [],
    stateStartArr: JSON.parse(localStorage.getItem('stateArr')!) || [],
    quantity: 0,
    itemInCart: 0
}) as basketSliceInterface

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
        activeIncrTotals: (state: basketSliceInterface, action) => {
            if (typeof state.statePrice.price) {
                let sum = (parseFloat(state.total.toString()) + action.payload).toFixed(2);
                state.total = sum
            }
        },
        activeDecrTotals: (state: basketSliceInterface, action) => {
            if (state.statePrice.price) {
                let sum = (parseFloat(state.total.toString()) - action.payload).toFixed(2);
                state.total = sum
            }
        },
        basketAmount: (state: basketType) => {
            state.amount = state.items.reduce(
                (prev: IDBCursorDirection, current: basketType) => prev + current.quantity,
                0
            );
        },
        addProduct: (state: basketType, action) => {
            const itemInCart = state.items.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            const stateCartAmount = state.stateStartArr.find(item => item.id === action.payload.id);
            if (stateCartAmount) {
                stateCartAmount.quantity++;
            }

        },
        addFavorite: (state: basketType, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.faivorite = true;
            }
            const cartFaivorite = state.stateStartArr.find(item => item.id === action.payload);
            cartFaivorite!.faivorite = true;
        },
        removeFaivorite: (state: basketType, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.faivorite = false;
            }
            const cartFaivorite = state.stateStartArr.find(item => item.id === action.payload);
            cartFaivorite!.faivorite = false;
        },
        incrQuantity: (state: basketType, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
            const stateCartAmount = state.stateStartArr.find(item => item.id === action.payload);
            if (stateCartAmount) {
                stateCartAmount.quantity++;
            }
        },
        decrQuantity: (state: basketType, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 0) {
                item.quantity--;
                const stateCartAmount = state.stateStartArr.find(item => item.id === action.payload);
                if (stateCartAmount) {
                    stateCartAmount.quantity--;
                }
            }
        },
        removeProduct: (state: basketType, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity === 0) {
                const removeItem = state.items.filter(item => item.id !== action.payload);
                state.items = removeItem;
            }
        },
    }
});

const { actions, reducer } = cardsSlice;

export default reducer;

export const { selectAll } = cardsAdapter.getSelectors((state: TgetSelector) => state.basket)

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
