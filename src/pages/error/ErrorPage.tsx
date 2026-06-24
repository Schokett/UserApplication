import { useRouteError, type ErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  return (
    <div>
      Ooops! <i>{error.statusText}</i>
    </div>
  );
}
export default ErrorPage;
