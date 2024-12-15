import { Outlet } from "react-router-dom";
import Navber from "../pages/Share/Navber";
import Footer from "../pages/Share/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  );
};

export default MainLayout;