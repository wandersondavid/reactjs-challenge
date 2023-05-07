
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Buying } from "./pages/Buying";
import { Success } from "./pages/Success";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/buying",
      element: <Buying />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App