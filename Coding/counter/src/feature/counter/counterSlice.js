import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    counterValue: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers: {
        increase : (state,action)=>{
            state.counterValue += action.payload;
        }
    }
})

export const { increase } = counterSlice.actions;
export default counterSlice.reducer;