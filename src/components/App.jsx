import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
  }
  function handleChange(event) {
    const item = event.target.value;
    setItem(item);
  }
  function deleteItem(id) {
    setList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      }); //return a new array without the item with the specified id
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {list.map((item, itemIndex) => (
            <ToDoItem
              key={itemIndex}
              id={itemIndex}
              textInput={item}
              onDbChecked={deleteItem}
            /> //pass function as a prop
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
