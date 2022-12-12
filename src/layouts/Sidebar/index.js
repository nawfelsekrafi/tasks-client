import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./index.scss";
const Sidebar = ({}) => {
  const { logout } = useAuth();
  const logoutHandler = async () => {
    await logout();
  };
  return (
    <div className="sidebar-container">
      <Link to="/">Dashboard</Link>
      <Link to="/my-tasks">My Tasks</Link>
      <Link to="/tasks-shared-to-me">Tasks Shared To me</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={() => logoutHandler()}>logout</button>
    </div>
  );
};

export default Sidebar;
