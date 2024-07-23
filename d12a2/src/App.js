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

import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  // if (action.type === "INC") {
  //   return state + 1;
  // } else if (action.type === "DEC") {
  //   return state - 1;
  // } else if (action.type === "RESET") {
  //   return 0;
  // } else {
  //   throw new Error(`Something went wrong`);
  // }
  switch (action.type) {
    case "INC": {
      return Number(state) + Number(action.payload);
    }
    case "DEC": {
      return Number(state) - Number(action.payload);
    }
    case "RESET": {
      return Number(0);
    }
    default: {
      throw new Error(`Something went wrong`);
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [inputVal, setInputValue] = useState(0);
  return (
    <div className="App">
      <input
        value={inputVal}
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Count : {state}</h1>
      <button onClick={() => dispatch({ type: "INC", payload: inputVal || 1 })}>
        inc
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: inputVal || 1 })}>
        dec
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}

export default App;
