import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "Top", gender: "male" },
    { id: 2, name: "Two", gender: "female" },
    { id: 3, name: "Teen", gender: "male" },
    { id: 4, name: "ploy", gender: "female" },
  ]);

  const [show, setShow] = useState(true);
  const myStyle={
    color:"red",
    fontSize:"30px"
  }
  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>จำนวนประชากร {data.length} คน </h2>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id} style={{borderStyle:"solid",borderColor:item.gender == "male" ? "green" : "pink"}}>
              <img
                src={item.gender == "male" ? boy : girl}
                width={50}
                height={50}
              />
              <p style={{color:"black",fontSize:"20px"}} >{item.name} </p>
              <div className="control">
                <button>ลบ</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
