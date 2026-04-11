import React from 'react'
import { useMemo } from 'react'
import { orders } from '../ordersData'
import '../Order.css'

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

const convertedToArray = Object.entries(memoizedOrderFunction)
let orderSequence = ['pending', 'completed', 'canceled'];
let sortedArray = convertedToArray.sort((a, b) => orderSequence.indexOf(a[0]) - orderSequence.indexOf(b[0]))
    // console.log(memoizedOrderFunction);
    console.log('In arr: ', convertedToArray);
    console.log('In sort arr: ', sortedArray);
    
    
  return (
    <>
    <h1>Order Management Dashboard</h1>
    <section>

    <h2>ORDER SUMMARY</h2>
    <h3>Total Orders in the System: {orders.length}</h3>

    <div className='order-status'>
        {sortedArray.map(([status, data]) => (
            <div key={status} className='order-data'>
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
    </section>
    </>
  )
}

export default OrderDashboard
