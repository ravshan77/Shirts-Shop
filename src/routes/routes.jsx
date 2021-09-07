import React, { Component } from 'react'
import Products from '../pages/Products/Products'
import {Route} from "react-router-dom"
import Cart from '../pages/Card/Cart'
import Home from '../pages/Home/Home'
import Payment from '../pages/Payment/Payment'
import AdminPanel from '../adminPanel'
import Contact from '../pages/Contact/contact'
import About from '../pages/About/About'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Home} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />                    
                    <Route path="/admin" component={AdminPanel} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/about" component={About} exact />

            </section>
        )
    }
}

export default Section;
