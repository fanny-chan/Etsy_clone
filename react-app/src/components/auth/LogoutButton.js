import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session';
import '../home/Header.css'
import { emptyCart } from '../../store/carts';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);

  if (!user) {
    return <Redirect to='/' />;
  }

  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(emptyCart());
  };


  return <button className="logout-button"onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
