import React, { Component,useContext,useState,useEffect } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'



const Header = () => {
 const context =useContext(DataContext)
 const {card} = context;

 const [state,setState] = useState({toggle: false})
 const total_count = card.map((card) =>{ return( card.count)});

 const total_counts = total_count.reduce((a, b) => a + b, 0);

   function menuToggle (){
        setState({toggle: !state.toggle})
    }


        const {toggle} = state;

                  return (
            <header>
                <div className="menu" onClick={menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{total_counts}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
}

export default Header
