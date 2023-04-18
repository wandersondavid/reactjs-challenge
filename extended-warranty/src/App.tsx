
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello wodddrld!</div>,
    },
    {
      path: "/shophing-cart",
      element: <div>Hello test!</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App