import './todos.css';
import Task from './task';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './todoSlice'

function List() {
  const todoItems = useSelector((state) => state.todos.todoItems);
  const dispatch = useDispatch();
  dispatch(fetchTasks());
  return (
    todoItems.map((item) => {
      return <div>
          <Task description={item.description} completed={item.completed}></Task>
        </div>
    })
  );
}

export default List;