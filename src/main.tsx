import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, ErrorPage, PortfolioPage, ResumePage, RootPage } from "./routes";
import {AppBar} from "./components";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/resume',
    element: <ResumePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppBar />
    <RouterProvider router={router} />
  </StrictMode>
);
