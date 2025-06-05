import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./components/errorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
