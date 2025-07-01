import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bell, Home, PlusCircle, Settings, Users } from "lucide-react";
// import LogOutModal from "../../modal/LogOutModal";
// import { CommonBgColor } from "../CommonStyle";
import LogOutModal from "../modal/LogOutModal";
import { BellIcon1 } from "./IconsSVG";

const menuItems = [
  // { name: "Admin Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
  { name: "Dashboard", path: "/dashboard", icon: <Home size={24} /> },

  {
    name: "Add Donor",
    path: "/donor/add-donor",
    icon: <PlusCircle size={24} />,
  },
  {
    name: "All Donor",
    path: "/donor/all-donor",
    icon: <Users size={24} />,
  },
  // {
  //   name: "Notification",
  //   path: "/notificaion",
  //   icon: <Bell size={20} />,
  // },
  {
    name: "Setting",
    path: "/settings",
    icon: <Settings size={24} />,
  },
];

export default function MobileSideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed w-[90%] sm:w-[70%] md:w-[50%]  m-auto left-0 bottom-4 right-0">

{/* <div className="flex items-center mb-8 justify-center">
        <h1 className="text-[2rem] font-bold my-5 font-urbanist text-red-600">
            Blood Camp
        </h1>
      </div> */}
      <div
    // <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" bg-red-600 rounded-[32px] "
    >
     

      <div className="relative"></div>

      {/* Navigation */}
      <nav className="flex justify-between px-6 py-2">
        {menuItems.map((item, index) => (
          // <motion.div
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-between rounded-lg cursor-pointer transition-all duration-300 ${
              location.pathname === item.path
                // ? `bg-white lg:bg-[#e9f0f8] text-red-700`
                ? `text-gray-700`

                : "text-white"
            }`}
          >
            <span className="">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          {/* </motion.div> */}
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className=""  >
       <LogOutModal />
      </div>
    {/* </motion.div> */}
    </div>
    </div>
   
  );
}
