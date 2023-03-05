import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../Components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
