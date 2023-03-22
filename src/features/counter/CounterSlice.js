import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            const st = state;
            st.count += 1;
        },
        decrement: (state) => {
            const st = state;
            st.count -= 1;
        },
        reset: (state) => {
            const st = state;
            st.count = 0;
        },
        byValue: (state, action) => {
            const st = state;
            st.count += action.payload;
        },
    },
});

export const { increment, decrement, reset, byValue } = CounterSlice.actions;

export default CounterSlice.reducer;
