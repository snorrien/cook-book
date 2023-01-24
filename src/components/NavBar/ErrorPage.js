import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Упс!</h1>
      <p>Такой страницы не существует</p>
    </div>
  );
}

export default ErrorPage;