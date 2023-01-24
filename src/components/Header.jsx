import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContextContainer } from '../App';

function Header() {
    const cartContext = useContext(CartContextContainer)

    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <div className="itemCount">{cartContext.itemCount()}</div>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Header