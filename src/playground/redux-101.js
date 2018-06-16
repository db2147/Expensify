import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => { // set a default state value
    return state;
});

console.log(store.getState()); // getState returns the current state object

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero