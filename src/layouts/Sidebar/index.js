import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { resetTasks } from "../../slices/task";
import { resetUser } from "../../slices/user";
import { useDispatch } from "react-redux";
import "./index.scss";
const Sidebar = ({}) => {
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(resetUser());
    dispatch(resetTasks());
    await logout();
  };
  return (
    <div className="sidebar-container">
      <Link to="/">Dashboard</Link>
      <Link to="/add-task">Add Task</Link>
      <Link to="/my-tasks">My Tasks</Link>
      <Link to="/tasks-shared-to-me">Tasks Shared To me</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={() => logoutHandler()}>logout</button>
    </div>
  );
};

export default Sidebar;
