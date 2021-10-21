import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id); //this calls the delete function on a click event
      }}
    >
      <li>{props.Text}</li>;
    </div>
  );
}

export default ToDoItem;
