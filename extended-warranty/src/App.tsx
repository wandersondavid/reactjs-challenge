
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shophing-cart",
      element: <div>Hello test!</div>,
    },
  ]);
console.log(`testet`);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App