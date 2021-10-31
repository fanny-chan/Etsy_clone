import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import './ProductDetail.css'



export default function AddReviewModal({review}) {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => setShowModal(false)

    return (
        <>
        <div>
            <button
            className='add-review-form'
            onClick={() => setShowModal(true)}
            >
                Add review
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <AddReviewForm onClose={onClose} review={review}/>
            </Modal>
          )}
        </>
    )
}


