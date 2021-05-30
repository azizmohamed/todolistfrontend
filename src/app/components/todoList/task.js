import './todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask, deleteTask} from './todoSlice';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task(props) {
  const dispatch = useDispatch();
  return (
    <div className="Todo-Item">
        <input checked={props.completed} 
            type="checkbox"
            className = "Status-Input"
            onChange={() => dispatch(completeTask({
              description : props.description,
              id: props.id,
              completed: !props.completed
            }))}></input>
        <span 
          className = {`Text-Display ${props.completed ? " Text-Display-Completed" : ""}`}
            >{props.description}</span>
        <FontAwesomeIcon 
          className = "Delete-Icon"
          icon={faTrash} 
          color="red" 
          onClick= {() => dispatch(deleteTask(props.id))}/>
    </div>
  );
}

export default Task;