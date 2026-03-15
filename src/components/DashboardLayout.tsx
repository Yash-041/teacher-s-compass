import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import TopNavbar from "./TopNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-[260px]">
        <TopNavbar />
        <main className="flex-1 p-8 max-w-[1600px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
