import React from 'react'
import ReactDOM from 'react-dom/client'
import CardList from './CardList'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Form } from './Components/Form/form.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardList/>,
  },
  {
    path: "/new",
    element: <Form/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
