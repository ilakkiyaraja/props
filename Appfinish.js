import React, { useState } from "react";
import Todoform from "./todoform";
import Todolist from "./todolist";
import "antd/dist/antd.css";
import Todo from "./todo";

/*
[
    {id:1, value:"Buy mil"},
    {id:2, value:"Go for a walk"}
]

*/

function App() {
  const [list, setList] = useState([]);

  const handle = (value) => {
    console.log(value);
    const randomId = Math.floor(Math.random() * 1000);
    setList((old) => [...old, { id: randomId, value: value }]);
  };

  function deleteItem(id) {
    const newArray = list.filter((item) => item.id !== id);
    setList(newArray);
  }

  return (
    <div>
      <Todoform data={handle} />

      <Todolist data={list} deleteid={deleteItem} />
    </div>
  );
}
export default App;
