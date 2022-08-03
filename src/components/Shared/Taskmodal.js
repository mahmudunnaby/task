import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Taskmodal = ({ details, show, setShow, setConfiremdelete, handledelete, setShowconfirm, showconfirm }) => {
    const { name, category, brand, size, price, year } = details
    const handleconfirm = () => {
        setConfiremdelete(true)
        setShowconfirm(false)
    }
    return (
        <div>
            {showconfirm &&
                <Modal
                    show={showconfirm}
                    onHide={() => setShowconfirm(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h5 className="card-title">Are you sure?</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <button onClick={() => handleconfirm(true)}>confirm</button>
                    </Modal.Body>
                </Modal>

            }

            {show && <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h5 className="card-title">{name}</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p className="card-text">{category} </p>
                    <p className="card-text">{brand}</p>
                    <p className="card-text">{size}</p>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{year}</p>

                </Modal.Body>
            </Modal>}


        </div >
    );
};

export default Taskmodal;