import React, { Component,useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

const Products = () => {

    const context = useContext(DataContext)

        const {products,addCard} = context;

        return (
            <div id="product">
               {
                   products?.map(product =>(
                       <div  className="card" key={product._id}>
                               <img src={product.src} alt=""/>
                           <div className="content">
                               <h3>
                                   {product.title}
                               </h3>
                               <span>${product.price}</span>
                               <button onClick={() => addCard(product._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    // }
}

export default Products
