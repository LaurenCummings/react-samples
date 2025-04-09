import '../css/Modal.css';
import { useState } from 'react';
import Modal from './Modal';

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal onClose={onClose} body={<div>Customized body</div>} />
            }
        </div>
    )
}

export default ModalTest;