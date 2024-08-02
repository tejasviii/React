import axios from "axios";
import React from "react";
import { useReducer } from "react";

const initState = {
  userId: "", //number
  title: "",
  body: "",
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_INPUT": {
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default: {
      throw new Error(`invalid action`);
    }
  }
};
const AddRestaurant = ({ postRestaurantData }) => {
  const [state, dispatch] = useReducer(formReducer, initState);
  const { userId, title, body } = state;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? +value : value;
    dispatch({ type: "CHANGE_INPUT", payload: { name, value: val } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRestaurantData({ ...state });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="userId"
          placeholder="Add userId"
          value={userId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Add text"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          placeholder="Add body"
          value={body}
          onChange={handleChange}
        />
        <br />
        <hr />
        <input type="submit" placeholder="click to submit" />
      </form>
    </div>
  );
};
export default AddRestaurant;
