import { useState } from "react";

import logoLab from "./assets/logo.png";
import line from "./assets/Line.png"
import "./style.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logoLab} alt="Logo" />
            </span>
            <span className="login-form-title">
              {" "}
              O projeto de rede social da Labenu
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Continuar</button>
            </div>

            <span className="LINE">
              <img src={line} width={280} alt="Line" />
            </span>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Crie uma conta!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
