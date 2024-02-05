import {configureStore, createReducer} from '@reduxjs/toolkit'
import counterReducer from './counterReducer/counterReducer';
const store  = configureStore ({
    reducer: {

        counterReducer: counterReducer,
    },
});
export default store