import { moviesFilter, Render } from "./renderMoves";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(moviesFilter(name));
  }, [name]);

  useEffect(() => {
    setCount(newArr.length);
  }, [newArr]);
  function addMovie() {}

  return (
    <div id="App">
      <div className="count">count: {count}</div>
      <input
        id="input"
        type="text"
        placeholder="search"
        onChange={(event) => {
          setTimeout(() => setName(event.target.value), 500);
        }}
      ></input>
      <button onClick={addMovie}>add</button>
      <div id="films">
        <Render arr={newArr} setArr={setNewArr} />
      </div>
    </div>
  );
}

export default App;
