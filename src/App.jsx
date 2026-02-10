import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Daskbord from "./pages/Daskbord";
import AuthGuard from "./auth/AuthGuard";

const DefaultRoute = () => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    return <Navigate to="/daskbord" replace />;
  }
  return <Navigate to="/login" replace />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },

    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
          <Register />
        </AuthGuard>
      ),
    },
    {
      path: "/daskbord",
      element: (
        <AuthGuard required={true}>
          <Daskbord />
        </AuthGuard>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
