import React, { useMemo } from 'react'
import { orders } from '../ordersData'
import '../App.css'

const OrderDashboard = () => {
  const memoizedOrderFunction = useMemo(() => {
    console.log('Function runs once...');
    return orders.reduce((acc, order) => {
      if (!acc[order.status]) acc[order.status] = { count: 0, customers: [], totalRevenue: 0 }
      acc[order.status].count++;
      acc[order.status].customers.push(order.customer);
      if (order.status === 'completed') acc[order.status].totalRevenue += order.total;
      return acc;
    }, {})
  }, [orders])

  const convertedToArray = Object.entries(memoizedOrderFunction)
  let orderSequence = ['pending', 'completed', 'canceled'];
  let sortedArray = convertedToArray.sort((a, b) => orderSequence.indexOf(a[0]) - orderSequence.indexOf(b[0]))

  return (
    <div className="order-mgmt-container">
      <h1>Order Management Dashboard</h1>
      
      <div className="total-badge">
        Total Orders in System: {orders.length}
      </div>

      <section className="order-status-grid">
        {sortedArray.map(([status, data]) => (
          <div key={status} className={`status-card ${status}`}>
            <h2>{status}</h2>
            <p><strong>Quantity:</strong> {data.count}</p>
            
            {status === 'completed' && (
              <span className="revenue-text">
                💰 Total Revenue: ${data.totalRevenue.toLocaleString()}
              </span>
            )}

            <h4 className="customer-list-title">Customer History</h4>
            <ol className="customer-ol">
              {data.customers.map((customer, index) => (
                <li key={index}>{customer}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  )
}

export default OrderDashboard