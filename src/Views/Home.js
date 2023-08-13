import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Home.css'; // Import your CSS file for styling (if needed)
import { toast } from "react-toastify";

function Home({ xValue }) {
    var [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9092/get-product')
            .then((res) => {
                console.log(res.data); // Check the response to see if cust_id is there
                setData(res.data.data);
            })
            .catch((err) => {
                setData([]);
            });
    }, []);

    const handleCart = (x) => {
        console.log(x);
        var data = { cust_id: localStorage.getItem('uid'), p_data: x };

        // Check if cust_id is defined here
        console.log("cust_id:", localStorage.getItem('uid'));

        axios.post('http://localhost:9092/add-to-cart', data)
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((err) => {
                toast.error(err.response.message);
            });
    }

    return (
        <div className="home-container">
            <center><h2>WELCOME </h2></center>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Sr#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{d.p_name}</td>
                            <td>{d.p_price}</td>
                            <td>{d.p_cat}</td>
                            <td><img src={d.p_img} alt={d.p_name} width={200} height={200} /></td>
                            <td><button onClick={() => { handleCart(d) }}>Add To Cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
