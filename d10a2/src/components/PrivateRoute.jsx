import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails.isAuth) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export default PrivateRoute;
//<PrivateRoute> <Component/> </PrivateRoute>
