import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/AppRouter";

export default function App() {
  return <RouterProvider router={router} />;
}
