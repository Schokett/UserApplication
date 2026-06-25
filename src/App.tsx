import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./pages/overview/Overview";
import ProfilEdit from "./pages/Profil/ProfilEdit";
import ProfilCreate from "./pages/Profil/ProfilCreate";
import ErrorPage from "./pages/error/ErrorPage";
import Help from "./pages/help/Help";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Overview /> },
        { path: "Overview", element: <Overview /> },
        { path: "Create", element: <ProfilCreate /> },
        { path: "Edit/:itemId", element: <ProfilEdit /> },
        { path: "help", element: <Help /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
