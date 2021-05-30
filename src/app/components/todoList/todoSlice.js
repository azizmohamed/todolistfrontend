import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


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
    await axios.post(`https://todosgetc.azurewebsites.net/api/tasks`, task)
    const getResponse = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return getResponse? getResponse.data: []
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id) => {
    await axios.delete(`https://todosgetc.azurewebsites.net/api/tasks/` + id)
    const getResponse = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return getResponse? getResponse.data: []
  }
)

export const completeTask = createAsyncThunk(
  'tasks/completeTask',
  async (task) => {
    await axios.put(`https://todosgetc.azurewebsites.net/api/tasks/` + task.id, task)
    const getResponse = await axios.get(`https://todosgetc.azurewebsites.net/api/tasks`)
    return getResponse? getResponse.data: []
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0,
    todoItems: [],
    loading: false
  },
  reducers: {

  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchTasks.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
      state.loading = false;
    },
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.loading = false;
      console.log(JSON.stringify( action.payload));
    },
    [createTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoItems = action.payload;
    },
    [createTask.pending]: (state, action) => {
      state.loading = true;
    },
    [createTask.rejected]: (state, action) => {
      state.loading = false;
      console.log(JSON.stringify( action.payload));
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoItems = action.payload;
    },
    [deleteTask.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTask.rejected]: (state, action) => {
      state.loading = false;
      console.log(JSON.stringify( action.payload));
    },
    [completeTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoItems = action.payload;
    },
    [completeTask.pending]: (state, action) => {
      state.loading = true;
    },
    [completeTask.rejected]: (state, action) => {
      state.loading = false;
      console.log(JSON.stringify( action.payload));
    }
  }
})

// Action creators are generated for each case reducer function
export const { newItem, completeItem, deleteItem, tasksRetrieved } = todoSlice.actions
export default todoSlice.reducer