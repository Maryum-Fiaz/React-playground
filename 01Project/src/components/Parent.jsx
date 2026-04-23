import React, { useState } from "react";
import Dashboard from "./Dashboard";
import OrderDashboard from "./OrderDashboard";
import TopSelling from "./TopSelling";
import BgChanger from "../smallProjects/BgChanger";
import PasswordGen from "../smallProjects/PasswordGen";
import FinalBox from "../smallProjects/language-translator/FinalBox";

function Parent() {
  const [content, showContent] = useState(null);
  const [view, setView] = useState(false)

  function handleClick(componentToShow) {
    showContent(componentToShow);
  }

  return (
    <div className="p-9 bg-taupe-200 min-h-screen">
      <h1 className="text-5xl font-semibold my-3">Project Control Center</h1>

      <div className="flex justify-between mb-7">
        <h5 className="italic text-[#8c786a]">
          Select the button to view details:
        </h5>

    <div className="flex gap-3">
        <button className="border-2 border-dashed border-red-400 bg-red-100 py-3 px-6 rounded-lg" onClick={() => handleClick(null)}>
          Reset View
        </button>
        <button className="bg-taupe-300 text-taupe-800 border-2 border-taupe-500 rounded-lg font-semibold py-3 px-4 cursor-pointer"
          onClick={() => setView(!view)}
        >
          Open Projects
        </button>
      </div>

    </div>

      {view && (

      <div className="relative flex gap-2 my-5 p-3 pt-3 border">

        <button className="absolute top-0 right-2 p-1 text-lg text-red-600 border border-red-600"
        onClick={() => setView(false)}
        >
          x
        </button>

        <button className="nav-btn" onClick={() => handleClick(<Dashboard />)}>
          Active Users
        </button>

        <button
          className="nav-btn"
          onClick={() => handleClick(<OrderDashboard />)}
        >
          Order Summary
        </button>

        <button className="nav-btn" onClick={() => handleClick(<TopSelling />)}>
          Top Selling
        </button>

        <button className="nav-btn" onClick={() => handleClick(<BgChanger />)}>
          Bg Changer
        </button>

        <button
          className="nav-btn"
          onClick={() => handleClick(<PasswordGen />)}
        >
          Password Gen
        </button>

        <button className="nav-btn" onClick={() => handleClick(<FinalBox />)}>
          Language Trans
        </button>

      </div>
      )}

      <div className="bg-taupe-100 p-7 min-h-50 rounded-lg border-2 border-taupe-500 border-dashed">
        {content ? (
          content
        ) : (
          <div className="empty-state">
            <p>No component selected. Click a button above to display data.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Parent;
