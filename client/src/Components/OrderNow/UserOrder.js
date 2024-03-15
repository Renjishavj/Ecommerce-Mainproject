import React, { useEffect, useState } from 'react';
import { useLogin } from "../../Context/LoginContext";

import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer"
function UserOrder() {
    const { user } = useLogin();
    const [userData, setUserData] = useState(null);
   
    const email = user.email;
    console.log(email)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3300/route/user/${email}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const userData = await response.json();
                setUserData(userData.user);
                console.log(userData)
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
            <div className='order-list'>
                {/* <h2 className='head-orders'>Your Orders</h2> */}
                {userData && userData.orders ? (
                    <div className="order-container">
                        {userData.orders.map((order, index) => (
                            <div key={index} className="order-item">
                               
                                <div>
                                    <img src={order.orderList[0].image} alt="" className="cartorder" />
                                </div>
                                <div>
                                    <h2 className="inp-cart">{order.orderList[0].title}</h2>
                                    <p className="inp-cart">${order.orderList[0].price * order.orderList[0].quantity}</p>
                                    <input
                                        type="number"
                                        placeholder="qty"
                                        value={order.orderList[0].quantity}
                                        className="quandity-single"
                                    />
                                    <h3>Status</h3>
                                </div>
                                <p className='delivery-date'>Delivered By:{calculateDeliveryDate()}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default UserOrder;
