import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
        <Link to="/">Shop</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header