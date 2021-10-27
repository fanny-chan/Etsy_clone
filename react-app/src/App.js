import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Header from './components/home/Header';
import ProductDisplay from './components/ProductDetail';
import Reviews from './components/reviews';
import AllProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart/index';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Header />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
          <AllProductDisplay/>
        </Route>
        <Route path='/products/:productId'>
          <ProductDisplay />
        </Route>
        <ProtectedRoute path='/products'>
          {/* <AllProductDisplay/> */}
        </ProtectedRoute>
        <ProtectedRoute path='/carts'>
          <h2>Carts</h2>
          <Cart />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
