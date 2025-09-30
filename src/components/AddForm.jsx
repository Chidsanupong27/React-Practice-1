import "./AddForm.css";
import { useState } from "react";

const AddForm = (props) => {
    const [name,setName] = useState("")
    const [gender,setgender] = useState("Male")


    const {data,setData} = props

    function saveData(e){
      e.preventDefault() //เมื่อบันทึกจะไม่มีการ re หน้า web ดักโดยใช้อันนีั้
      const person = {
        id:Math.floor(Math.random()*1000),
        name:name,
        gender:gender
      }
      console.log(person)
      setData([...data,person])
      setName("")
      setgender("Male")
    }
    

  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อประชากร</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value) }/>
        <select value={gender} onChange={(e)=>setgender(e.target.value)}>
          <option> Male </option>
          <option> female </option>
        </select>
        <button type="submit" className="btn-save" disabled={name.trim()===""}>submit</button>
      </form>
    </section>
  );
};

export default AddForm;
