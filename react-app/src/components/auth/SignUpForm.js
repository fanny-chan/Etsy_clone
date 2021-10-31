import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignupForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [validationErrors, setValidationErrors] = useState({});

  const validateSignup = () => {
    const validationErrors = {};

    if(typeof firstname !== "undefined") {
      const nameRegex = /^[a-zA-Z\-]+$/;
      if(!nameRegex.test(firstname)) {
        validationErrors["first name"] = "Please enter a valid name, first name should only contain characters A-Z, a-z, -"
      }
    }

    if(typeof lastname !== "undefined") {
      const nameRegex = /^[a-zA-Z\-]+$/;
      if(!nameRegex.test(lastname)) {
        validationErrors["last name"] = "Please enter a valid name, last name should only contain characters A-Z, a-z, -"
      }
    }
    if(!username ) {
      validationErrors["username"] = "Please enter a username"
    }

    if(typeof username !== "undefined") {
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if(username.length > 5 || username.length < 15 || !usernameRegex.test(username)) {
        validationErrors["username"] = "Please enter a valid username, username must only contain alphanumeric characters and must be between the length of 4 and 25 characters"
      }
    }
    if(!password ) {
      validationErrors["password"] = "Please enter a valid password"
    }
    
    if(password.length > 8 || password.length < 20) {
      validationErrors["password"] = "Password must be greater than 8 characters and less than 20 characters"
    }

    if(!repeatPassword || repeatPassword !== password) {
      validationErrors[repeatPassword] = "Your passwords do not match"
    }
    return validationErrors

  }
  const onSignUp = async (e) => {
    e.preventDefault();

    const errors = validateSignup();

    if(Object.keys(errors).length > 0 )return setValidationErrors(errors)
    if (password === repeatPassword) {
      const data = await dispatch(signUp( firstname, lastname, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };
  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="login-header-signup">
      <h2>Create your account</h2>
      </div>
      <div className="easy">
      <h3>Registration is easy.</h3>
      </div>
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="input">
          <label>First Name</label>
          <input
            className="login-input"
            type="text"
            name="firstname"
            onChange={updateFirstname}
            value={firstname}
          ></input>
          {validationErrors.firstname &&(
            <div className="error-handling">
              {validationErrors.firstname}
            </div>
          )}
        </div>
        <div className="input">
          <label>Last Name</label>
          <input
            className="login-input"
            type="text"
            name="lastname"
            onChange={updateLastname}
            value={lastname}
          ></input>
          {validationErrors.lastname &&(
            <div className="error-handling">
              {validationErrors.lastname}
            </div>
          )}
        </div>
        <div className="input">
          <label>User Name</label>
          <input
            className="login-input"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
          {validationErrors.username &&(
            <div className="error-handling">
              {validationErrors.username}
            </div>
          )}
        </div>
        <div className="input">
          <label>Email</label>
          <input
            className="login-input"
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="input">
          <label>Password</label>
          <input
            className="login-input"
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
          {validationErrors.password &&(
            <div className="error-handling">
              {validationErrors.password}
            </div>
          )}
        </div>
        <div className="input">
          <label>Confirm Password</label>
          <input
            className="login-input"
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          {validationErrors.repeatPassword &&(
            <div className="error-handling">
              {validationErrors.repeatPassword}
            </div>
          )}
        </div>
        <button className="submit-button"type='submit'>Register</button>
      </form>
    </>
  );
};

export default SignUpForm;
