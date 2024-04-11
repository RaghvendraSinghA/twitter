import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Forms, { ram } from './component/Forms.jsx'
import Cardlist from './component/Cardlist.jsx'



const router = createBrowserRouter([{
  path: "/", element: <App />,
  children: [
    { path: "/", element: <Cardlist /> },
    { path: "/form", element: <Forms />, action: ram }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
