// import "./App.css";
// import {useState} from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>inc</button>
//       <button onClick={() => setCount(count - 1)}>dec</button>
//       <button onClick={() => setCount(0)}>reset</button>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  } else {
    throw new Error(`Something went wrong`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h1>Count : {state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>inc</button>
      <button onClick={() => dispatch({ type: "DEC" })}>dec</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default App;
