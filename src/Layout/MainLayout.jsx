import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg text-white">
        <NavBar></NavBar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
