import { useRouteError, ErrorResponse } from 'react-router-dom';

export const ErrorPage = () => {
  const { status, statusText } = useRouteError() as ErrorResponse;

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{status || statusText}</i>
      </p>
    </div>
  );
};
