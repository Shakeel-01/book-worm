import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'
import Management from '../Management/Management';

const ManageBooks = () => {
    const [books,setBooks] = useState([])
    console.log(books)
    useEffect(()=>{
        fetch('https://protected-bayou-36307.herokuapp.com/books')
    .then(res=>res.json())
    .then(data=>setBooks(data))
    },[])

    return (
        <div className='row'>
            <div className='col-md-3'>

                <Link to='/managebooks'><h5><FontAwesomeIcon icon={faTasks} /> Manage Books</h5></Link>
                <Link to='/admin'><h5><FontAwesomeIcon icon={faPlus} /> Add Books</h5></Link>
                <Link><h5><FontAwesomeIcon icon={faPen} /> Edit books</h5></Link>
            </div>
            <div className='col-md-9'>
                <div className="row">
                    <div className="col-sm"><h4>Book Name</h4></div>
                    <div className="col-sm"><h4>Author Name</h4></div>
                    <div className="col-sm"><h4>Price</h4></div>
                    <div className="col-sm"><h4>Action</h4></div>
                </div>
                {
                    books.map(book=><Management book={book}></Management>)
                }
            </div>
        </div>
    );
};

export default ManageBooks;