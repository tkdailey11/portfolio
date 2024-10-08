import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage, ErrorPage } from "./routes";
import AppBar from "./components/AppBar";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppBar />
    <RouterProvider router={router} />
  </StrictMode>
);
