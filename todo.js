import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

function Todo(props) {
  //   const [update, setUpdate] = useState();

  const handleupdate = () => {
    console.log("update");
  };

  return (
    <div>
      {
        <li className="flex w-full justify-between items-center p-2">
          {props.value}
          {
            <button
              onClick={() => {
                props.handleDelete(props.id);
              }}
            >
              <DeleteOutlined />
            </button>
          }
          {
            <button onClick={handleupdate}>
              <EditOutlined />
            </button>
          }
        </li>
      }
    </div>
  );
}
export default Todo;
