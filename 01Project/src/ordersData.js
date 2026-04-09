// 💼 Exercise: Order Management Dashboard (Real World)

// Scenario:
// You’re building a dashboard for an e-commerce admin panel.
// The backend sends a list of orders, and your job is to analyze
// and display meaningful summaries.


export const orders = [
    {   id: 1, 
        customer: 'Alina',
        status: 'completed',
        total: 190,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'socks', price: 30, quantity: 3},
        ]
    },
    {   id: 2, 
        customer: 'Benty',
        status: 'completed',
        total: 130,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'belt', price: 30, quantity: 1},
        ]
    },
    {
        id: 3, 
        customer: 'Nina',
        status: 'pending',
        total: 120,
        items: [
            {name: 'shirt', price: 120, quantity: 1},
        ]
    },
    {
        id: 4, 
        customer: 'Leo',
        status: 'canceled',
        total: 220,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'belt', price: 60, quantity: 2},
        ]
    },
    {
        id: 5, 
        customer: 'Steve',
        status: 'canceled',
        total: 220,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
            {name: 'belt', price: 60, quantity: 2},
        ]
    },
    {   id: 6, 
        customer: 'Joe',
        status: 'completed',
        total: 100,
        items: [
            {name: 'shoes', price: 100, quantity: 1},
        ]
    },
]
