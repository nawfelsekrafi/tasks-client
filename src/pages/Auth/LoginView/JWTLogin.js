import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./index.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const JWTLogin = ({ className, ...rest }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin1234");
  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <form onSubmit={(e) => submit(e)}>
          <TextField
            id="outlined-basic"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="outlined"
            required
          />
          {/* <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          /> */}
          {/* <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          /> */}
          <Button variant="contained" type="submit">
            Login
          </Button>
          {/* <Link to="/register">Register</Link> */}
        </form>
      </div>
    </div>
  );
};

export default JWTLogin;
