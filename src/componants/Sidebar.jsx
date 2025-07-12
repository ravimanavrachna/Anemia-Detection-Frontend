import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Bell, Home, PlusCircle, Settings, Users } from "lucide-react";
// import LogOutModal from "../../modal/LogOutModal";
// import { CommonBgColor } from "../CommonStyle";
import LogOutModal from "../modal/LogOutModal";
import { BellIcon1 } from "./IconsSVG";

const menuItems = [
  { name: "Admin Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
  { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },

  {
    name: "Add Donor",
    path: "/donor/add-donor" || "/donor/add-donor/upload-palm-image" || "/donor/add-donor" ,
    icon: <PlusCircle size={20} />,
  },
  {
    name: "All Donor",
    path: "/donor/all-donor",
    icon: <Users size={20} />,
  },
   {
    name: "Block",
    path: "/admin/block",
    icon: <Users size={20} />,
  },
   {
    name: "Approval",
    path: "/admin/approval",
    icon: <Users size={20} />,
  },
  // {
  //   name: "Notification",
  //   path: "/notificaion",
  //   icon: <Bell size={20} />,
  // },
  // {
  //   name: "Setting",
  //   path: "/settings",
  //   icon: <Settings size={20} />,
  // },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="h-full  overflow-hidden">

<div className="flex items-center mb-8 justify-center">
        <h1 className="text-[2rem] font-bold my-5 font-urbanist text-red-600">
            Blood Camp
        </h1>
      </div>
      <div
    // <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-w-full bg-red-600 lg:shadow-xl rounded-tr-[50px] p-6 space-y-6 h-full flex flex-col"
    >
     

      <div className="relative"></div>

      {/* Navigation */}
      <nav className="space-y-2 flex-grow">
        {menuItems.map((item, index) => (
          // <motion.div
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-4 font-medium text-[18px] p-3 rounded-lg cursor-pointer transition-all duration-300 ${
              location.pathname === item.path
                ? `bg-white lg:bg-[#e9f0f8] text-red-700`
                : "text-white hover:bg-red-100"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
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
