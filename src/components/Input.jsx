import React from "react";

const Input = (props) => {
  const { user, setUser, password, setPassword } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};

export default Input;
