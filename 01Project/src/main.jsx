import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import OrderDashboard from './components/OrderDashboard.jsx'
import TopSelling from './components/TopSelling.jsx'
import Parent from './Parent.jsx'



createRoot(document.getElementById('loadedfries')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dashboard /> */}
    {/* <OrderDashboard /> */}
    {/* <TopSelling/> */}
    <Parent />
  </StrictMode>,
)
