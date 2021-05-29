import './todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { taskCompleted} from './todoSlice'

function Task(props) {
  const dispatch = useDispatch();
  return (
    <div>
        <input checked={props.completed} 
            type="checkbox"
            onChange={() => dispatch(taskCompleted())}></input>
        <span>{props.description}</span>
        <button onClick={() => dispatch(taskCompleted())}>Delete</button>
    </div>
  );
}

export default Task;