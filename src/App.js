import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Allproducts from "./pages/allproducts/Allproducts";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Main from "./pages/main/Main";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import AddProduct from "./pages/admin/pages/AddProduct";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";

// Protected Routes For Admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("ebharat"));
  console.log(admin);
  if (admin?.email === "sonusharma30.09.2004@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "allproducts",
        element: <Allproducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "nopage",
        element: <NoPage />,
      },
      {
        path: "admin/dashboard",
        element: (
          <ProtectedRoutesForAdmin>
            <Dashboard />
          </ProtectedRoutesForAdmin>
        ),
      },
      {
        path: "admin/addproduct",
        element: (
          <ProtectedRoutesForAdmin>
            <AddProduct />
          </ProtectedRoutesForAdmin>
        ),
      },
      {
        path: "/admin/updateproduct",
        element: (
          <ProtectedRoutesForAdmin>
            <UpdateProduct />
          </ProtectedRoutesForAdmin>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;

export const ProtectedRoutesForUser = ({ children }) => {
  if (localStorage.getItem("ebharat")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
