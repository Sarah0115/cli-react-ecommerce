import React from 'react';
import './NavBar.scss';
import logo from '../../logo.svg';
import CartWidget from './cartWidget/cartWidget';
import {NavLink} from 'react-router-dom';

function NavBar() {
    let showCart = () =>{
        alert('muestra carrito'); 
    }
    let masitems = 5; // hay esta cantidad de items en el carrito 
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="#"><img alt="logo" className="logo" src={logo} width="30" height="24"/>OnlineShop</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="selected" className="nav-link" to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" className="nav-link" to={'/'}>
                            Features
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="selected" className="nav-link" to={'/ItemListContainer'}>
                            Productos
                        </NavLink>
                    </li>
                    
                </ul>
                </div>
                <CartWidget items={masitems}  showCart={showCart}/>
            </div>
        </nav>
    );
}


export default NavBar; 