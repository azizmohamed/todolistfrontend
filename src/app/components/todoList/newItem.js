import './todos.css';
import { createTask } from './todoSlice'
import { useDispatch } from 'react-redux'
import React from "react";
import { useForm } from "react-hook-form";


export default function NewItem() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(createTask({
      description: data.taskDesc
  }))}

  console.log(watch("taskDesc")); 

  return (

    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="New-Item"
      >
      <input 
        placeholder="New Task" 
        className="New-Item-Text"
        {...register("taskDesc", { required: true })} />
      
      <input 
        className="Add-Button"
        type="submit" 
        value="Add" />
    </form>
  );
}



