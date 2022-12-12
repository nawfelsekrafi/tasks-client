import useAuth from "../../hooks/useAuth";
import Header from "../Header";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  const { logout } = useAuth();
  const logoutHandler = async () => {
    await logout();
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <button onClick={() => logoutHandler()}>logout</button>
    </>
  );
};
export default DashboardLayout;
