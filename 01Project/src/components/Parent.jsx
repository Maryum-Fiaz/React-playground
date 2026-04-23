import React, { useState } from "react";
import Dashboard from "./Dashboard";
import OrderDashboard from "./OrderDashboard";
import TopSelling from "./TopSelling";
import BgChanger from "../smallProjects/BgChanger";
import PasswordGen from "../smallProjects/PasswordGen";
import FinalBox from "../smallProjects/language-translator/FinalBox";

function Parent() {
  const [content, showContent] = useState(null);
  const [view, setView] = useState(false);

  const projects = [
    { label: "Active Users", component: <Dashboard /> },
    { label: "Order Summary", component: <OrderDashboard /> },
    { label: "Top Selling", component: <TopSelling /> },
    { label: "Bg Changer", component: <BgChanger /> },
    { label: "Password Gen", component: <PasswordGen /> },
    { label: "Language Trans", component: <FinalBox /> },
  ];

  function handleClick(componentToShow) {
    showContent(componentToShow);
  }

  return (
    <div className="p-9 bg-mauve-900 min-h-screen font-mono">
      <h1 className="text-5xl font-bold my-3 text-mauve-500">
        Project Control Center
      </h1>

      <div className="flex justify-between items-center mb-7">
        <h5 className="italic text-mauve-300 text-sm tracking-widest uppercase">
          Select the button to view details:
        </h5>

        <div className="flex gap-3">
          <button
            className="border-2 border-red-400 text-red-400 bg-red-100 py-3 px-6 rounded-lg hover:-translate-y-1 transition duration-300"
            onClick={() => handleClick(null)}
          >
            ↺ Reset View
          </button>
          <button
            className="bg-taupe-300 text-mauve-800 border-2 border-mauve-500 rounded-lg font-semibold py-3 px-4 cursor-pointer hover:-translate-y-1 hover:bg-mauve-300 transition duration-300"
            onClick={() => setView(!view)}
          >
            ⊞ Open Projects
          </button>
        </div>
      </div>

      {view && (
        <div className="relative w-full flex flex-wrap justify-center gap-3 p-5 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <button
            className="absolute top-2 right-3 text-sm px-2 py-1 rounded-md border border-red-400 text-red-300 hover:scale-105 transition"
            onClick={() => setView(false)}
          >
            x
          </button>

          {projects.map(({ label, component }) => (
            <button
              key={label}
              className="border-2 border-mauve-400 bg-mauve-100 text-mauve-700 font-semibold py-3 px-6 rounded-lg hover:-translate-y-1 hover:bg-mauve-300 transition duration-300"
              onClick={() => handleClick(component)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="bg-mauve-100 p-7 min-h-50 rounded-lg border-2 border-mauve-500 border-dashed">
        {content ? (
          content
        ) : (
          <div className="text-center text-mauve-700">
            <p>No component selected. Click a button above to display data.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Parent;
