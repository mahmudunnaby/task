import React, { useEffect, useState } from 'react';
import Taskmodal from '../Shared/Taskmodal';

import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [details, setDetails] = useState(null)
    const [show, setShow] = useState(false);
    const [showconfirm, setShowconfirm] = useState(false);
    const [handledelete, setHandledelete] = useState([]);
    const [confiremdelete, setConfiremdelete] = useState(false);



    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const remainingProducts = products.filter(product => {
    //     return product.name != handledelete
    // })



    // if (confiremdelete) {

    //     setProducts(remainingProducts)
    // }



    return (
        <div>

            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    {

                        products.map(product => <Product key={product.name} product={product} setDetails={setDetails} setShow={setShow} setHandledelete={setHandledelete} showconfirm={showconfirm} setShowconfirm={setShowconfirm}  >
                        </Product>)
                    }
                    {
                        console.log(details)

                    }
                    {
                        console.log(products)

                    }
                    {
                        console.log(handledelete)

                    }
                    {/* {
                        console.log(remainingProducts)

                    } */}
                    {console.log(show)}
                    {details && <Taskmodal details={details} show={show} setShow={setShow} setConfiremdelete={setConfiremdelete} handledelete={handledelete} showconfirm={showconfirm} setShowconfirm={setShowconfirm}  ></Taskmodal>}


                </div>
            </div>


        </div>
    );
};

export default Products;