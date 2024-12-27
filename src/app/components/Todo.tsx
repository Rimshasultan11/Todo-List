"use client"

import { todo } from 'node:test';
import React, { useState } from 'react'

interface Todo{
  id: number,
  task:string;
}
const TodoApp = () => {
const [task, setTask] = useState<string> ("");
const [todos , setTodos] = useState<Todo[]>([]);

// add Task
const addTask = () =>{
  if (task.trim() === "") return;
  const newTask = {id:Date.now(), task};
  setTodos ([...todos, newTask]);
  setTask("");
};

//Delete task

const deleteTask = (id :number) =>{
  setTodos(todos.filter(todo => todo.id !==id))
};
  
  return (
      <div>
        
       <div className=' w-[100%]  max-w-[500px] m-[auto] h-[auto] border-2  justify-between items-center p-4 shadow-lg shadow-black mt-5 rounded-lg'>
       <h1 className='bg-black text-white p-5 text-4xl text-center font-bold'>My Todo List</h1>
       <div className='m-5 flex border-2 border-[#dddd] justify-between items-center'>
        <input type="text"  value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your Task ' className='p-4  border-none focus:outline-none'/>
      <button onClick={addTask} disabled={!task}
      className= {task ? "active" : " "}
      
      
      >
      Add Task</button>
      
       </div>
        <ul>
        {todos.map((todo) =>(
          <li key={todo.id} className='p-[10px] mb-[10px]  bg-[#b8c6f3] border-1 border-[#dddd] flex justify-between items-center rounded-md'>
            {todo.task}

            <button onClick={() => deleteTask(todo.id)} className='bg-[#fa5757] text-white'>Delete</button>

          </li>
        ))}


        </ul>
        </div>
      
    </div>
  )
}

export default TodoApp
