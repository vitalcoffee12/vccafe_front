import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
