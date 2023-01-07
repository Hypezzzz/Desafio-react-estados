import React from "react";

const ErrorHandler = (props) => {
  const { errorMessage } = props;

  return <p>{errorMessage}</p>;
};

export default ErrorHandler;
