import InnerContent from "../components/InnerContent";
import NavbarCom from "../components/NavbarCom";
import { SidebarCom } from "../components/SidebarCom";

function Dashboard() {
  return (


  <div className="flex m-auto w-screen container " >
      <SidebarCom />
    <div className="w-auto md:w-[calc(100%-14.5rem)] container">
      <NavbarCom />
      <InnerContent/>
    </div>
  </div>

  );
}

export default Dashboard;
