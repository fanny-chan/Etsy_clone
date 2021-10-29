import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);

  if (!user) {
    return <Redirect to='/' />;
  }
  
  const onLogout = async (e) => {
    await dispatch(logout());
  };


  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
