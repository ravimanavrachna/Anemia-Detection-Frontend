import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Home, MenuIcon, PlusCircle, Settings, Users } from "lucide-react";
import LogOutModal from "../modal/LogOutModal";

  const userType = sessionStorage.getItem("userType") // ✅ assuming profile API returns userType
  // console.log("user tyoe" ,userType)
  // 🟢 Menu definitions
  const adminMenu = [
    { name: "Admin Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
    { name: "All Donor", path: "/admin/donor/all-donor", icon: <Users size={20} /> },
    { name: "Block", path: "/admin/block", icon: <Users size={20} /> },
    { name: "Approval", path: "/admin/approval", icon: <Users size={20} /> },
  ];

  const doctorMenu = [
    { name: "Dashboard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Add Donor", path: "/donor/add-donor", icon: <PlusCircle size={20} /> },
    { name: "All Donor", path: "/donor/all-donor", icon: <Users size={20} /> },
  ];

  // 🟢 Combine menus based on userType
  let menuItems = [];
  if (userType == 1) {
    menuItems = adminMenu;
  } else if (userType == 2) {
    menuItems = doctorMenu;
  }

export default function MobileSideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(null);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Touch gesture handling for swipe from left to open
  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (startX !== null && startX < 50 && e.touches[0].clientX - startX > 100) {
        setIsOpen(true);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [startX]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-3 left-3 z-50 bg-white text-red-500 p-2 rounded-md md:hidden"
      >
        <MenuIcon/>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen w-[80%] sm:w-[60%] md:w-[45%] bg-red-600 z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-white text-center py-6 font-bold text-2xl">
          Blood Camp
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1 px-6">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false); // Close sidebar after navigation
              }}
              className={`flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-white text-red-700 font-semibold"
                  : "text-white hover:bg-white hover:text-red-700"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <LogOutModal />
        </div>
      </div>
    </>
  );
}
