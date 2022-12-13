import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* <div className="navbar">
        <Header />
      </div> */}
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="main-outlet">{children}</main>
    </div>
  );
};
export default DashboardLayout;
