import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";

import LoginPage from "../../features/auth/pages/LoginPage";
import GoogleCallback from "../../features/auth/pages/GoogleCallback";

import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  },

  {
    path: "v1/auth/google/callback",
    element: <GoogleCallback />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/",
            element: <div>Dashboard</div>
          }
        ]
      }
    ]
  }
]);