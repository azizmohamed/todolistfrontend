import './todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask, deleteTask} from './todoSlice'

function Task(props) {
  const dispatch = useDispatch();
  return (
    <div >
        <input checked={props.completed} 
            type="checkbox"
            onChange={() => dispatch(completeTask({
              description : props.description,
              id: props.id,
              completed: !props.completed
            }))}></input>
        <span>{props.description}</span>
        <button onClick={() => dispatch(deleteTask(props.id))}>Delete</button>
    </div>
  );
}

export default Task;