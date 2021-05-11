import React, { useEffect, useState } from 'react';
import Books from '../Books/Books'

const Home = () => {

    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('https://protected-bayou-36307.herokuapp.com/books')
    .then(res=>res.json())
    .then(data=>setBooks(data))
    },[])

    return (
        <div style={{margin:'10px 10%'}}  className='row d-flex justify-content-around flex-wrap'>
            {
                books.map(book=><Books book={book}></Books>)
            }
        </div>
    );
};

export default Home;