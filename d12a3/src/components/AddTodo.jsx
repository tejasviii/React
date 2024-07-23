import React from "react";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputVal, setInpitVal] = useState("");

  const handleAdd = () => {
    const newItem = {
      id: Math.random() + Date.now(),
      title: inputVal,
      status: false,
    };

    addTodo(newItem);
  };

  return (
    <div>
      <input
        value={inputVal}
        onChange={(e) => {
          setInpitVal(e.target.value);
        }}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddTodo;
