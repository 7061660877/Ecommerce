
import { useState,useEffect } from 'react';
import Home from './Views/Home';
import Navbar from './Layout/Navbar';
import Routing1 from './Routing/Routes1';
import axios from 'axios';

function App() {

    useEffect(() => {
        axios.get('http://localhost:9092/get-cart', { params: { cust_id: localStorage.getItem('uid') } })
            .then((res) => {
                localStorage.setItem('cart_len',res.data.data.length)
            })
            .catch((err) => {
                localStorage.setItem('cart_len',0) 
            });
    }, []);

    const isAuthenticated = localStorage.getItem('uid') !== null && localStorage.getItem('uid') !== "";

    return (
        <>
            {isAuthenticated ? <Navbar /> : null}
            <Routing1 />
        </>
    );
}

export default App;
