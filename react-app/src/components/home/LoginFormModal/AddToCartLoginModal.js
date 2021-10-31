import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from '../../auth/LoginForm';
import './AddToCartModal.css'

function LoginFormModalAddToCart() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="loginModal" className="login_button_add_to_cart" onClick={() => setShowModal(true)}>Add to cart</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModalAddToCart;