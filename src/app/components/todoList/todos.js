import './todos.css';
import List from './list.js';
import NewItem from './newItem';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './todoSlice'

function Todos() {
  return (
    <div className="Item">
      <NewItem/>
      <List/>
    </div>
  );
}

export default Todos;