import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
