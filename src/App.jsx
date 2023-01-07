import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import ErrorHandler from "./components/ErrorHandler";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();

    if (user.trim() === "" || password.trim() === "") {
      setError("Rellene todos los campos");
    } else {
      setError("¡Datos Validos!");
    }
  };

  return (
    <div className="App">
      <Input
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
      />

      {password === "252525" ? <Button onClick={handleOnClick} /> : null}

      {error !== "" ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
}

export default App;
