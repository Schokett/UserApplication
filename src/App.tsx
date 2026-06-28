import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./pages/overview/Overview";
import Welcome from "./pages/welcome/Welcome";
import ProfilEdit from "./pages/Profil/ProfilEdit";
import ProfilCreate from "./pages/Profil/ProfilCreate";
import ErrorPage from "./pages/error/ErrorPage";
import Help from "./pages/help/Help";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Welcome /> },
          { path: "overview", element: <Overview /> },
          { path: "create", element: <ProfilCreate /> },
          { path: "edit/:id", element: <ProfilEdit /> },
          { path: "help", element: <Help /> },
        ],
      },
    ],
    {
      basename: "/UserApplication",
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
