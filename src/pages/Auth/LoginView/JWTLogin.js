import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

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
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default JWTLogin;
