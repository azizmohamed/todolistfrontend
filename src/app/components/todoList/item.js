import './todos.css';

function Item(props) {
  return (
    <div className="Item">
      <header className="Item-header">
          {props.description}
      </header>
    </div>
  );
}

export default Item;