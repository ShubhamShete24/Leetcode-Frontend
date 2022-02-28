import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ShowDetails() {
    // const [singleProblem, setSingleProblem] = useState([])
    // const { id } = useParams();

    // const fetchSingleProblem = () => {
    //     let url = `http://127.0.0.1:8000/ProblemCreation/problem/${id}`;
    //     fetch(url)
    //       .then((res) => res.json())
    //       .then((data) => setSingleProblem(data))
        
    // }

    // useEffect(() => {
    //   fetchSingleProblem()
    // }, [])
    
    // console.log(singleProblem)

    const [product, setProduct] = useState("")

    const { id } = useParams();

    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/ProblemCreation/problem/${id}`)
        setProduct(data)
    }

    useEffect(() => {
        getSingleProduct();
    },[])
    console.log(product);
    return (
        <>
            <div className='container my-3'>
                <h2>Title: {product['data'][4]}</h2>
                {/* <h4>Topic: {myArray[0][2]}</h4>
                <span><h4>Difficulty: {myArray[0][3]}</h4></span> */}
            </div>
        </>
    )
}

export default ShowDetails