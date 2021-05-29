import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0,
    todoItems: [],
  },
  reducers: {
    newItem: (state, {payload}) => {
      state.todoItems.push({
        description: payload.description,
        completed: false
      });
    },
    completeItem: (state, {payload}) => {
      state.todoItems.forEach(item =>{
        item.completed = payload.completed
      });
    },
    deleteItem: (state, {payload}) => {
      console.log("onDelete")
    }
  },
})

// Action creators are generated for each case reducer function
export const { newItem, completeItem, deleteItem } = todoSlice.actions

export default todoSlice.reducer