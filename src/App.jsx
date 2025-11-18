import { useState, useEffect } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";
import AddForm from "./components/AddForm";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Top", gender: "male" },
    { id: 2, name: "Two", gender: "female" },
    { id: 3, name: "Teen", gender: "male" },
    { id: 4, name: "ploy", gender: "female" },
    { id: 5, name: "tarn", gender: "female" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "dark");



  // const TopFunction = () => {
  //   const [source , setSource] = useState("Top test")
  // }

  // console.log(TopFunction)


  function deleteUser(id) {
    // ส่งเลข 3 ถ้าต้องการอยากจะลบ id 3 ออกจาก state data
    const result = data.filter((user) => user.id !== id); //new array
    setData(result);
  }

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div className="App">
        <Header title="แอพประชากร" theme={theme} setTheme={setTheme} />

        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
