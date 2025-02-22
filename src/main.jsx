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
import AuthProvider from './components/Auth/AuthProvider.jsx';
import Private from './components/Routes/Private.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

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
        element:<Private><AddTask></AddTask></Private>
      },
      {
        path:'/manageTask',
        element:<Private><ManageTask></ManageTask></Private>
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
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
  </StrictMode>,
)
