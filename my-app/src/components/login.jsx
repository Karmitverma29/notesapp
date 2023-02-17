import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate=useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const logindata = {
      email: email,
      password: password,
    };
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(logindata),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        Navigate("/notes")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="container">
      <h1>LOGIN UP</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          placeholder="Your Email address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
