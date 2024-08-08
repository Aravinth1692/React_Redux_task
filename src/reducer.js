// // reducers.js
// import { combineReducers } from 'redux';
// import exampleReducer from './exampleReducer';

// const rootReducer = combineReducers({
//   example: exampleReducer,
//   // Add more reducers as needed
// });

// export default rootReducer;


import { INCREMENT, DECREMENT } from './action';

const initialState = {
  count: 0,
  entervalue :0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count ,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 249
      };
    default:
      return state;
  }
};

export default counterReducer;
