import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer, useState } from "react";
import getUsers, { postRestaurantData } from "../utils/api";
import RestaurantCard from "./RestaurantCard";
import dataFetchReducer from "../reducer/restaurantReducer";
import AddRestaurant from "./AddRestaurant";

const initialState = {
  loading: false,
  data: [],
  err: false,
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
    getUsers({ page, limit, sortBy, sortOrder })
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

  const postRestaurantData = (restaurantData) => {
    postRestaurantData(restaurantData)
      .then((res) => {
        fetchAndUpdateData(page, limit, sortBy, sortOrder);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(state);
  return (
    <div>
      <AddRestaurant postRestaurantData={postRestaurantData} />
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
        <button onClick={() => setSortOrder("asc")}>ASCENDING</button>
        <button disabled>SORT ORDER</button>
        <button onClick={() => setSortOrder("desc")}>DECENDING</button>
      </div>
      <div>
        <button onClick={() => setSortBy("id")}>id</button>
        <button onClick={() => setSortBy("userId")}>userId</button>
        <button onClick={() => setSortBy("title")}>title</button>
        <button onClick={() => setSortBy("body")}>body</button>
      </div>
      {state.data.map((d) => (
        <RestaurantCard d={d} />
      ))}
    </div>
  );
};

export default Restaurents;
