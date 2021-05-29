import './todos.css';
import List from './list.js';
import NewItem from './newItem';

function Todos() {
  return (
    <div className="Item">
      <NewItem/>
      <List/>
    </div>
  );
}

export default Todos;