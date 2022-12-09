import React from "react";
import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import JWTLogin from "./JWTLogin";

const LoginView = () => {
  const { method } = useAuth();

  return (
    <div title="Login">
      <RouterLink to="/">{/* <Logo /> */}</RouterLink>
      <div>
        <div>
          <div>
            <div>Login</div>

            <div variant="body2" color="textSecondary">
              Login on the internal platform
            </div>
          </div>
        </div>
        <div>{method === "JWT" && <JWTLogin />}</div>
      </div>
    </div>
  );
};

export default LoginView;
