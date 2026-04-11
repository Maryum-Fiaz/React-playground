import React, { useState } from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import OrderDashboard from './components/OrderDashboard';
import TopSelling from './components/TopSelling';

function Parent() {
  const [content, showContent] = useState(null)

  function handleClick(componentToShow) {
    showContent(componentToShow);
  }

  return (
    <div className="page-container">
      <h1 className="main-title">Project Control Center</h1>
      <h5 className="sub-title">Select a dashboard to view details:</h5>

      <div className="button-group">
        <button className="nav-btn" onClick={() => handleClick(<Dashboard />)}>
          Active Users
        </button>
        
        <button className="nav-btn" onClick={() => handleClick(<OrderDashboard />)}>
          Order Summary
        </button>
        
        <button className="nav-btn" onClick={() => handleClick(<TopSelling />)}>
          Top Selling
        </button>
        
        <button className="nav-btn reset-btn" onClick={() => handleClick(null)}>
          Reset View
        </button>
      </div>

      <div className="display-area">
        {content ? (
          content
        ) : (
          <div className="empty-state">
            <p>No component selected. Click a button above to display data.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Parent