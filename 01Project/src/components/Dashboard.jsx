import React, { useMemo, useState } from 'react'
import '../App.css' // Import the new styles

let actionsList = [
  { id: 1, user: "Alice", type: "login", timestamp: "2026-04-03T10:00:00Z" },
  { id: 2, user: "Bob", type: "purchase", amount: 50, timestamp: "2026-04-03T10:05:00Z" },
  { id: 2, user: "Michelle", type: "purchase", amount: 80, timestamp: "2026-04-03T10:09:00Z" },
  { id: 3, user: "Alice", type: "comment", content: "Nice post!", timestamp: "2026-04-03T10:07:00Z" },
  { id: 3, user: "Anna", type: "comment", content: "Great!", timestamp: "2026-04-03T10:07:00Z" },
]

const Dashboard = () => {
  let [count, setCount] = useState(0);

  const cashedList = useMemo(() => {
    console.log('Calculating... (Memo in action!)');
    return actionsList.reduce((acc, action) => {
      if(!acc[action.type]){
        acc[action.type] = { count: 0, users: [], totalAmount: 0}
      }
      acc[action.type].count++;
      acc[action.type].users.push(action.user);
      if(action.type === 'purchase'){
        acc[action.type].totalAmount += action.amount;
      }
      return acc;
    }, {})
  }, []) // Empty array because actionsList is static here

  return (
    <div className="activity-dashboard">
      <h1>User Activity</h1>

      <div className="counter-section">
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          Refresh UI State ({count})
        </button>
        <span>(Check console: memo won't re-calculate)</span>
      </div>

      <ul className="activity-list">
        {Object.entries(cashedList).map(([type, data]) => (
          <li key={type} className="activity-item">
            <h2>{type}</h2>
            <div className="activity-stats">
              Quantity: {data.count}
              {type === 'purchase' && (
                <span className="amount-label">| Total: ${data.totalAmount}</span>
              )}
            </div>
            
            <ul className="user-pills">
              {data.users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard