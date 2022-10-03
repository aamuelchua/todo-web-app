import './App.css';
import React,{useState} from 'react';

function App() {
  const [fieldTask, setFieldTask] = useState('')
  const [taskData, setTaskData] = useState([])


  const submitTask = () =>{
    let oldData = taskData
    oldData.push(fieldTask)
    setTaskData(oldData)
    setFieldTask("")
  }

  const deleteTask = (index) =>{
    let currentList = []
    for (let i = 0;i<taskData.length;i++){
      if (i !== index){
        currentList.push(taskData[i])
      }
    }
    setTaskData(currentList)
  }

  return (
    <div className="App">
      <h1 className="title">My To Do App</h1>
      <div className="inputArea">
        <input 
          type="text" 
          placeholder="Enter your task"
          value={fieldTask}
          className={'input'}
          onChange={(e)=>setFieldTask(e.target.value)}
        />
        <button className="submit" onClick={submitTask}>Submit</button>
      </div>
      {/* Task Area */}
      <div className="taskContainer">
        {taskData.map((item,index)=>{
          return(
            <div className="task" key={index}>
              <p>{item}</p>
              <div className="buttonContainer">
                <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
