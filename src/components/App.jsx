import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [list, setList] = useState([]);

  function handleClick(addedItem) {
    setList((prevList) => {
      return [...prevList, addedItem];
    });
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

      <InputArea
        onAdd={handleClick}
      />

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
