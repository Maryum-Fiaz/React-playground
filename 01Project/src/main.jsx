import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import Parent from './components/Parent.jsx'
import PasswordGen from './smallProjects/PasswordGen.jsx'
import InputBox from './smallProjects/language-translator/InputBox.jsx'
import FinalBox from './smallProjects/language-translator/FinalBox.jsx'
import RootDashboard from './smallProjects/Dashboards/RootDashboard.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Dashboard from './components/Dashboard.jsx'
import OrderDashboard from './components/OrderDashboard.jsx'
import TopSelling from './components/TopSelling.jsx'
import BgChanger from './smallProjects/BgChanger.jsx'
import Grocery from './smallProjects/redux-toolkit/Grocery.jsx'
import Github from './smallProjects/github-profile/Github.jsx'
import { githubInfo } from './smallProjects/github-profile/githubInfo.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Parent />}>
      <Route path='bg-changer' element={<BgChanger />} />
      <Route path='password-gen' element={<PasswordGen />} />
      <Route path='language-trans' element={<FinalBox />} />
      <Route loader={githubInfo} path='github-profile' element={<Github />} />
      <Route path='grocery-list' element={<Grocery />} />

      <Route path='dashboard' element={<RootDashboard />}>
        <Route path='activeUsers' element={<Dashboard />} />
        <Route path='orderSummary' element={<OrderDashboard />} />
        <Route path='topSelling' element={<TopSelling />} />
      
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

