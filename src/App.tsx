import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./views/SignIn";
import Error from "./views/Error";
import Board from "./views/Board";
import { BoardNotice, BoardWorld } from "./resources/Boards";
import { Provider } from "react-redux";
import store from "./reducer/store";
import MyEditor from "./components/MyEditor";

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
      {
        path: "/board/:id",
        element: <Board />,
      },
      {
        path: "/search",
        element: <SignIn />,
      },
      {
        path: "/battle",
        element: <MyEditor />,
      },
      {
        path: "/event",
        element: <SignIn />,
      },
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
