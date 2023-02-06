import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const loginDetails = JSON.parse(localStorage.getItem("data"));
    const LoginSuccess = loginDetails.find(
      (user) => user.Email === email && user.Password === password && user.Email !== ""
    );

    if (!LoginSuccess) {
        setError("Invalid Email and password");
        return
       
    } 
    console.log(LoginSuccess)
    localStorage.setItem("currentagent", JSON.stringify(LoginSuccess.Username))
    navigate("/booking");
      

    }
  

  return (
    <>
      <div className="agent-login-main-container">
        <div className="agent-login-sub-container">
          <h1 className="login-heading">Login</h1>
          <form onSubmit={onSubmitLogin} className="agent-login-form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="agent-login-input"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="agent-login-input"
              type="password"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
           {error && <p className="err">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;