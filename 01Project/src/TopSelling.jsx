import React from 'react'
import { orders } from './ordersData'

const TopSelling = () => {

    // const res = orders.forEach( order => {
    //     if(order.status === 'completed'){
    //     return order.items.reduce((acc, item) => {
    //         if(!acc[item.name]) {
    //           item.name
    //         }
    
    //         return acc;
    //       }, {})
    //     }
    //   })

    function gettingItems (orders){

      return orders.reduce((acc, order) => {
          if(order.status === 'completed'){
            order.items.forEach(item => {

              if(!acc[item.name]) {
                acc[item.name] = 0
              }

              acc[item.name] += item.quantity;

            })
          }
          return acc;

          }, {})
    }

  function calculateTop() {

    const itemsObj = gettingItems(orders);

    let maxKey = null;
    let maxValue = -Infinity; // *** NEW THING: -Infinity will act as lowest than all ***

    for(let [key, value] of Object.entries(itemsObj)){
      if(value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }

    return {maxKey, maxValue}
  }

  const topItemObj = calculateTop()

    console.log('res: ', Object.entries(topItemObj))


  return (
    <section>
        <h2>Top Selling Items</h2>
        <div>
          <h2>{topItemObj.maxKey}</h2>
          <h3>Quantity: {topItemObj.maxValue}</h3>
        </div>
    </section>
  )
}

export default TopSelling