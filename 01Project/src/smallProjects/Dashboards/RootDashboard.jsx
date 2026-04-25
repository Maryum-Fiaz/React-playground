import React from 'react'
import Dashboard from '../../components/Dashboard'
import OrderDashboard from '../../components/OrderDashboard'
import TopSelling from '../../components/TopSelling'
import { Link } from 'react-router'

export default function RootDashboard() {


    const components = [
        {label: "Active Users", component: <Dashboard />, address: "/dashboard/activeUsers"},
        {label: "Order Summary", component: <OrderDashboard />, address: "/orderSummary"},
        {label: "Top Selling", component: <TopSelling />, address: "/topSelling"},
    ]


  return (
    <>
    <div className='flex justify-center gap-2 bg-mauve-200 p-4 rounded-b-md'>
        {components.map(({label, component, address}) => (
            <button key={label} className='bg-mauve-600 text-mauve-50 border-2 border-mauve-800 rounded-lg py-2 px-2'>
                <Link to={address}>
                    {label}
                </Link>
            </button>
        ))}
    </div>

    </>
  )
}
