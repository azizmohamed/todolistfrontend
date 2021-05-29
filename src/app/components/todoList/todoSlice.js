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
        description: payload.description
      });
    }
  },
})

// Action creators are generated for each case reducer function
export const { newItem } = todoSlice.actions

export default todoSlice.reducer