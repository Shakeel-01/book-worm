import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedBooks from '../OrderedBooks/OrderedBooks';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://protected-bayou-36307.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className='d-flex justify-content-around flex-wrap'>
            
            {
                orders.map(order=><OrderedBooks orders={order}></OrderedBooks>)
            }
        </div>
    );
};

export default Orders;