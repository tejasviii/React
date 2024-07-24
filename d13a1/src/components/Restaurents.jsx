import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer, useState } from "react";
import getUsers from "../utils/api";

const initialState = {
  loading: false,
  data: [],
  err: false,
};

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

//get the data (use axious) and display the same
const Restaurents = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchAndUpdateData = (page, limit, sortBy, sortOrder) => {
    dispatch({ type: "FETCH_LOADING" });
    getUsers({page,limit,sortBy,sortOrder})
      .then((res) => {
        // console.log(res?.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res?.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_FAILURE" });
      });
  };

  useEffect(() => {
    fetchAndUpdateData(page, limit, sortBy, sortOrder);
  }, [page, limit, sortBy, sortOrder]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.err) {
    return <div>Something went wrong</div>;
  }

  const handlePageChange = (val) => {
    setPage(page + val);
  };

  const handleLimitChange = (val) => {
    setLimit(limit + val);
  };

  console.log(state);
  return (
    <div>
      <div>
        <button onClick={() => handlePageChange(-1)}>PREVIOUS</button>
        <button disabled>Page : {page}</button>
        <button onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
      <div>
        <button onClick={() => handleLimitChange(-1)}>PREVIOUS</button>
        <button disabled>Limit : {limit}</button>
        <button onClick={() => handleLimitChange(1)}>NEXT</button>
      </div>
      <div>
        <button onClick={()=>setSortOrder("asc")}>ASCENDING</button>
        <button disabled>SORT ORDER</button>
        <button onClick={()=>setSortOrder("desc")}>DECENDING</button>
      </div>
      <div>
        <button onClick={()=>setSortBy("id")}>id</button>
        <button onClick={()=>setSortBy("userId")}>userId</button>
        <button onClick={()=>setSortBy("title")}>title</button>
        <button onClick={()=>setSortBy("body")}>body</button>
      </div>
      {state.data.map((d) => (
        <div
          key={d.id}
          style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
        >
          <span>id : </span>
          <span>{d?.id}</span>
          <br />
          <span>userId : </span>
          <span>{d?.userId}</span>
          <br />
          <span>title : </span>
          <span>{d?.title}</span>
          <br />
          <span>body : </span>
          <span>{String(d?.body)}</span>
        </div>
      ))}
    </div>
  );
};

export default Restaurents;
