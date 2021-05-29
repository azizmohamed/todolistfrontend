import './todos.css';
import { newItem, updateItemDesc } from './todoSlice'
import { useDispatch } from 'react-redux'
import React from "react";
import { useForm } from "react-hook-form";


export default function NewItem() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(newItem({
      description: data.taskDesc
  }))}

  console.log(watch("taskDesc")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="New Task" {...register("taskDesc", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>Enter task description</span>}
      
      <input type="submit" />
    </form>
  );
}



