import React, { useEffect, useState } from 'react';
import { useLogin } from "../../Context/LoginContext";

import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";

function UserOrder() {
    const { user } = useLogin();
    const [userData, setUserData] = useState(null);
   
    const email = user.email;
    console.log(email);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3300/route/user/${email}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const userData = await response.json();
                setUserData(userData.user);
                console.log(userData);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        if (user && user.email) {
            fetchUserData();
        }
    }, [user]);

    const calculateDeliveryDate = () => {
        const currentDate = new Date();
        const deliveryDate = new Date(currentDate);
        deliveryDate.setDate(deliveryDate.getDate() + 7);
        return deliveryDate.toDateString();
    };

    return (
        <>
            <Header />
            
            <div className='order-list-one'>
                {userData && userData.orders ? (
                    <div className="order-container">
                        {userData.orders.map((order, orderIndex) => (
                            <div key={orderIndex} className="order-item">
                                {order.orderList.map((product, productIndex) => (
                                    <div key={productIndex} className='order-list'>
                                        <div>
                                            <img src={product.image} alt="" className="cartorder" />
                                        </div>
                                        <div>
                                            <h2 className="inp-cart">{product.title}</h2>
                                            <p className='delivery-date'>Delivered By: {calculateDeliveryDate()}</p>
                                            <p className="inp-cart">${product.price * product.quantity}</p>
                                            <input
                                                type="number"
                                                placeholder="qty"
                                                value={product.quantity}
                                                className="quandity-single"
                                            />
                                            <h3>Status</h3>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
            <Footer />
        </>
    );
}

export default UserOrder;
