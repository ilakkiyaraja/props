import Item from "antd/lib/list/Item";
import React from "react";
import Todoform from "./todoform";
import Todo from "./todo";

import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";

function Todolist(props) {
  return (
    <div className="bg-red-300 mx-auto text-center w-1/4 mt-5 rounded ">
      <ul>
        {props.data.map((todo) => (
          // <h1>{todo.value}</h1>
          <Todo value={todo.value} id={todo.id} handleDelete={props.deleteid} />
        ))}
      </ul>

      {/* 
      //     // <li className="w-full flex justify-between items center p-2">
      //     //   {todo.value} {todo.id}
      //       {
      //         <button onClick={() => props.deleteid(todo.id)}>
      //           <DeleteOutlined />
      //         </button>
      //       }
      //     </li>
      //   ))}
      // </ul> */}
    </div>
  );
}
export default Todolist;
