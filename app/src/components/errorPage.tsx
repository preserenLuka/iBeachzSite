// components/ErrorPage.tsx
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "../css/error.css"; // Optional: your own styling

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong.";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} - ${error.statusText}`;
    message = error.data || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="error-container">
      <h1>⚠️ {title}</h1>
      <p>{message}</p>
      <a href="/" className="error-home-link">
        ← Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
