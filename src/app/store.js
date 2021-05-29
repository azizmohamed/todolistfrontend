import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './components/todoList/todoSlice';

export default configureStore({
  reducer: {
      todos: todoReducer
  },
})