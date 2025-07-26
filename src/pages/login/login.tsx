import React, { useState } from 'react';

import lendsqrLogo from '../../assets/lendSqrLogo.svg';
import loginIllustration from '../../assets/illustratorLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

export default function LoginForm() {
  const navigate = useNavigate();
  const { setUserData } = useAppContext();
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formUser.email.split('@')[0];
    const userData = { email: formUser.email, name };

    setUserData(userData);

    navigate('/app/users');
  };

  return (
    <div className="loginContainer">
      <div className="illustrationSection">
        <img src={lendsqrLogo} alt="Lendsqr Logo" className="logo" />
        <img
          src={loginIllustration}
          alt="Login Illustration"
          className="illustrationImage"
        />
      </div>

      <div className="formSection">
        <div className="section-content">
          <h1 className="welcomeHeading">Welcome!</h1>
          <p className="enterDetailsText">Enter details to login.</p>

          <form onSubmit={handleSubmit} className="loginForm">
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formUser.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formUser.password}
                onChange={handleChange}
                required
              />
              <span
                className="showHideToggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </span>
            </div>

            <a href="#" className="forgotPasswordLink">
              FORGOT PASSWORD?
            </a>
            <button type="submit" className="teal-btn loginButton">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
