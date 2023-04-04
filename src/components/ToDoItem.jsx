import React, { useState } from "react";

function ToDoItem(props) {
  const [isChecked, setCheck] = useState(false);

  function handleClick(event) {
    if (event.detail === 1) {
      //single click
      setCheck((prevState) => {
        // if (prevState === false) return true;
        // else return false;
        return !prevState;
      });
    } else if (event.detail === 2) {
      //double click
      props.onDbChecked(props.id); //deleteItem(id)
    }
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {props.textInput}
      </li>
    </div>
  );
}

export default ToDoItem;
