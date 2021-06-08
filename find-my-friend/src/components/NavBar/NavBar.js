import React from 'react';
import './NavBar.css';
import logo from '../../logo.svg';
import CartWidget from './cartWidget/cartWidget';

function NavBar() {
    let showCart = () =>{
        alert('muestra carrito'); 
    let masitems = 5; // hay esta cantidad de items en el carrito 
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="#"><img alt="logo" className="logo" src={logo} width="30" height="24"/>OnlineShop</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
                <CartWidget items='5'  showCart={showCart}/>
            </div>
        </nav>
    );
}


export default NavBar; 