import React, { useState } from "react";
import "./signup.css";
import { useNavigate} from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const Navigate=useNavigate();
  const handleSignUp = () => {
    const signupData = {
      name: name,
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Navigate("/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="container">
      <h1>SIGN UP</h1>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="email"
        type="text"
        placeholder="Your Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default SignUp;
