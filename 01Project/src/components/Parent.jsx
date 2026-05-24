import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import OrderDashboard from "./OrderDashboard";
import TopSelling from "./TopSelling";
import BgChanger from "../smallProjects/BgChanger";
import PasswordGen from "../smallProjects/PasswordGen";
import FinalBox from "../smallProjects/language-translator/FinalBox";
import RootDashboard from "../smallProjects/Dashboards/RootDashboard";
import { Link, Outlet, useLocation } from "react-router";
import Message from "../Message";

function Parent() {
  const location = useLocation();
  const [view, setView] = useState(false);
  const [showMsg, setShowMsg] = useState(true)

  // to clear message after 4000 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMsg(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // function to dismiss message
  const dismiss = () => {
    setShowMsg(false);
  }

  console.log("location: ", location.pathname);

  const projects = [
    { label: "Dashboards", address: "/dashboard" },
    { label: "Bg Changer", address: "/bg-changer" },
    { label: "Password Gen", address: "/password-gen" },
    { label: "Language Trans", address: "/language-trans" },
    { label: "Github Profile", address: "/github-profile" },
    { label: "Grocery List", address: "/grocery-list" }
  ];

  return showMsg ? (
    <Message dismiss={dismiss} />
  ) : (
    <div className="px-4 py-6 sm:p-9 bg-mauve-900 min-h-screen font-mono w-full overflow-x-hidden">
      
      <h1 className="text-3xl sm:text-5xl font-bold my-3 text-mauve-500 wrap-break-word">
        Project Control Center
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-7">
        <h5 className="italic text-mauve-300 text-sm tracking-widest uppercase">
          Select the button to view details:
        </h5>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <Link to="/" className="flex-1 sm:flex-initial">
            <button className="w-full text-center border-2 border-red-400 text-red-400 bg-red-100 py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg hover:-translate-y-1 transition duration-300 text-sm sm:text-base">
              ↺ Reset View
            </button>
          </Link>

          <button
            className="flex-1 sm:flex-none bg-taupe-300 text-mauve-800 border-2 border-mauve-500 rounded-lg font-semibold py-2.5 px-4 cursor-pointer hover:-translate-y-1 hover:bg-mauve-300 transition duration-300 text-sm sm:text-base whitespace-nowrap"
            onClick={() => setView(!view)}
          >
            ⊞ Open Projects
          </button>
        </div>
      </div>

      {/* Projects Grid Panel */}
      {view && (
        <div className="relative w-full flex flex-wrap justify-center gap-3 p-5 pt-8 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <button
            className="absolute top-2 right-3 text-sm px-2 py-1 rounded-md border border-red-400 text-red-300 hover:scale-105 transition z-10 cursor-pointer"
            onClick={() => setView(false)}
          >
            x
          </button>

          {projects.map(({ label, address }) => (
            <Link to={address} key={label} className="w-full sm:w-auto">
              <button
                className="w-full border-2 border-mauve-400 bg-mauve-100 text-mauve-700 font-semibold py-2.5 px-4 rounded-lg hover:-translate-y-1 hover:bg-mauve-300 transition duration-300 text-sm sm:text-base cursor-pointer"
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      )}

      <div className="bg-mauve-100 px-3 py-6 sm:p-7 min-h-50 rounded-lg border-2 border-mauve-500 border-dashed w-full overflow-hidden">
        {location.pathname === "/" ? (
          <div className="text-center text-mauve-700 px-2">
            <p>No component selected. Click Open Projects button to display data.</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Parent;