import './App.css';
import { useState } from 'react'
function App() {
  let [todoInput,updateInput]=useState('task')
  let [todolist,updatetodo]= useState(
     [ 
      {
        id:1,
        task:'Learn React'
      },
      {
        id:2,
        task:'learn django'
      },
      
     ]
   )

   let nextid=3
   function addNewTodo(){
      if(todoInput=="")
      {
        alert("add task");
      }
      else{
       let  newTodos=[
           ...todolist,
           {
            id:nextid++,
            task:todoInput
           }
        ]
        updatetodo(newTodos)
        updateInput("")
      }
   }
   function deleteTodo(id){
    let updatedtodo= todolist.filter(
      (todo)=>{
            return todo.id!=id
      }
    )
    updatetodo(updatedtodo)
   }
  return (
   <div className="container mt-5 w-50">
    <h1 className="text-center">TODO LIST</h1>
   <div className="input-group">
      
      <input className="form-control" type='text' onChange={(e)=>{
        let task=e.target.value;
        updateInput(task);

      }} value={todoInput} />
      <button onClick={()=>
        {
          addNewTodo()
        }
      } className="btn btn-primary">Add</button>
   </div>
   <ul className="list-group mt-5">
      {
        todolist.map(
          (todo)=>
          {
             return(
              <li className="list-group-item">
              <p>{todo.task}</p>
              <button className="btn" onClick={()=>
                {
                  deleteTodo(todo.id)
                }
              }>❌</button>
              </li>
              )
          }
        )
      }
         
     

   </ul>
   </div>
  );
}

export default App;
