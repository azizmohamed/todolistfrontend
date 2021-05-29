import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return response? response.data: []
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0,
    todoItems: [],
  },
  reducers: {
    tasksRetrieved: (state, {payload}) => {
      state.todoItems =  payload;
    },
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
    taskCompleted: (state) => {
      state.todoItems.forEach(item =>{
        item.completed = !item.completed
      });
    },
    deleteItem: (state, {payload}) => {
      console.log("onDelete")
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchTasks.fulfilled]: (state, action) => {
      // Add user to the state array
      state.todoItems = action.payload;
    },
    [fetchTasks.pending]: (state, action) => {
      // Add user to the state array
      //state.todoItems = action.payload;
    },
    [fetchTasks.rejected]: (state, action) => {
      // Add user to the state array
      //state.todoItems = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { newItem, completeItem, deleteItem, taskCompleted, tasksRetrieved } = todoSlice.actions
export default todoSlice.reducer