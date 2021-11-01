import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';
import './ProductDetail.css'



export default function EditReviewModal({review}) {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => setShowModal(false)
    const sessionUser = useSelector((state) => state.session.user);

    return (
        <>
        <div>
          {sessionUser &&(
            <button
            className='edit-review-form'
            onClick={() => setShowModal(true)}
            >
                Edit review!!
            </button>
            )}
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditReviewForm onClose={onClose} review={review}/>
            </Modal>
          )}
        </>
    )
}