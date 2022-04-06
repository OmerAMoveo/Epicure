import { createSlice, configureStore } from '@reduxjs/toolkit';


export type userState = {
    userName: string,
    isLoggedIn: boolean,
    cart: string[],
    totalPrice: number,

}

const initialState: userState = {
    userName: '',
    isLoggedIn: false,
    cart: [],
    totalPrice: 0,

}
export const userSlice = createSlice({
    name: 'user',
    initialState,
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
            state.cart.push(action.payload.item);
            state.totalPrice += action.payload.item.price;
        }

    }
});