import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./views/SignIn";

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
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
