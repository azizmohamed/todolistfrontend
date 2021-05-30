import './todos.css';
import List from './list.js';
import NewItem from './newItem';
import LoadingOverlay from 'react-loading-overlay';
import { useSelector } from 'react-redux';

function Todos() {
  const loading = useSelector((state) => state.todos.loading);
  return(
    <LoadingOverlay
      active={loading}
      spinner
      text='Loading your content...'
      >
      <div className="Item">
        <NewItem/>
        <List/>
      </div>
    </LoadingOverlay>);

}

export default Todos;