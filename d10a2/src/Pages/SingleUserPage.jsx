import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const getData = async (url) => {
  try {
    let response = await fetch(url);
    let res = await response.json(response);
    return res;
  } catch (error) {
    throw new Error(`something went wrong`);
  }
};

const SingleUserPage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const { id } = useParams();

  const fetchAndUpdateData = async (url) => {
    try {
      setLoading(true);
      let resp = await getData(url);
      console.log("response is ", resp);
      setUser(resp);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndUpdateData(`https://reqres.in/api/users/${id}`);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <h1>Single User Page</h1>
      <div style={{ margin: "10px", border: "2px solid black", padding:"10px" }}>
        <img src={user?.data?.avatar} />
        <p>{user?.data?.first_name}</p>
        <p>{user?.data?.last_name}</p>
        <p>{user?.data?.email}</p>
        <p>{user?.data?.id}</p>
        <p>{user?.support?.url}</p>
      </div>
    </div>
  );
};

export default SingleUserPage;
