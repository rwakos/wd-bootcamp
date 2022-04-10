import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems([...items, {text: inputText, id: uuidv4()}]);
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
      onAdd={addItem}
       />
      <div>
        <ul>
        {items.map((todoItem) => (
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
