import React, { Component } from 'react'
import Products from '../pages/Products/Products'
import {Route} from "react-router-dom"
import Cart from '../pages/Card/Cart'
import Home from '../pages/Home/Home'
import Payment from '../pages/Payment/Payment'
// import AdminPanel from '../adminPanel'
import Contact from '../pages/Contact/contact'
import About from '../pages/About/About'
import SignUp from '../pages/Reg/SignUp'
import SignIn from '../pages/Reg/SignIn'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/product" component={Products} exact  />
                <Route path="/cart" component={Cart}  exact/>
                <Route path="/payment" component={Payment} exact />                    
                <Route path="/contact" component={Contact} exact />
                <Route path="/about" component={About} exact />
                <Route path="/signUp" component={SignUp} exact />
                <Route path="/signIn" component={SignIn} exact />
            </section>
        )
    }
}

export default Section;
