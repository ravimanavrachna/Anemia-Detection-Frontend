import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import "./App.css";
import Sidebar from "./componants/Sidebar";
import AllRoutes from "./router/AllRoutes";
import Navbar from "./componants/Navbar"
import MobileSideBar from "./componants/MobileSideBar";
import MainPage from "./componants/MainPage";
import useGet from "./hooks/useGet";


function App() {
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const debounceTimeout = useRef(null);


  // Update access state based on response

  useEffect(() => {
    const handleResize = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <div>

      {screenWidth > 1024 ? (
        <div className='relative flex overflow'>
          {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" && (
            <div className={`w-[30%] lg:w-[25%] xl:w-[20%]  h-[100vh] absolute left-0 pr-10 bg-white lg:bg-[#F6EDED]`}>
              <Sidebar />
            </div>
          )}
          <div
            className={
              location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/otp"
                ? "w-[100%]"
                : `w-[70%] lg:w-[75%] xl:w-[80%] pr-6 overflow-scroll h-[100vh]  absolute custom-scrollbar right-0 r bg-white lg:bg-[#F6EDED]`
            }
          >
            {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" && (
              <div className='bg-[#F6EDED] z-50 sticky top-0'>
                <Navbar />
              </div>
            )}

            <div className="">
              { location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp"   }
              <AllRoutes />
            </div>

          </div>
        </div>
      ) : (
        <div className="App ">
          {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" && (
            <div className='w-full fixed top-0 left-0 right-0 z-50 px-2 bg-red-500'>
              <Navbar />
            </div>
          )}
          <div className={` ${location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" ? 'mt-[3rem] px-4 py-4' : ' '} bg-[#F6EDED]`}>
            { location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" }

            <AllRoutes />

            {location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/otp" && (
              <div>
                <MobileSideBar />

              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
