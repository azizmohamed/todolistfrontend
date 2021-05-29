import './todos.css';
import { deleteItem, completeItem  } from './todoSlice'
import { useDispatch } from 'react-redux'
import React from "react";
import { useForm } from "react-hook-form";


export default function Item(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onComplete = data => {
    data.completed = !data.completed;
    dispatch(completeItem({
      id: data.id,
      completed: data.completed
  }))}

  const onDelete = data => {
    dispatch(deleteItem({
      id: data.id
  }))}

  console.log(watch("taskDesc")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form>
      {/* include validation with required or other standard HTML validation rules */}
      <input type="checkbox" onChange={handleSubmit(onComplete)} />
      <span>{props.description}</span>
      <button onClick={handleSubmit(onDelete)}>Delete</button>
    </form>
  );
}