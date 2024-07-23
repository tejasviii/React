import "./App.css";
import { useReducer } from "react";

const initState = {
  username: "",
  country: "",
  age: 18,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUES": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case "UPDATE_AGE": {
      return {
        ...state,
        age: state.age + action.payload,
      };
    }
    case "RESET": {
      return {
        ...initState,
      };
    }
    default: {
      throw new Error(`action invalid`);
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_VALUES",
      payload: {
        name,
        value,
      },
    });
  };

  const handleClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <input
        name="username"
        placeholder="Enter username"
        value={state.username}
        onChange={handleChange}
      />
      <br />
      <br />
      <select name="country" value={state.country} onChange={handleChange}>
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="china">China</option>
        <option value="nepal">Nepal</option>
      </select>
      <button onClick={() => dispatch({ type: "UPDATE_AGE", payload: 1 })}>
        INC AGE
      </button>
      <button disabled>{state.age}</button>
      <button onClick={() => dispatch({ type: "UPDATE_AGE", payload: -1 })}>
        DEC AGE
      </button>
      <br />
      <br />
      <button onClick={handleClick}>Submit Form</button>
    </div>
  );
}

export default App;
