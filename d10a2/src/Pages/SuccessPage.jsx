import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const SuccessPage = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  if (count === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Successfully made the purchase!</h1>
      <h3>Redirecting in {count}</h3>
    </div>
  );
};

export default SuccessPage;
