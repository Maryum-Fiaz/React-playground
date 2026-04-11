import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
import OrderDashboard from './components/OrderDashboard';
import TopSelling from './components/TopSelling';

function Parent() {

    const [content, showContent] = useState(null)
    const [reset, setReset] = useState(false)

    function handleClick(componentToShow){
        setReset(false)
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
    <button onClick={()=> setReset(true)}>Reset</button>

    <hr />

    <div>
        {reset === false && content}
    </div>
    </>
  )
}

export default Parent