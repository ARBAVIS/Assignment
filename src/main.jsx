import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Dashboard from './components/Dashboard.jsx'
import PostJob from './pages/postJob.jsx';
import App from './App.jsx'
const route=createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:'/dashboard',
  element:<Dashboard/>
},{
  path:'/jobPost',
  element:<PostJob/>
}])

const root=createRoot(document.getElementById('root'))
root.render(
  <>
  <RouterProvider router={route}/>
  </>
)
