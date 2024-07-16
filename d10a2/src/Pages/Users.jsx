import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"; //step - 1

const getData = async (url) => {
  try {
    let response = await fetch(url);
    let res = await response.json(response);
    return res;
  } catch (error) {
    throw new Error(`something went wrong`);
  }
};

const formatValue = (val) => {
  if (val <= 1) {
    val = 1;
  }
  if (typeof val != "number") {
    val = 1;
  }
  return Number(val);
};
const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); //step - 2 //queryparam-1
  const initialPage = formatValue(searchParams.get("page"));
  const [page, setPage] = useState(initialPage); // from query param
  const [title, setTitle] = useState(""); //queryParam-2

  const fetchAndUpdateData = async (url) => {
    try {
      setLoading(true);
      let resp = await getData(url);
      console.log("response is ", resp);
      setUsers(resp?.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handlePageChange = (val) => {
    setPage(page + val);
  };

  console.log(typeof searchParams.get(`page`)); //step - 3

  useEffect(() => {
    setSearchParams({ page: page, title: title });
  }, [page,title]); //step - 4

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users?page=${page}`);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>
        <button onClick={() => handlePageChange(-1)}>PREV</button>
        <button>{page}</button>
        <button onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
      <h1>Users</h1>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ margin: "10px", border: "2px solid black" }}
        >
          <img src={user.avatar} alt={user.first_name} />
          <p>{user.id}</p>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <Link to={`/users/${user.id}`}>MORE INFO</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
