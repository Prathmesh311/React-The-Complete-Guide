//import {createStore} from 'redux';


//using redux-toolkit
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';


const store  = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store;


// using only redux

/*function counterReducer(state = initialState, action){
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'INCREASE'){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    } 
    if(action.type  === 'TOGGLE'){
        return{
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
} */
