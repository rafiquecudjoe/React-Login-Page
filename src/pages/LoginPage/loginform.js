import React, { useEffect, useState } from "react";
import "./Loginform.css";
import pic from "./avatar.png";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


useEffect(() => {
  console.log('Helooo')
  
}, [username])
  
  
 
  
  // useEffect(() => {
  //   console.log('Hiiiiiii')


  // },[password])
  
  
  
  
  function UpdateUsername(e) {
    setUsername(e.target.value);
  }

  function UpdatePassword(e) {
    setPassword(e.target.value);
  }

  

  function submit(e) {
    e.preventDefault();

    //sends the username and passowrd to the server
    fetch("google.com", { username, password }).then(
      (response) => {},
      (err) => err
    );
  }

  return (
    <div className="loginbox">
      <img src={pic} className="avatar" alt="avatarimg"/>
      <h1>Login Here</h1>

      <form>
        <div>
          <label htmlFor="">Username</label>

          <input
            className="form-control"
            type="text"
            value={username}
            onChange={UpdateUsername}
            placeholder="Enter Username"
          />
        </div>

        <div>
          <label htmlFor="">Password</label>

          <input
            classname="form-Control"
            value={password}
            onChange={UpdatePassword}
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <button className="login-btn" onClick={submit}>
          Login
        </button>
        {/* <button className="cancel-btn">Cancel</button> */}

        <div className="footer">
          <a href="#">Lost your passowrd?</a>
          <a href="#">Dont have an account?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
