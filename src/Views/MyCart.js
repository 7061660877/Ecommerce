/*import React, { useEffect, useState } from "react";
import axios from 'axios';


function MyCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const custId = localStorage.getItem('uid');
        axios.get('http://localhost:9092/get-cart', { params: { cust_id: custId } })
            .then((res) => {
                console.log(res.data);
                setCartItems(res.data.data);
            })
            .catch((err) => {
                setCartItems([]);
            });
    }, []);
    
    const calculateTotalAmount = (price, quantity) => {
        return price * quantity;
    }

    return (
        <div className="mycart-container">
            <h2>Your Cart</h2>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Sr#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Category</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.p_data?.p_name || ''}</td>
                            <td>{item.p_data?.p_price || ''}</td>
                            <td>{item.quantity || ''}</td>
                            <td>{calculateTotalAmount(item.p_data?.p_price, item.quantity)}</td>
                            <td>{item.p_data?.p_cat || ''}</td>
                            <td><img src={item.p_data?.p_img} alt={item.p_name} width={200} height={200} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyCart;*/
/*import React, { useEffect, useState } from "react";
import axios from 'axios';

function MyCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const custId = localStorage.getItem('uid');
        axios.get('http://localhost:9092/get-cart', { params: { cust_id: custId } })
            .then((res) => {
                console.log(res.data);
                setCartItems(res.data.data);
            })
            .catch((err) => {
                setCartItems([]);
            });
    }, []);
    
    const calculateTotalAmount = (price, quantity) => {
        return price * quantity;
    }

    return (
        <div className="mycart-container">
            <h2>Your Cart</h2>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Sr#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Category</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.p_data?.p_name || ''}</td>
                            <td>{item.p_data?.p_price || ''}</td>
                            <td>{item.quantity || ''}</td>
                            <td>{calculateTotalAmount(item.p_data?.p_price, item.quantity)}</td>
                            <td>{item.p_data?.p_cat || ''}</td>
                            <td><img src={item.p_data?.p_img} alt={item.p_name} width={200} height={200} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyCart;*/
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './MyCart.css'; // Import your CSS file for styling

function MyCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const custId = localStorage.getItem('uid');
        axios.get('http://localhost:9092/get-cart', { params: { cust_id: custId } })
            .then((res) => {
                console.log(res.data);
                setCartItems(res.data.data);
            })
            .catch((err) => {
                setCartItems([]);
            });
    }, []);
    
    const calculateTotalAmount = (price, quantity) => {
        return price * quantity;
    }

    return (
        <div className="mycart-container">
            <h2>Your Cart</h2>

            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <div className="item-details">
                            <h3>{item.p_data?.p_name || ''}</h3>
                            <p>Price: {item.p_data?.p_price || ''}</p>
                            <p>Quantity: {item.quantity || ''}</p>
                            <p>Total Amount: {calculateTotalAmount(item.p_data?.p_price, item.quantity)}</p>
                            <p>Category: {item.p_data?.p_cat || ''}</p>
                        </div>
                        <div className="">
                            <img src={item.p_data?.p_img} alt={item.p_name} width={200} height={200} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyCart;


