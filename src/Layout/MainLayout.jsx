import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
