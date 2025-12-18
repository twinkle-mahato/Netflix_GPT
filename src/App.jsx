import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
