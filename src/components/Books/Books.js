import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const Books = ({book}) => {
    return (
        <div style={{height:'500px',width:'25%',margin:'10px 10px'}} className='card col-md-3' >
            <div className='card-body'>
            <img style={{height:'300px'}} src={book.imageURL} alt=""/>
            <h3>{book.bookName}</h3>
            <h5>{book.authorName}</h5>
            </div>
            <div className='d-flex justify-content-around card-body'>
                <h3 style={{color:'slateblue'}}>${book.price}</h3>
                <Link to={`/checkout/${book._id}`}><Button variant="contained" color="primary" href="#contained-buttons">Buy Now</Button></Link>
            </div>

        </div>
    );
};

export default Books;