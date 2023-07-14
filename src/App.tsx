import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";
import Error from "./views/Error";
import Board from "./views/Board";

import { Provider } from "react-redux";
import store from "./reducer/store";
import MyEditor from "./components/MyEditor";
import Login from "./views/Login";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/board/:id",
        element: <Board />,
      },
      {
        path: "/search",
        element: <Login />,
      },
      {
        path: "/battle",
        element: <MyEditor />,
      },
      {
        path: "/event",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}
