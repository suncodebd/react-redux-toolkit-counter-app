import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byValue, decrement, increment, reset } from './CounterSlice';

function CounterView() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Readux toolkit Counter Aplication</h1>
            <h2>Counter Value: {count}</h2>
            <button
                type="button"
                onClick={() => {
                    dispatch(increment());
                }}
            >
                incress
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decress
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(reset());
                }}
            >
                Reset
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(byValue(5));
                }}
            >
                incress 5
            </button>
        </div>
    );
}

export default CounterView;
