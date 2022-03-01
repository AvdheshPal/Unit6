import { createSlice } from '@reduxjs/toolkit';

const intTodo = {
    value:[]
}

export const todoSlice = createSlice({
   name:'todos',
   initialState:intTodo,
   reducers:{
       addTodo : (state,action) =>{
           state.value = [...state.value,action.payload];
       },
       removeTodo : (state,action) =>{
           state.value = state.value.filter(id => id.id != action.payload)
       }
   }
})

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer