import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
      const bookData ={
        bookName:data.bookName,
        authorName:data.authorName,
        price:data.price,
        imageURL:imageURL
      }
      const url=`https://protected-bayou-36307.herokuapp.com/addBook`
      console.log(bookData)
      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(bookData)
      })
      .then(res=>console.log('response',res))
  };
  const handleImageChange= event =>{
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key','ac39451e30d6bf40bd73c6c789879340')
    imageData.append('image',event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    return (
       <div  className='row '>
           <div className='col-md-3'>

            <Link to='/managebooks'><h5><FontAwesomeIcon icon= { faTasks} /> Manage Books</h5></Link>
            <Link to='/admin'><h5><FontAwesomeIcon icon= { faPlus} /> Add Books</h5></Link>
            <Link><h5><FontAwesomeIcon icon= { faPen} /> Edit books</h5></Link>
           </div>
           <div  className='col-md-9 '>
             <form onSubmit={handleSubmit(onSubmit)}>
     <input name="bookName" placeholder='Book Name' ref={register} />
     <br/>
     <input name="authorName" placeholder='Author Name' ref={register} />
     <br/>
     <input name="price" placeholder='Price' type='price' ref={register} />
     <br/>
     
        <input name="image" type='file' ref={register} onChange={handleImageChange} />
     
     
      <br/>
      <input type="submit" />
    </form>
        </div>
       </div>
    );
};

export default Admin;