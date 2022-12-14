import React, { useState } from 'react';
import Button from '../Shared/Button';

const Product = ({ product, setDetails, setShow, setHandledelete, setShowconfirm, btndelete }) => {
    const { name, image, category, brand, size, price, year } = product

    const handleClick = (product) => {
        setDetails(product)
        setShow(true)
    }




    return (
        <div className="card m-3 col-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded " style={{ width: '540px' }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{category} </p>
                        <p className="card-text">{brand}</p>
                        <p className="card-text">{size}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{year}</p>
                    </div>
                    <div >
                        <button onClick={() => handleClick(product)} className='btn btn-primary me-3' >Details</button>
                        <button onClick={() => btndelete(name)} className='btn btn-primary' >Delete</button>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Product;