import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Filieres from "./views/Filieres";
import Home from "./views/Home";
import Login from "./views/Login";
import NiveauView from "./views/NiveauView";
import Niveaux from "./views/Niveaux";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import ResetPassword from "./views/ResetPassword";
import Stagiaires from "./views/Stagiaires";
import StagiaireView from "./views/StagiaireView";
import FiliereView from "./views/FiliereView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Home />
      },
      {
        path: "/stagiaires",
        element: <Stagiaires />
      },
      {
        path: "/stagiaires/create",
        element: <StagiaireView />
      },
      {
        path: "/stagiaires/:id",
        element: <StagiaireView />
      },
      {
        path: "/filieres",
        element: <Filieres />
      },
      {
        path: "/filieres/create",
        element: <FiliereView />
      },
      {
        path: "/filieres/:id",
        element: <FiliereView />
      },
      {
        path: "/niveaux",
        element: <Niveaux />
      },
      {
        path: "/niveaux/create",
        element: <NiveauView />
      },
      {
        path: "/niveaux/:id",
        element: <NiveauView />
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <NotFound />,
    children: [
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/reset-password",
            element: <ResetPassword />
        },
    ],
  }
]);

export default router;
