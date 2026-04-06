import React, { useMemo } from 'react'

let actionsList = [
{ id: 1, user: "Alice", type: "login", timestamp: "2026-04-03T10:00:00Z" },
{ id: 2, user: "Bob", type: "purchase", amount: 50, timestamp: "2026-04-03T10:05:00Z" },
{ id: 2, user: "Michelle", type: "purchase", amount: 80, timestamp: "2026-04-03T10:09:00Z" },
{ id: 3, user: "Alice", type: "comment", content: "Nice post!", timestamp: "2026-04-03T10:07:00Z" },
{ id: 3, user: "Anna", type: "comment", content: "Great!", timestamp: "2026-04-03T10:07:00Z" },
]  //e.g; data received from API


const Dashboard = () => {


    const cashedList = useMemo(() => {

        return actionsList.reduce((acc, list) => {

            if(!acc[list.type]){
                acc[list.type] = { count: 0, users: [], totalAmount: 0}
            }
            
            acc[list.type].count++;
            acc[list.type].users.push(list.user);

            if(list.type === 'purchase'){

                acc[list.type].totalAmount += list.amount;
            }
            return acc;
        }, {})

    }, [actionsList])


    console.log(cashedList);
    
  return (
    <>
    <h1>Dashboard</h1>

    <ul>
        {Object.entries(cashedList).map(([type, data]) => (
            <li key={type}>
                <h2>{type}</h2>
                Count: {data.count} <br />
                {type === 'purchase' && <span> Total Amount: {data.totalAmount}</span>}
                <h4>Users: </h4>
                <ol>
                    {data.users.map((user, index) => (
                        <li key = {index}>{user}</li>
                    ))}
                </ol>
            </li>
        ))}
    </ul>
    </>
  )
}

export default Dashboard




// 💼 Exercise: User Activity Dashboard

// Scenario:
// You’re building a small dashboard for a web app that tracks user activities on a platform. 
// Users can perform different types of actions: 
// "login", "purchase", "comment", "like". 
// You need to summarize these actions in real-time.