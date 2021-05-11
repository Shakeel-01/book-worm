import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav style={{padding:'20px 40px', color:'navy'}} className='navbar '>
                <div style={{padding:'20px 40px', color:'navy'}}>
                    <h1>Book Worm</h1>
                </div>
               <div className='nav-link'>
               <Link to="/home">Home</Link>
                <Link to="/order">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="deals">Deals</Link>
            {<Link to='/login'><button className='btn btn-info' >Log in</button></Link>}
               </div>
            </nav>
        </div>
    );
};

export default Header;