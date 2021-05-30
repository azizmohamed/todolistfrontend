import './todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskCompleted, deleteTask} from './todoSlice'

function Task(props) {
  const dispatch = useDispatch();
  return (
    <div >
        <input checked={props.completed} 
            type="checkbox"
            onChange={() => dispatch(taskCompleted())}></input>
        <span>{props.description}</span>
        <button onClick={() => dispatch(deleteTask(props.id))}>Delete</button>
    </div>
  );
}

export default Task;