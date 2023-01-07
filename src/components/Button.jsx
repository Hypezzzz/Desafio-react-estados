import React from "react";

const Button = (props) => {
  const { onClick } = props;
  return (
    <button type="submit" onClick={onClick}>
      Log In
    </button>
  );
};

export default Button;
