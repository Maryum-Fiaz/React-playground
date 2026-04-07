import React from 'react'
import { useMemo } from 'react'
import './Order.css'

let orders = [
    {   id: 1, 
        customer: 'Alina',
        status: 'completed',
        total: 190,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'socks', price: 30, quantity: 3},
        ]
    },
    {   id: 1, 
        customer: 'Benty',
        status: 'completed',
        total: 130,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'socks', price: 30, quantity: 1},
        ]
    },
    {
        id: 2, 
        customer: 'Nina',
        status: 'pending',
        total: 120,
        items: [
            {name: 'shirt', price: 120, quantity: 1},
        ]
    },
    {
        id: 3, 
        customer: 'Leo',
        status: 'canceled',
        total: 220,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'belt', price: 60, quantity: 2},
        ]
    },
    {
        id: 4, 
        customer: 'Steve',
        status: 'canceled',
        total: 220,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'belt', price: 60, quantity: 2},
        ]
    },
]

const OrderDashboard = () => {

    const memoizedOrderFunction = useMemo(() => {

        console.log('Function runs once... bcz of memo hook');
        
      return orders.reduce((acc, order) => {
            if(!acc[order.status]) acc[order.status] = { count: 0, customers: [], totalRevenue: 0}
    
            acc[order.status].count++;
            acc[order.status].customers.push(order.customer);

            if(order.status === 'completed') acc[order.status].totalRevenue += order.total;
    
            return acc;
        }, {})
    }, [orders])

const arr = Object.entries(memoizedOrderFunction)
    console.log(memoizedOrderFunction);
    console.log('In arr: ', arr);
    
    
  return (
    <>
    <h1>Order Management Dashboard</h1>
    <h3>Total Orders in the System: {orders.length}</h3>

    <div className='order-status'>
        {Object.entries(memoizedOrderFunction).map(([status, data]) => (
            <div key={status}>
                <h2>{status}</h2>
               <h4>Count: {data.count}</h4>
                {status === 'completed' && <span>Total Revenue: {data.totalRevenue}</span>} <br />
                <h4>Customers: </h4>
                <ol>
                    {data.customers.map((customer, index) => (
                        <li key={index}>{customer}</li>
                    ))}
                </ol>
            </div>
        ))}
    </div>


    </>
  )
}

export default OrderDashboard


// 💼 Exercise: Order Management Dashboard (Real World)

// Scenario:
// You’re building a dashboard for an e-commerce admin panel.
// The backend sends a list of orders, and your job is to analyze
// and display meaningful summaries.