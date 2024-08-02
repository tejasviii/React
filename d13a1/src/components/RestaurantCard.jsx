import React from "react";

const RestaurantCard = ({ d }) => {
  return (
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
  );
};

export default RestaurantCard;
