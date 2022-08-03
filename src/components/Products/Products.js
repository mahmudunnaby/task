import React, { useEffect, useState } from 'react';
import Taskmodal from '../Shared/Taskmodal';

import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [details, setDetails] = useState(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    {
                        products.map(product => <Product key={product.name} product={product} setDetails={setDetails} setShow={setShow} >
                        </Product>)
                    }
                    {
                        console.log(details)

                    }
                    {
                        console.log(products)

                    }
                    {console.log(show)}
                    {details && <Taskmodal details={details} show={show} setShow={setShow} ></Taskmodal>}
                </div>
            </div>


        </div>
    );
};

export default Products;