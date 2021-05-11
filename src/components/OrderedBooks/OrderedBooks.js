import React from 'react';
import Button from '@material-ui/core/Button';



const OrderedBooks = (props) => {
    const {name, image,price,orderDate} = props.orders;
    
    return (
        <div style={{height:'500px',width:'25%',margin:'10px 10px'}} className='card ' >
             <img style={{height:'300px'}} src={image}  alt=""/>
             <div className="card-body">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <h6>Order Time:{orderDate}</h6>
                <Button variant="contained" color="secondary">Delete</Button>
        
      
             </div>
        </div>
    );
};

export default OrderedBooks;