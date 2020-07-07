import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { RootState } from "../../State/reducers";

var jwt_decode = require("jwt-decode");

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const token2 = jwt_decode(localStorage.getItem("token"));
  console.log("token2", token2);
  console.log("token", token);
  return (
    <Route
      {...props}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" {...props} />;
        }
      }}
    />
  );
};

<<<<<<< HEAD
export default connect(null)(ProtectedRoute);
=======
export default ProtectedRoute;
>>>>>>> bbfe17d37d9d1ab90f9cb786c639580976998ec3
