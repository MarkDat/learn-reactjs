import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home'
import ManagerUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/Dashboard';
import {StoreProvider} from './components/User/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "users",
        element: <User />,
      },
      {index: true, element: <Home />},
    ]
  },
  {
    path: "/admins",
    element: <Admin />,
    children: [
      {
        path: "manage-users",
        element: <ManagerUser />,
      },
      {index: true, element: <Dashboard />},
    ]
  }
]);


root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
