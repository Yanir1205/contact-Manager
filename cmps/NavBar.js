import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return <nav className='navbar-nav'>
        <div className='navbar container flex align-center'>
            <div className='navbar-list'><NavLink className='navbar-link' activeClassName='active' to='/' exact><img src='../assets/img/home1.png'></img></NavLink></div>
            <div className='navbar-list'><NavLink className='navbar-link' activeClassName='active' to='/contact' exact><img src='../assets/img/contacts1.png'></img></NavLink></div>
        </div>
    </nav >
}