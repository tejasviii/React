import React from "react";

const dataFetchReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_LOADING": {
      console.log("loading set to true");
      return { ...state, loading: true };
    }
    case "FETCH_SUCCESS": {
      return { ...state, loading: false, data: payload };
    }
    case "FETCH_FAILURE": {
      return { ...state, loading: false, err: true };
    }
    default: {
      throw new Error(`invalid action type`);
    }
  }
};


export default dataFetchReducer;
