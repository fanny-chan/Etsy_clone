import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useHistory } from 'react-router';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  // const demoUser = async () => {
  //   await dispatch(login("demo@aa.io", "password"));
  // };

  const demoUser = async (e) => {
    e.preventDefault();
    const weAreIn = await dispatch(login("demo@aa.io", "password"));
    console.log('==========> we are in')
    if (weAreIn) {
      history.push("/")
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className="login-header">Sign in
      <button type="button" className="register-button">Register</button>
      </div>
      <form className="login-form" onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="padding">
          <label className="login-label" htmlFor='email'>Email</label>
          <input
            className="login-input"
            name='email'
            type='text'
            // placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="padding">
          <label className="login-label" htmlFor='password'>Password</label>
          <input
            className="login-input"
            name='password'
            type='password'
            // placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button className="button" type='submit'>Sign in</button>
        </div>
      </form>
      <button className="button-demo" onClick={demoUser}>Demo User</button>
    </>
    
  );
};

export default LoginForm;
