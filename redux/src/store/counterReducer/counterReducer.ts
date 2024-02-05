import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers: {
        add:(state,payload)=>{
            state.value=state.value + 1
        }
    }
});
export default counterSlice.reducer;