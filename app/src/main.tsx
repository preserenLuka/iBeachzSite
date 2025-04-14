import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage.tsx";
import Welcome from "./components/welcome.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/content",
    element: <App />,
    children: [
      {
        path: ":contentName",
        element: <App />,
      },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Wrapping with RouterProvider */}
  </StrictMode>
);
