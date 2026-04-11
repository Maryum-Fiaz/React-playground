import React from 'react'
import { orders } from '../ordersData'

const TopSelling = () => {
  function getSoldItemsSummary(orders) {
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
    let maxValue = 0;

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
    <section className="top-selling-card">
      <h1>Top Selling</h1>
      
      <div className="highlight-box">
        <span className="stat-label">Most Popular Choice</span>
        <h2 className="item-name">{topItemObj.maxKey}</h2>
        <div className="quantity-badge">
          {topItemObj.maxValue} Units Sold
        </div>
      </div>
    </section>
  )
}

export default TopSelling