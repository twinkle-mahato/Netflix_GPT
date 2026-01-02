import Login from "./Login";
import Browse from "./Browse";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />, 
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*", // catch-all for any undefined route
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
