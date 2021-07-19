import React, { Component,useContext,useEffect ,useState} from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'


const Cart =  (props) => {
    let context = useContext(DataContext)
    const {card,increase,decrease,removeCard} = context;
    
    const total = card.map((card) => card.price * card.count);
    const total_cost = total.reduce((a, b) => a + b, 0);


    const handleIncrement = (item) => {
        increase(item._id)
    }
    
    const handleDecrease = (item) => {
        decrease(item._id)
    } 

    const handleRemove = (item) => {
        removeCard(item._id)
    }
        
        return (card?.length === 0 ? <h2 style={{textAlign:"center"}}>Nothings Product</h2> : 
       (
           <>
            {
                card.map(item =>(
                    <div className="details cart" key={item._id}>
                        <img src={item.src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
                            <Colors colors={item.colors}/>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <div className="amount">
                                <button className="count" type="reset" onClick={() => handleDecrease(item)}> - </button>
                                <span>{item.count}</span>
                                <button className="count" onClick={() => handleIncrement(item)}> + </button>
                            </div>
                        </div>
                        <div className="delete" onClick={() => handleRemove(item)}>X</div>
                    </div>
                ))
            }
            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total: ${total_cost}</h3>
            </div>
        </>
        )
    )
}

export default Cart;
