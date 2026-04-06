import React from 'react'

let actionsList = [
{ id: 1, user: "Alice", type: "login", timestamp: "2026-04-03T10:00:00Z" },
{ id: 2, user: "Bob", type: "purchase", amount: 50, timestamp: "2026-04-03T10:05:00Z" },
{ id: 2, user: "Michelle", type: "purchase", amount: 80, timestamp: "2026-04-03T10:09:00Z" },
{ id: 3, user: "Alice", type: "comment", content: "Nice post!", timestamp: "2026-04-03T10:07:00Z" },
{ id: 3, user: "Anna", type: "comment", content: "Great!", timestamp: "2026-04-03T10:07:00Z" },
]  //e.g; data received from API

function Dashboard() {


    const grp = () => {

        let newobj = {};
        actionsList.forEach(list => {
            if(newobj[list.type]){
                newobj[list.type].count++;
                newobj[list.type].users.push(list.user)

            } else {
                newobj[list.type] = {};
                newobj[list.type].users = [list.user];
                newobj[list.type].count = 1
            }

            if(list.type === 'purchase'){

                if(newobj[list.type].totalAmount === undefined){
                    newobj[list.type].totalAmount = 0;
                }
                newobj[list.type].totalAmount += list.amount
            }
        })
        return newobj; // returning an object
    }

    const grpCall = grp();

    console.log(grp())

  return (
    <>
    <h1>Dashboard</h1>
    <p>Summary of users actions by type in real time is shown below</p>

    <ul>
        {Object.entries(grpCall).map(([type, data]) => (
            <li key = {type}>
                <h2>{type}:</h2> <br />
                 Count: {data.count} <br />
                 User Names: {data.users} <br />
                {type === 'purchase' && <span> Total Amount : {data.totalAmount}</span>}
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