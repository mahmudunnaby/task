import React, { useEffect, useState } from 'react';

import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
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
                        products.map(product => <Product key={product.name} product={product} >
                        </Product>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Products;