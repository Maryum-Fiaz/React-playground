import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
import OrderDashboard from './components/OrderDashboard';
import TopSelling from './components/TopSelling';

function Parent() {

    const [content, showContent] = useState(null)

    function handleClick(componentToShow){
        showContent(componentToShow);
    }
  return (
    <>
    <h1>Parent</h1>
    <h5>Click buttons below: </h5>

    <hr />

    <button onClick={() => handleClick(<Dashboard />)}>Active User Dashboard</button>
    <button onClick={() => handleClick(<OrderDashboard />)}>Order Summary</button>
    <button onClick={() => handleClick(<TopSelling />)}>Top Selling</button>
    <button onClick={()=> handleClick(null)}>Reset</button> {/* If content is null, nothing shows. */}

    <hr />

    <div>
        {content}
    </div>
    </>
  )
}

export default Parent