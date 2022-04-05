import { createSlice, configureStore } from '@reduxjs/toolkit';
import { dish } from '../mockDB/MockDB';

export type displayState = {
    toShowDish: boolean,
    dish: dish | null,
}

const initialState: displayState = {
    toShowDish: false,
    dish: null,
}
export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        loginHandler: (state, action) => {
            state.toShowDish = !state.toShowDish;
            if (state.toShowDish) {
                state.dish = action.payload.dish;
            }
        },

    }
});

export const changeDisplayStatus = (newDish: dish) => {
    return (dispatch: ({ }) => void) => {

        dispatch(displaySlice.actions.loginHandler({ dish: newDish }))
    };
}

export const displayStore = configureStore({
    reducer: { data: displaySlice.reducer }
});

export const displayActions = displaySlice.actions;