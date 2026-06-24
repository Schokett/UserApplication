import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./pages/overview/Overview";
import Edit from "./pages/Profil/Edit";
import Create from "./pages/Profil/Create";
import ErrorPage from "./pages/error/ErrorPage";
import Root from "./pages/root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Overview /> },
        { path: "Overview", element: <Overview /> },
        { path: "Create", element: <Create /> },
        { path: "Edit/:itemId", element: <Create /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
