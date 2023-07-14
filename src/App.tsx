import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";
import Error from "./views/Error";

import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";

import Login from "./views/Login";
import Character from "./views/Character";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user/character",
        element: <Character />,
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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />;
      </PersistGate>
    </Provider>
  );
}
