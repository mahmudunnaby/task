import React, { useRef, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Product from '../Products/Product';
import Button from '../Shared/Button';


const Search = () => {
    const refSearch = useRef('');
    const [products, setProducts] = useState([])
    const [filteredSearch, setfilteredSearch] = useState([])
    const [year, setYear] = useState(false)
    const [category, setcategory] = useState(false)


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const search = refSearch.current.value


        const categorySearch = search.toLowerCase()

        if (year || category) {

            const SearchResult = products.filter(product => {
                return product?.year?.includes(search) || product?.catagory?.includes(categorySearch)
            })

            setfilteredSearch(SearchResult)
        }
        // if (year) {

        //     const SearchResult = products.filter(product => {
        //         return product?.year?.includes(search)
        //     })

        //     setfilteredSearch(SearchResult)
        // }
        if (category) {
            const SearchResult = products.filter(product => {
                return product?.category?.includes(categorySearch)
            })
            setfilteredSearch(SearchResult)
        }




        console.log(filteredSearch);
        console.log(categorySearch);
    }




    return (

        <div>
            <Form onSubmit={handleSubmit} className='p-3 d-flex justify-content-center align-items-center '>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => { setYear(!year) }} type="checkbox" label="Year" />
                    <Form.Check onClick={() => { setcategory(!category) }} type="checkbox" label="category" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-row justify-content-center align-items-center" controlId="formBasicEmail">
                    <Form.Label className='px-4 fw-bold'>Search</Form.Label>
                    <Form.Control ref={refSearch} type="text" placeholder="Search" />
                </Form.Group>

                <Button variant="primary" type="submit">Search </Button>

            </Form>
            <div className='row d-flex justify-content-center'>
                {
                    filteredSearch.map(product => <Product key={product.name} product={product} >
                    </Product>)
                }
            </div>

        </div>





    );
};

export default Search;