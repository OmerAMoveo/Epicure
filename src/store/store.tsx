import { createSlice, configureStore, current } from '@reduxjs/toolkit';
import { dish } from '../mockDB/MockDB';
import { deleteItemFromCart, findDish } from '../service/service';

export type displayState = {
    toShowDish: boolean,
    dish: dish | null,
}

const initialDisplayState: displayState = {
    toShowDish: false,
    dish: null,
}

export const displaySlice = createSlice({
    name: 'display',
    initialState: initialDisplayState,
    reducers: {
        showDishHandler: (state, action) => {
            state.toShowDish = !state.toShowDish;
            if (state.toShowDish) {
                state.dish = action.payload.dish;
            }
        },

    }
});


export const changeDisplayStatus = (newDish: dish) => {
    return (dispatch: ({ }) => void) => {

        dispatch(displaySlice.actions.showDishHandler({ dish: newDish }))
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////

export type itemInCart = {
    name: string,
    quantity: number,
    price: number,
    side: string | null,
    changes: string[]
}

export type userState = {
    userName: string,
    isLoggedIn: boolean,
    cart: itemInCart[],
    totalPrice: number,

}

const initialAuthState: userState = {
    userName: '',
    isLoggedIn: false,
    cart: [],
    totalPrice: 0,

}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialAuthState,
    reducers: {
        loginHandler: (state, action) => {
            state.userName = action.payload.userName;
            state.isLoggedIn = true;
            window.localStorage.setItem('userName', action.payload.userName);
        },
        logoutHandler: (state) => {
            state.userName = '';
            state.isLoggedIn = false;
            window.localStorage.removeItem('userName');
        },
        addToCart: (state, action) => {
            const item = findDish(state.cart, action.payload.item);
            item ?
                item.quantity += action.payload.item.quantity :
                state.cart = [...state.cart, action.payload.item]
            state.totalPrice += action.payload.item.price * action.payload.item.quantity;
        },

    }
});

export const addItemsToCart = (newItem: itemInCart) => {

    return (dispatch: ({ }) => void) => {
        dispatch(userSlice.actions.addToCart({ item: newItem }))
    };
}

////////////////////////////////////////////////////////////////////////////////////////////////

export const displayStore = configureStore({
    reducer: { displayDish: displaySlice.reducer, auth: userSlice.reducer }
});

export const displayActions = displaySlice.actions;
