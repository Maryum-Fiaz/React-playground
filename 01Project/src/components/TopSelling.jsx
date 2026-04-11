import React, { useState } from 'react'
import { orders } from '../ordersData'

const TopSelling = () => {
  let [count, setCount] = useState(0);

  function getSoldItemsSummary(orders) {
    console.log('Calculating again... even not needed');
    
    return orders.reduce((acc, order) => {
      if (order.status === 'completed') {
        order.items.forEach(item => {
          if (!acc[item.name]) {
            acc[item.name] = 0
          }
          acc[item.name] += item.quantity;
        })
      }
      return acc;
    }, {})
  }

  function getTopSellingItem() {
    const itemsObj = getSoldItemsSummary(orders);
    let maxKey = "No items sold yet";
    let maxValue = -Infinity; /** New thing learned **/

    for (let [key, value] of Object.entries(itemsObj)) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }
    return { maxKey, maxValue }
  }

  const topItemObj = getTopSellingItem()

  return (
    <>
    <div className="counter-section">
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          Refresh UI State ({count})
        </button>
        <span> (Check console: memo not used so re-calculate on each click)</span>


      </div>
    <section className="top-selling-card">
      <h1>Top Selling</h1>
      
      <div className="highlight-box">
        <span className="stat-label">Most Popular Choice</span>
        <h2 className="item-name">{topItemObj.maxKey}</h2>
        <div className="quantity-badge">
          {topItemObj.maxValue} Units Sold
        </div>
      </div>

      <div className="extra-section"><span className='spanned'>-Infinity</span> Used here (as starting "Maximum" variable)<br />
      <span className='spanned'>e.g: let maxValue = -Infinity;</span> <br />
        It is a value smaller than any other number in existence.
      </div>
    </section>
    </>
  )
}

export default TopSelling