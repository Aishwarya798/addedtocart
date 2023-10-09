import React, { useContext,  } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import {C} from './Context'

function Header() {
 const {cart}=useContext(C);
  return (
    <>
    <span className="header"> </span>
      <ul className="nav">
        <li className="header1">
          <Link to="/home"> Home Page</Link>
        </li>
        <li className="header2">
          <Link to="/cart"> Cart ({cart.length}) </Link>
        </li>
      </ul>
  


    

  
    
    </>
  )
}

export default Header