// // store.js
// import { createStore } from 'redux';
// import rootReducer from './reducer'; // Import your root reducer

// const store = createStore(rootReducer);

// export default store;


import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
