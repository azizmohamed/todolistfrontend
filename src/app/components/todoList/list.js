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
      return <div key = {item.id}>
          <Task description={item.description} completed={item.completed} id={item.id}></Task>
        </div>
    })
  );
}

export default List;