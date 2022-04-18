import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import pencil from "../icons/pencil.svg";
import trash from "../icons/trash-can.svg";

function ToDoList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/get")
      .then((data) => data.json)
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => err);
  });
  console.log(list);
  return (
    <>
      <div className="Back">
        <div>
          <div className="ToDoList">
            <div className="headList">My To Do List</div>
            <div className="list">
              <div>My List</div>
              <div className="iconflex">
                <div className="icon1">
                  <img src={pencil} alt="" />
                </div>
                <div className="icon1">
                  <img src={trash} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
