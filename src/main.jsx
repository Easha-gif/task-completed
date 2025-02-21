import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Routes/Home.jsx';
import AddTask from './components/Routes/AddTask.jsx';
import Login from './components/Routes/Login.jsx';
import ManageTask from './components/Routes/ManageTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addTask',
        element:<AddTask></AddTask>
      },
      {
        path:'/manageTask',
        element:<ManageTask></ManageTask>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
