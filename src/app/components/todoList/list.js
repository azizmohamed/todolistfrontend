import './todos.css';
import Task from './task';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from './todoSlice'

function List() {
  const todoItems = useSelector((state) => state.todos.todoItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  },[]);


  return (
    todoItems.map((item) => {
      return <div>
          <Task description={item.description} completed={item.completed}></Task>
        </div>
    })
  );
}

export default List;