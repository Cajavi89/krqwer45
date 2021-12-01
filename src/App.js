import React,{ useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

function App (){
  const createdTasks =[
      { id: 1, name: "Sacar la ropa", done: false },
      { id: 2, name: "Hacer la cama", done: true },
      { id: 3, name: "Leer un rato", done: false }
  ]

  const [task,setTasks]= useState('')
  const [listTasks,setListTasks] = useState(createdTasks)
  const [isActive, setIsActive]=useState(true)


const addTask=(e)=>{
  e.preventDefault()
  if(!task)return
  setListTasks([
    ...listTasks,
    {
      id:listTasks.length + 1,
      name: task,
      done: false
    }
  ]);
  setTasks('');
}
  const doneHandler=(id)=>{
    setIsActive(!isActive)
    const newArray = listTasks.map((task)=>{
      if(task.id===id){
        if(task.done ){
          task.done= !isActive
        }
        task.done=isActive
      }
      return task;
    })
    setListTasks(newArray)
  }

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {listTasks.map((task, index) =>
            <li
              onClick={()=>doneHandler(task.id)}
              key={task.id}
              className={task.done ? 'done': null} >
                {task.name}
            </li>)}
        </ul>

        <form onSubmit={addTask}>
          <input className={task?null:'error'} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={task} onChange={(e)=>setTasks(e.target.value)}/>
        </form>
      </div>
    </div>
  )
}

export default App;
