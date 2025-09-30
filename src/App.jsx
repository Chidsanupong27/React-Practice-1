import { useState } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Top", gender: "male" },
    { id: 2, name: "Two", gender: "female" },
    { id: 3, name: "Teen", gender: "male" },
    { id: 4, name: "ploy", gender: "female" },
  ]);

  function deleteUser(id) {
    // ส่งเลข 3 ถ้าต้องการอยากจะลบ id 3 ออกจาก state data
    const result = data.filter((user) => user.id !== id); //new array 
    setData(result);
  }
  return (
    <div className="App">
      <Header title="แอพประชากร " />

      <main>
        <PersonList data={data} deleteUser={deleteUser}/>
      </main>
    </div>
  );
}

export default App;
