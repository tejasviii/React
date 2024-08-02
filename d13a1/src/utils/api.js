import axios from "axios";
import React from "react";

const getUsers = (params) => {
  const queryParams = {};

  if (params.page) {
    queryParams._page = params.page;
  }
  if (params.limit) {
    queryParams._limit = params.limit;
  }
  if (params.sortBy) {
    queryParams._sort = params.sortBy;
  }
  if (params.sortOrder) {
    queryParams._order = params.sortOrder;
  }

  return axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    params: queryParams,
  });
};

// export const postRestaurantData = (restaurantData) => {
//   return axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//     ...restaurantData,
//   });
// };
//can also be written as below
export const postRestaurantData = (restaurantData) => {
  return axios({method:"post",
    url:"https://jsonplaceholder.typicode.com/posts",
    data:restaurantData
  })
};
export default getUsers;
