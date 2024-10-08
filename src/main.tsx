import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/about/about";
import Contact from "./routes/contact";
import Error from "./routes/error-page";
import Portfolio from "./routes/portfolio";
import Resume from "./routes/resume";
import Root from "./routes/root";
import AppBar from "./components/AppBar/AppBar";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
    errorElement: <Error />,
  },
  {
    path: '/resume',
    element: <Resume />,
    errorElement: <Error />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <Error />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppBar />
    <RouterProvider router={router} />
  </StrictMode>
);
