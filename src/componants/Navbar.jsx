
import React, { useEffect, useRef, useState } from 'react'
import { BellIcon, ProfileIcon, QuestionMarkIcon, SearchIcon, SettingIcon } from './IconsSVG'
import LogOutModal from '../modal/LogOutModal';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router';
import { LogOut, Settings, ShieldCheck, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [viewMenu, setViewMenu] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const menuRef = useRef(null);
  const {pathname} = useLocation();
  const menuButtonRef = useRef(null);

  const MenuItemData = [
    { name: "Profile", icon: <User /> },
    { name: "Setting", icon: <Settings /> },
    { name: "Privacy Policy", icon: <ShieldCheck /> },
    { name: "Logout", icon: <LogOut /> },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setViewMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='w-full grid grid-cols-3 py-6 z-50'>
        <div className=''>
          <div className='bg-white py-2 pl-2 rounded-xl w-[80%] flex justify-start items-center gap-4'>
              <div><SearchIcon/></div>
              <div className='text-[#830709] w-full'>
                <input type="text" className='text-[#830709] w-[100%] border-none outline-none' placeholder='Search here' />
                
                </div>
          </div>
        </div>
        <div className=' flex items-center justify-end gap-6'>
          <div><BellIcon/></div>
          <div><QuestionMarkIcon/></div>
          <div><SettingIcon/></div>
        </div>
        <div className=' flex gap-3 justify-end pr-10 items-center'>
        <div>
          Ravi Rana
        </div>

        <div className="flex items-center gap-4">
        <motion.div
          ref={menuButtonRef} // ✅ Button reference added here
          onClick={() => setViewMenu((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className={`${
            viewMenu
              ? "bg-white border-red-500 text-red-500 shadow-xl"
              : " text-white bg-red-100"
          } h-[3rem] w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] flex justify-center items-center cursor-pointer text-red-600 font-bold font-urbanist text-xl border shadow-md rounded-full`}
        >
          <ProfileIcon/>
        </motion.div>

        <AnimatePresence>
          {viewMenu && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[5.5rem] right-[2rem] bg-white border w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] py-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2 px-6">
                <div className="w-[5rem] h-[5rem] flex justify-center items-center text-[2rem] rounded-full bg-red-500 text-white border shadow-md">
                  RR
                </div>
                <div>
                  <p className="s2-text !text-gray-500">Ravi Rana</p>
                  <p className="s3-text !text-gray-700">Doctor</p>
                </div>
              </div>
              <hr className="bg-blue-500 text-blue-500 mt-6 mb-2 w-full" />
              {MenuItemData.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-4 px-6 hover:bg-blue-50 hover:cursor-pointer s3-text flex items-center gap-2"
                  onClick={() => {
                    if (item.name === "Logout") {
                      setIsLogoutModalOpen(true);
                    }
                  }}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isLogoutModalOpen && (
        <LogOutModal isOpen={isLogoutModalOpen} setIsOpen={setIsLogoutModalOpen} />
      )}
         
        </div>

    </div>
  )
}

export default Navbar
