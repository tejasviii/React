import React from "react";
import Store from "./Store";

const Ccounter = () => {
  // const data = Store;
  const { getState } = Store;

  // console.log(data.getState());
  console.log(getState()); 
  const handleAdd = () => {};
  return (
    <div>
      {/* <h1>Count : {data.getState().counter}</h1> */}
      <h1>Count : {getState().counter}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Ccounter;
