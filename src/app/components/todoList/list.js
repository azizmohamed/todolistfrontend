import './todos.css';
import Item from './item.js';
import { useSelector, useDispatch } from 'react-redux';

function List() {
  const todoItems = useSelector((state) => state.todos.todoItems)
  return (
    todoItems.map((item) => {
      return <Item description={item.description}/>;
    })
  );
}

export default List;