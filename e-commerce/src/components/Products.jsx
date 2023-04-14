import styled from "styled-components"

import Product from "./Product"
import { useState, useLayoutEffect } from "react"

import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {

    const [ products, setProducts ] = useState([])

    useLayoutEffect(()=>{
        const API_URL = "https://fakestoreapi.com/products?limit=5"

        const fetchData = async ()=> {
            try {
                const response = await axios.get(API_URL)
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])


    return (
        <Container>
            {products.map( item =>(
                <Product key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default Products