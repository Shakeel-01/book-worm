import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Management = (props) => {
    const {bookName,authorName,price,_id} = props.book;

    const handleDelete = (id) =>{
        fetch(`https://protected-bayou-36307.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
           console.log(result)
        })
    }
    return (
        <div className='row'>
             <div className='col-sm'>
            <h6>{bookName}</h6>
            </div>
            <div className='col-sm'>
                 <h6>{authorName}</h6>
            </div>
            <div className='col-sm'>
                 <h6>{price}</h6>
            </div>
            <div className='col-sm'>
            <FontAwesomeIcon icon= { faEdit} /> <FontAwesomeIcon onClick={()=>handleDelete(_id)} icon= { faTrashAlt} /> 
            </div>
        </div>
    );
};

export default Management;