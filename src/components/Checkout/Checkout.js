import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {id} = useParams()
    const [cart, setCart] = useState({})
    useEffect(()=>{
        const url =`https://protected-bayou-36307.herokuapp.com/book/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[id])

    const handleOrder = () =>{
        const orderData = {
            user:loggedInUser.name,
            email:loggedInUser.email,
            name:cart.bookName,
            author:cart.authorName,
            price:cart.price,
            quantity:1,
            image:cart.imageURL,
            orderDate:new Date()
        }
        fetch(`https://protected-bayou-36307.herokuapp.com/addOrder`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(orderData)
            })
            .then(res=>res.json())
            .then(data=>{data && alert('order added successfully')})
    }
    
    
   
    return (
        <div >
            <h1>Checkout</h1>
            <div className='row'>
            <div className='col-sm'>
                <h4>Book Name</h4>
            <h5>{cart.bookName}</h5>
            </div>
            <div className='col-sm'>
                <h4>Quantity</h4>
                <h5>1</h5>
            </div>
            <div className='col-sm'>
                <h4>Price</h4>
                <h5>{cart.price}</h5>
                <Button onClick={handleOrder} variant="contained" color="primary"> Checkout</Button>
          </div>
           </div>
            
        </div>
    );
};

export default Checkout;