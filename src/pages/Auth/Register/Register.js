import useAuth from "../../../hooks/useAuth";
import JWTLogin from "./JWTLogin";

const LoginView = () => {
  const { method } = useAuth();

  return <div>{method === "JWT" && <JWTLogin />}</div>;
};

export default LoginView;
