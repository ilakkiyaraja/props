import React, { useState } from "react";
import "antd/dist/antd.css";

function Todoform(props) {
  const [item, setItem] = useState();

  const handleItem = () => {
    props.data(item);
    setItem("");
  };

  return (
    <div className="w-2/4 mx-auto bg-green-500 mt-10 items-center rounded">
      <h1 className=" text-center text-3xl">ToDo List</h1>
      <div>
        <input
          className="ml-40 mb-5 rounded p-2"
          type="text"
          value={item}
          onChange={(e) => {
            console.log(e.target.value);
            setItem(e.target.value);
          }}
        ></input>
        <button className="bg-rose-500 p-2 ml-3 rounded" onClick={handleItem}>
          click
        </button>
      </div>
    </div>
  );
}
export default Todoform;
