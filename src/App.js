import { Component } from "react";
import Comp from "./Comp";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(620610772);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const deleteCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(620610772);
  };

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Kittinun",
      gender: "female",
      age: "20"
    }
  ];
  return (
    <div>
      <Comp persons={persons} />

      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button onClick={deleteCounter}>-</button>
      <button onClick={resetCounter}>reset</button>
      <button onClick={addCounter}>+</button>
    </div>
  );
}

export default App;
