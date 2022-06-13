import './App.css';
import React, { useState } from 'react';

function App() {

  const [lists, setTodoList] = useState([
    { name: 'Buy shoppin', priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ]);

  const [newList, setNewList] = useState("");
  const [newPriority, setNewPriority] = useState("");

  const listNodes = lists.map((list, index) => {
    return (
      <li key={index} className={list.priority === 'priority' ? "high-priority" : "low-priority"}><span>{list.name} - Priority  {list.priority}</span>
      </li>
    )
  })

  const handleListInput = (event) => {
    setNewList(event.target.value)
  }

  const saveNewList = (event) => {
    event.preventDefault();
    const copyLists = [...lists]
    copyLists.push({ name: newList, priority: newPriority })
    setTodoList(copyLists)
    setNewList("")
  }

  const handleListPriority = (event) => {
    setNewPriority(event.target.value)

  }

  return (
    <div className='App'>

      <h1>To Do List</h1>
      <hr></hr>
      <ul>
        {listNodes}
      </ul>

      <form onSubmit={saveNewList}>

        <label htmlFor="new-list"> Add a new To Do List</label>
        <input id="new-list" type='text' value={newList} onChange={handleListInput} />
        <label>High</label>
        <input type='radio' id='high' value='High' name='priority' onChange={handleListPriority} />
        <label>Low</label>
        <input type='radio' id='low' value='Low' name='prority' onChange={handleListPriority} />
        <input type="submit" value="Save New Task" />
      </form>


    </div>

  );
}

export default App;
