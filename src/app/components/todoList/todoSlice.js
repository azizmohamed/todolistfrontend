import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { useDispatch } from 'react-redux';


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return response? response.data: []
  }
)

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (task) => {
    const createResponse = await axios.post(`https://todosgetc.azurewebsites.net/api/tasks`, task)
    const getResponse = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return getResponse? getResponse.data: []
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0,
    todoItems: []
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
      state.todoItems = action.payload;
    },
    [fetchTasks.pending]: (state, action) => {
      
    },
    [fetchTasks.rejected]: (state, action) => {
      console.log(JSON.stringify( action.payload));
    },
    [createTask.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
    },
    [createTask.pending]: (state, action) => {

    },
    [createTask.rejected]: (state, action) => {
      console.log(JSON.stringify( action.payload));
    }
  }
})

// Action creators are generated for each case reducer function
export const { newItem, completeItem, deleteItem, taskCompleted, tasksRetrieved } = todoSlice.actions
export default todoSlice.reducer