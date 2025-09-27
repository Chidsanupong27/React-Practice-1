import { useState } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div>
      <Header />
      <main>
          <PersonList/>
      </main>
      
      
    </div>
  );
}

export default App;
  