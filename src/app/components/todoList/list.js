import './todos.css';
import Item from './item.js';

function List() {
  return (
    <div className="List">
      <Item/>
      <Item/>
      <Item/>
    </div>
  );
}

export default List;