import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import OrderDashboard from './OrderDashboard.jsx'
import TopSelling from './TopSelling.jsx'



createRoot(document.getElementById('loadedfries')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dashboard /> */}
    {/* <OrderDashboard /> */}
    <TopSelling/>
  </StrictMode>,
)
