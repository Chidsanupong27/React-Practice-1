import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "Top", gender: "male" },
    { id: 2, name: "Two", gender: "female" },
    { id: 3, name: "Teen", gender: "female" },
    { id: 4, name: "ploy", gender: "female" },
  ]);

  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>จำนวนประชากร {data.length} คน </h1>
      
     
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>

      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
                <img src={item.gender=="male" ? boy : girl} width={50} height={50} />
              <h3>{item.name} </h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
