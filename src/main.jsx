import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>

      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
