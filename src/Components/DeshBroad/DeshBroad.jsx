import { Outlet } from "react-router-dom";
import SlideBar from "../SliderBar/SliderBar";

const DeshBroad = () => {
  return (
    <div className="relative z-80 min-h-screen md:flex">
      {/* Sidebar */}
      <SlideBar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 z-10"> {/* z-10 ensures content stays above background */}
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DeshBroad;
